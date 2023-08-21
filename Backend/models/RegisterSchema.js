const mongoose = require('mongoose');

const registerSchema = mongoose.Schema(
    {
        first: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, 
        },
        password: {
            type: String,
            required: true,
        },
        mobile: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        isAdmin:{
            type:String,
            default:false
        },
        refreshToken:String, 
    },
    { timestamps: true }
);

const registerSchemas = mongoose.model('User', registerSchema);



module.exports = registerSchemas;
