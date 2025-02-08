const express = require('express');
const { setBudget, getBudget } = require('../controllers/budgetController');

const router = express.Router();

router.post('/set', setBudget);
router.get('/', getBudget);

module.exports = router;
