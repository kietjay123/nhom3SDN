// @next
import dynamic from 'next/dynamic';

// @project
// Dynamically import the Warehouse Manager Dashboard component
const WarehouseManagerDashboardPage = dynamic(() => import('@/views/warehouse-manager/dashboard'));

/***************************  WAREHOUSE MANAGER DASHBOARD PAGE  ***************************/

export default function WarehouseManagerDashboardPages() {
  return <WarehouseManagerDashboardPage />;
}
