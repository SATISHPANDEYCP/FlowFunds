// const mongoose = require('mongoose');


// const userSchema = new mongoose.Schema({
//     name:{
//         type: String, 
//         required: true,
//     },
    
//     mob_no: {
//         type: Number,
//         required: true,
//         unique: true,        
//     },

//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password:{
//         type: String,
//         required: true,
//     }

// })

// const userModel = mongoose.model("User", userSchema);
// module.exports = userModel;


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: { type: String, default: null },
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Password comparison method
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
