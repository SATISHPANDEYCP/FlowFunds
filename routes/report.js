const express = require('express');
const { getMonthlyReport, getYearlyReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/monthly', getMonthlyReport);
router.get('/yearly', getYearlyReport);

module.exports = router;
