// const mongoose = require("mongoose");
// const User = require('./user')
// const userExpense = new mongoose.Schema({

//     userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     depositAmount: { type: Number, required: true },
//     expenseAmount: { type: Number, required: true },
//     expenseAmount: { type: Number, required: true },
//     date: { type: Date, default: Date.now },
//     description: { type: String },
//     receiptUrl: { type: String },
//     createdAt: { type: Date, default: Date.now }
    
//  });

// const userModel = mongoose.model(user, userSchema);
// module.exports = userModel;

const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true, enum: ['Food', 'Travel', 'Bills', 'Shopping', 'Health', 'Other'] },
    date: { type: Date, required: true },
    description: { type: String },
    receipt: { type: String }, // File path or URL for receipt
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', expenseSchema);
