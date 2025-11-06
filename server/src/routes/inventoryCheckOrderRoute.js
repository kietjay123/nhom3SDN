const express = require('express');
const router = express.Router();
const { inventoryCheckOrderValidator } = require('../middlewares/validate');
const inventoryCheckOrderController = require('../controllers/inventoryCheckOrderController');
const authenticate = require('../middlewares/authenticate');

router.get(
  '/',
  authenticate,
  inventoryCheckOrderValidator.validateGetAllInventoryCheckOrders,
  inventoryCheckOrderController.getAllInventoryCheckOrders
);

router.post(
  '/',
  authenticate,
  inventoryCheckOrderValidator.validateCreateInventoryCheckOrder,
  inventoryCheckOrderController.createInventoryCheckOrder
);

router.get(
  '/:id',
  authenticate,
  inventoryCheckOrderValidator.validateGetInventoryCheckOrderById,
  inventoryCheckOrderController.getInventoryCheckOrderById
);

router.put(
  '/:id',
  authenticate,
  inventoryCheckOrderValidator.validateUpdateInventoryCheckOrder,
  inventoryCheckOrderController.updateInventoryCheckOrder
);

router.patch(
  '/:id',
  authenticate,
  inventoryCheckOrderValidator.validateUpdateInventoryCheckOrder,
  inventoryCheckOrderController.updateInventoryCheckOrder
);

router.post(
  '/:id/inspections',
  authenticate,
  inventoryCheckOrderController.createInspections
);

module.exports = router; 