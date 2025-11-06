// @mui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import useMenu from '@/hooks/useMenu';
import NavGroup from './NavGroup';

/***************************  DRAWER CONTENT - RESPONSIVE DRAWER  ***************************/

export default function ResponsiveDrawer() {
  const { supervisor, other } = useMenu();

  const allMenuItems = [...supervisor];

  const navGroups = allMenuItems.map((item, index) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={index} item={item} />;
      default:
        return (
          <Typography key={index} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ py: 1, transition: 'all 0.3s ease-in-out' }}>{navGroups}</Box>;
}
