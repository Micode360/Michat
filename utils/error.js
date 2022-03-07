

const Error = (status, message) => {
    //return `${status} ${message}`
    
    res.status(status).json({message});
}

exports.Error = Error;