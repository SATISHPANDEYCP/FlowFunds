const express = require('express');
const { createGroup, addGroupExpense, getGroupExpenses } = require('../controllers/groupExpenseController');

const router = express.Router();

router.post('/create', createGroup);
router.post('/:groupId/expense', addGroupExpense);
router.get('/:groupId', getGroupExpenses);

module.exports = router;
