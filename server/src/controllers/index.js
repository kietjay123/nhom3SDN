const InventoryCheckInspection = require('../models/InventoryCheckInspection');

module.exports = {
  authController: require('./authController'),
  cronController: require('./cronController'),
  mailController: require('./mailController'),
  userController: require('./userController'),
  medicineController: require('./medicineController'),
  batchController: require('./batchController'),
  importOrderController: require('./importOrderController'),
  locationController: require('./locationController'),
  importInspectionController: require('./importInspectionController'),
  areaController: require('./areaController'),
  supplierController: require('./supplierController'),
  retailerController: require('./retailerController'),
  packageController: require('./packageController'),
  exportOrderController: require('./exportOrderController'),
  userController: require('./userController'),
  inventoryController: require('./inventoryController'),
  inventoryCheckInspectionController: require('./inventoryCheckInspectionController'),
  logLocationChangeController: require('./logLocationChangeController'),
};
