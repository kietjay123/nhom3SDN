const startInventoryJob = require('./inventoryJob');
const { startReminderEmailJob } = require('./reminderEmailJob');

function startAllCrons() {
  startInventoryJob();
  startReminderEmailJob();
}

module.exports = startAllCrons;
