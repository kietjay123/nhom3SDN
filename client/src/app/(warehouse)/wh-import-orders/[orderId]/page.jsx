// @next
import dynamic from 'next/dynamic';

// @project

const AssignedInboundOrderDetail = dynamic(() => import('@/views/warehouse/ImportOrderDetail'));

// Page component for internal import order detail
export default function Login() {
  return <AssignedInboundOrderDetail />;
}
