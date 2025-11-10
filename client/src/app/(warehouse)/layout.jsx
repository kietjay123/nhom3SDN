import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @project
const WarehouseLayout = dynamic(() => import('@/layouts/WarehouseLayout'));

// Layout component for warehouse-related pages
export default function Layout({ children }) {
  return <WarehouseLayout>{children}</WarehouseLayout>;
}

Layout.propTypes = { children: PropTypes.any };
