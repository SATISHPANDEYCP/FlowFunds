const Income = require('../models/income');

exports.addIncome = async (req, res) => {
    try {
        const { amount, source, date, description } = req.body;
        const income = new Income({ user: req.session.userId, amount, source, date, description });

        await income.save();
        res.status(201).json({ message: 'Income added successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find({ user: req.session.userId }).sort({ date: -1 });
        res.json(incomes);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
