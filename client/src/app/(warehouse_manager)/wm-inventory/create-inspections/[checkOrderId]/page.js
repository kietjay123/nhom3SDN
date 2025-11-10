// @next
import dynamic from 'next/dynamic';

// @project

const CheckInspections = dynamic(() => import('@/views/warehouse-manager/wm-check-inspections'));


// Page component for creating inspections based on check order ID
export default function ImportOrdersPage() {
  return <CheckInspections />;
}
