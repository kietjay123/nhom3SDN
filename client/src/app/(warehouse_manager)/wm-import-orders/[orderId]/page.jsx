// @next
import dynamic from 'next/dynamic';

// @project
// Dynamically import the Assigned Inbound Order Detail component
const AssignedInboundOrderDetail = dynamic(() => import('@/views/warehouse-manager/assigned-inbound-order-detail'));

/***************************  AUTH - LOGIN  ***************************/

export default function Login() {
  return <AssignedInboundOrderDetail />;
}
