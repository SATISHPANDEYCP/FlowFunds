const Expense = require('../models/expense');

// Add Expense
exports.addExpense = async (req, res) => {
    try {
        const { amount, category, date, description } = req.body;
        const expense = new Expense({ user: req.session.userId, amount, category, date, description });

        await expense.save();
        res.status(201).json({ message: 'Expense added successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Expenses
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.session.userId }).sort({ date: -1 });
        res.json(expenses);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: 'Expense deleted successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
