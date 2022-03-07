const router = require('express').Router();
const User = require('../models/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/keys').jwtSecret;
const Error = require('../utils/error');
const mailer = require('../utils/mailer');


exports.SignUp = async (req, res, next) => {
    const { firstname, lastname, email, password } = req.body,
        username = 'none';

      

    const user = await User.findOne({ email });

    if(user === null) {

        try {
            const user = await User.create({
                username,
                firstname,
                lastname,
                email,
                password
            })
    
            sendToken(user, 201, res);
    
    
    
            const message = `
            <h1>Welcome to Mi Chat</h1>
            <p>Hello ${user.firstname} ${user.lastname},</p>
            <p>
                Hi, My name is Miracle King. Welcome to mi chat soon to be called Mi world. 
                A place where you can connect with people all around the world. Feel free to make new
                friends, to build hope and dreams together. Create your world.
            </p>
            <p><strong>Miracle King Abaye</strong></p>
            <p>Founder of Mi-Chat ( AKA Mi-World )</p>
            `;
    
    
            try {
                await mailer({
                    to: user.email,
                    subject: "Welcome to Mi-Chat",
                    text: message
                })
    
    
            } catch (error) {
                return next(Error(500, "Unable to send email"))
            }
    
    
    
        } catch (error) {
            next(error);
        }

    }

    else if (user.email === email) return res.json({ message: 'Email is already taken' });



   

}


exports.SignIn = (req, res, next) => {


    res.send({
        status: 200,
        message: 'Sign In SuccessFul'
    })
}


const sendToken = (user, statusCode, res) => {
    const token = user.getSignedInToken();
    res.status(statusCode).json({ success: true, token })
}


