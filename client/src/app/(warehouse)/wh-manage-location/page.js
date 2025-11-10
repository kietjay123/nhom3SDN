// @next
import dynamic from 'next/dynamic';

// @project

const ViewListLocation = dynamic(() => import('@/views/warehouse/wh-location'));

// Page component for managing warehouse locations
export default function ImportOrdersPage() {
  return <ViewListLocation />;
}
