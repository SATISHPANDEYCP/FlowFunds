const Budget = require('../models/budget');

exports.setBudget = async (req, res) => {
    try {
        const { monthlyLimit, alertThreshold } = req.body;
        const budget = new Budget({ user: req.session.userId, monthlyLimit, alertThreshold });

        await budget.save();
        res.status(201).json({ message: 'Budget set successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBudget = async (req, res) => {
    try {
        const budget = await Budget.findOne({ user: req.session.userId });
        res.json(budget);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
