const router = require('express').Router();
const { SignUp, SignIn } = require('../controllers/auth')
// const authModel = require('../models/auth.model');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const jwtSecret = require('../config/keys').jwtSecret;
// const reusable = require('../reusable');
// const sgMail = require('@sendgrid/mail');






router.post('/signup', SignUp);


router.post('/signin', SignIn);




module.exports = router