const router = require("express").Router();
const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/keys").jwtSecret;
const Error = require("../utils/error");
const mailer = require("../utils/mailer");
const uuid = require("uuid");

exports.SignUp = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body,
    username = "none",
    confirmationToken = uuid.v4();

  const user = await User.findOne({ email });

  if (user === null) {
    try {
      const user = await User.create({
        username,
        firstname,
        lastname,
        email,
        password,
        confirmPassword: false,
        confirmPasswordToken: confirmationToken,
      });

      sendToken(user, 201, res);

      // const message = `
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

      const message = `
            <h1 style="color:#111620">Confirm Your Account</h1>
            <p>Hello ${user.firstname} ${user.lastname},</p>
            <p>
                one more step to go. Click the button below to verify your account.
            </p>
            <a href="http://localhost:3000/confirm/${confirmationToken}" style="display:block; background-color:#111620; padding:1rem 2rem; text-decoration:none; border-radius:4px; color: #ffffff; width:fit-content;" clicktracking=off>Confirm Email</a>
            <br/>
            <p>Yours Truly,<p>
            <p><strong>Michat Team</strong></p>
            `;

      try {
        await mailer({
          to: user.email,
          subject: "Confirm Your Account",
          text: message,
        });
      } catch (error) {
        return next(Error(500, "Unable to send email"));
      }
    } catch (error) {
      next(error);
    }
  } else if (user.email === email)
    return res.json({ message: "Email is already taken" });
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
            return next(Error(400, "please provide email and password"));
        }
    
        try { 
    
            const user = await User.findOne({ email }).select("+password");
    
            if(!user) {
                return next(Error(401, "invalid credentials"));
            }
    
            const isMatch = await user.compareToMatchPasswords(password);
    
            if(!isMatch) {
                return next(Error(401, "invalid credentials"));
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

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedInToken();
  res.status(statusCode).json({ success: true, token });
};
