// @project
import other from './other';
import uiElements from './ui-elements';
import manage from './manage';
import supervisor from './supervisor';
import warehouse from './warehouse';
import representative from './representative';
import warehouseManager from './warehouse-manager';
import representativeManager from './representative-manager';

/***************************  MENU ITEMS  ***************************/

const menuItems = {
  items: [manage, uiElements, other],
  // Static menu object for backward compatibility
  supervisor: [supervisor],
  warehouse: [warehouse],
  warehouseManager: [warehouseManager],
  representative: [representative],
  representativeManager: [representativeManager]
};

export default menuItems;
