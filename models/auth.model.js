const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema ({
    email: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    },
},{
    timestamps:true,
});

const authModel = mongoose.model('authModel', authSchema);

module.exports = authModel;