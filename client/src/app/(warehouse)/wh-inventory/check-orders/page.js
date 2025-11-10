// @next
import dynamic from 'next/dynamic';

// @project

const CheckOrders = dynamic(() => import('@/views/warehouse/wh-check-orders'));

// Page component for managing check orders
export default function ImportOrdersPage() {
  return <CheckOrders />;
}
