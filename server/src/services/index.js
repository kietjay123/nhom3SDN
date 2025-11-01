const authService = require('./authService');
const cronService = require('./cronService');
const emailService = require('./emailService');
const importOrderService = require('./importOrderService');
const inspectionService = require('./inspectionService');
const medicineService = require('./medicineService');
const packageService = require('./packageService');
const supplierContractService = require('./supplierContractService');
const supplierService = require('./supplierService');
const retailerService = require('./retailerService');
const inventoryService = require('./inventoryService');
const inventoryCheckInspectionService = require('./inventoryCheckInspectionService.js');
const logLocationChangeService = require('./logLocationChangeService.js');
let mailtrapService = {};

const loadMailtrap = async () => {
  try {
    const module = await import('./mailtrapService.js');
    mailtrapService = module.default || module;
  } catch (e) {
    console.error('Mailtrap load error:', e);
  }
};

module.exports = new Promise(async (resolve) => {
  await loadMailtrap();

  resolve({
    ...mailtrapService,
    ...authService,
    ...cronService,
    ...emailService,
    ...importOrderService,
    ...inspectionService,
    ...medicineService,
    ...packageService,
    ...supplierContractService,
    ...supplierService,
    ...retailerService,
    ...inventoryService,
    ...inventoryCheckInspectionService,
    ...logLocationChangeService,
  });
});
