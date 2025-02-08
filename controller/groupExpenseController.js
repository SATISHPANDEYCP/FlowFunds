const GroupExpense = require('../models/groupExpense');

exports.createGroup = async (req, res) => {
    try {
        const { groupName, members } = req.body;
        const group = new GroupExpense({ groupName, members });

        await group.save();
        res.status(201).json({ message: 'Group created successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
