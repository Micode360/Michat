const router = require('express').Router();
const authModel = require('../models/auth.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/keys').jwtSecret; 






router.post('/signUp', async (req, res) => {

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


      const newUserData = new authModel({ email, password });

      const crypted = await bcrypt.hash(newUserData.password, 10)
      .then(cryptedPassword => {
        return cryptedPassword;
      }).catch(err => err);
         newUserData.password = crypted;
         newUserData.save()
        .then((data) => {
           console.log(data,'token')

          res.json({ message: "You have successfully registered" })
        })
        .catch(err => res.status(400).json('Reg Error' + err));
});







router.post('/signin', (req, res) => {
    console.log(req.body);
});


module.exports = router