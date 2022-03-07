//const Error = require('../utils/error')

const ErrorResponder = (err, req, res, next) => { 
    let error = {...err};

    console.log(err, "error");




    res.status(error.statusCode || 500).json({
        success: false, 
        error: error.message || "Server Error"
    });
}


exports.ErrorResponder = ErrorResponder