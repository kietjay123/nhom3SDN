const express = require('express');
const router = express.Router();
const logLocationChangeController = require('../controllers/logLocationChangeController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

router.use(authenticate);



router.get(
  '/',
  authorize([
    'supervisor'
  ]),
  logLocationChangeController.getLogLocationChanges,
);

router.get(
  '/:license_code/getHistoryLast6Months',
  authorize([
    'representative',
    'representative_manager',
  ]),
  logLocationChangeController.getHistoryLast6Months,
);

module.exports = router;
