const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    monthlyLimit: { type: Number, required: true },
    currentSpending: { type: Number, default: 0 },
    alertThreshold: { type: Number, default: 80 }, // Alert at 80% of limit
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Budget', budgetSchema);
