const mongoose = require('mongoose');

const groupExpenseSchema = new mongoose.Schema({
    groupName: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    expenses: [
        {
            payer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            amount: { type: Number, required: true },
            category: { type: String, required: true },
            date: { type: Date, required: true },
            description: { type: String }
        }
    ],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GroupExpense', groupExpenseSchema);

