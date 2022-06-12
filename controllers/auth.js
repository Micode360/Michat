const User = require("../models/usermodel");
const crypto = require("crypto");
const Error = require("../utils/error");
const mailer = require("../utils/mailer");
const uuid = require("uuid");

exports.SignUp = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body,
    username = "none",
    confirmationToken = uuid.v4();

  const user = await User.findOne({ email });

  if (user === null) {
    try {
      const user = await User.create({
        username,
        firstName,
        lastName,
        email,
        password,
        confirmPassword: false,
        confirmPasswordToken: confirmationToken,
      });

      sendToken(user, 201, res);

      // const welcomeMessage = `
      // <h1>Welcome to Mi Chat</h1>
      // <p>Hello ${user.firstname} ${user.lastname},</p>
      // <p>
      //     Hi, My name is Miracle King. Welcome to mi chat soon to be called Mi world.
      //     A place where you can connect with people all around the world. Feel free to make new
      //     friends, to build hope and dreams together. Create your world.
      // </p>
      // <p><strong>Miracle King Abaye</strong></p>
      // <p>Founder of Mi-Chat ( AKA Mi-World )</p>
      // `;

      const confirmationMessage = `
            <h1 style="color:#111620">Confirm Your Account</h1>
            <p>Hello ${user.firstName} ${user.lastName},</p>
            <p>
                One more step to go. Click the button below to verify your account.
            </p>
            <a href="http://localhost:3000/confirmaccount/${confirmationToken}" style="display:block; background-color:#111620; padding:1rem 2rem; text-decoration:none; border-radius:4px; color: #ffffff; width:fit-content;" clicktracking=off>Confirm Email</a>
            <br/>
            <p>Yours Truly,<p>
            <p><strong>Michat Team</strong></p>
            `;

      try {
        await mailer(
          "Michat: Confirm Your Account",{
          to: user.email,
          subject: "Confirm Your Account",
          text: confirmationMessage
        });
      } catch (error) {
        return next(Error(500, "Unable to send email"));
      }
    } catch (error) {
      next(error);
    }
  } else if (user.email === email)
    return res.status(400).json({ message: "Email is already taken" });
};

exports.confirmAccount = async (req, res, next) => {
  const confirmPasswordToken = req.params.confirmationToken;

  try {
    const user = await User.findOne({ confirmPasswordToken });

    if (user.confirmPassword === false) {
      user.confirmPassword = true;

      await user.save();

      res.status(201).json({
        success: true,
        data: "Your account is confirmed.",
      });
    } else {
      res.status(201).json({
        success: true,
        data: "Your account was already confirmed.",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.SignIn = async (req, res, next) => {

        const { email, password } = req.body;

        if(!email || !password) { 
            return next(res.status(400).json({ message: "Please provide email and password" }));
        }
    
        try { 
    
            const user = await User.findOne({ email }).select("+password");
    
            if(!user) {
                return next(res.status(400).json({ message: "Invalid email or password" }));
            }
    
            const isMatch = await user.compareToMatchPasswords(password);
    
            if(!isMatch) {
                return next(res.status(400).json({ message: "Invalid email or password" }));
            }
    
            sendToken(user, 201, res)
    }
    catch(error){
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
};


exports.forgotPassword = async (req, res, next) => {
   const { email } = req.body;

  try {
      const user = await User.findOne({ email });

      if(!user) return next(res.status(400).json({ message: "Invalid email" }));

      const resetToken = user.getResetPasswordToken();

      await user.save();

      const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;
  
      const message = `
      <h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password</p>
      <a href="${resetUrl}" style="display:block; background-color:#111620; padding:1rem 2rem; text-decoration:none; border-radius:4px; color: #ffffff; width:fit-content;" clicktracking=off>Reset password</a>
      `;


      try {
          await mailer(
            "Michat: Reset your Password",{
              to: user.email,
              subject: "Password Reset Request",
              text: message
          })

          res.status(202).json({success: true, data: "An email has been sent"});
      }catch(error) {
          user.resetPasswordToken = undefined;
          user.resetPasswordExpire = undefined;

          await user.save();
          return next(res.status(400).json({ message: "Email could not be sent." }))
      }

  }catch(error) {
      next(error);
  }

}

exports.resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest("hex");

  try {
      const user = await User.findOne({
          resetPasswordToken,
          resetPasswordExpire: { $gt: Date.now() }
      })


      if(!user) return next(res.status(400).json({ message: "Invalid reset token" }));

      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      res.status(201).json({
          success: true,
          data: "Password Reset Success"
      })
  } catch (error) {
      next(error);
  }
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedInToken();
  res.status(statusCode).json({ success: true, token });
};
