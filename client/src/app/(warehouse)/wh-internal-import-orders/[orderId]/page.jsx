'use client';
import dynamic from 'next/dynamic';

const InternalImportOrderDetailWH = dynamic(() => import('@/views/warehouse/InternalImportOrderDetail'));

// Page component for internal import order detail
export default function Page() {
  return <InternalImportOrderDetailWH />;
}
