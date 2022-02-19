const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   
    "_id": {
        type: String,
    },
    "email": {
        type: String,
        required: true 
    },
    "firstName": {
        type: String, 
        required: true
    },
    "lastName": String,
    "password": String, 
    "role": String,
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)