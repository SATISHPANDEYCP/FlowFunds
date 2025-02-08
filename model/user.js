const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true,
    },
    
    mob_no: {
        type: Number,
        required: true,
        unique: true,        
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }

})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;