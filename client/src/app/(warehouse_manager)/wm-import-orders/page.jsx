// @next
import dynamic from 'next/dynamic';

// @project
// Dynamically import the Manage Import Orders component
const ManageImportOrders = dynamic(() => import('@/views/warehouse-manager/manage-import-orders'));

/***************************  IMPORT ORDERS MANAGEMENT  ***************************/

export default function ImportOrdersPage() {
  return <ManageImportOrders />;
}
