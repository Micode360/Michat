const router = require('express').Router();
const authModel = require('../models/auth.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/keys').jwtSecret;
const reusable = require('../reusable');
const sgMail = require('@sendgrid/mail');






router.post('/signUp', async (req, res) => {
  console.log(req.body, 'body');

  const { email, password } = req.body;

  const existingEmail = await authModel.findOne({ email }).select("-password");

  if (existingEmail) {
    res.status(401).json('Email has been taken')
    return;
  }

  if (password.length < 6) {
    res.status(401).json('Password must be more than 6 characters')
    return;
  }

  let generatedToken = reusable.tknGenerate(20);

  const newUserData = new authModel({ email, password, tokenId: generatedToken, verification: false });

  const crypted = await bcrypt.hash(newUserData.password, 15);
  newUserData.password = crypted;
  newUserData.save()
    .then((data) => {
      console.log(data, "data")
      const cesstkn = jwt.sign({ accsstkn: { id: data.tokenId } }, jwtSecret, { expiresIn: '1d' });

      jwt.sign({ user: { name: data.email } }, jwtSecret, { expiresIn: '1d' },
        (err, token) => {
          if (err) throw err;
          res.status(201).json({ success: 'Sign Up Successful', payload: { token, cesstkn }, httpOnly: true })

          // reusable.mailTransporter("Confirm your Email", data.email, {email: data.email, message: reusable.verifyTemp()})
          // .catch(e => console.log(e.response, "error"))

          // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
          sgMail.setApiKey(process.env.SENDGRID_API_KEY)
          const msg = {
            to: process.env.toMail, // Change to your recipient
            from: process.env.fromMail, // Change to your verified sender
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: reusable.verifyTemp(),
          }
          sgMail
            .send(msg)
            .then(() => {
              console.log('Email sent')
            })
            .catch((error) => {
              console.error(error);

              if (error.response) {
                console.error(error.response.body)
              }
            })

        });

    })
    .catch(err => res.status(400).json('Reg Error' + err));

    
});


router.post('/signin', (req, res) => {
  console.log(req.body);
});


module.exports = router