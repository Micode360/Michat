const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Error = require("../utils/error");


exports.protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token) {
        return next(Error(401, "Not authorized to access this route"))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        if(!user) {
            return next(Error(404, "No user found with this id"))
        }

        req.user = user;
        
        next();
    } catch (error) {
        return next(Error(401, "Not authorized to access this route"))
    }
}