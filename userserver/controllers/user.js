const User = require("../models/usermodel");

exports.User = async (req, res) => {
    const user = await User.findOne({ email: 'miracleking1133@gmail.com' });
    res.json(user); 
} 