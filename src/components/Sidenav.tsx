// mui
import { Link, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Toolbar, IconButton, List, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';

import { useMaterialUIController, setSidenav } from "context";
import { routes } from 'routes';

const data = ['Current month', 'Last quarter', 'Year-end sale'];
const drawerWidth: number = 240;

const mainListItems = (
  <>
    {/* {routes.map(route => {
      return (
        <Link href={route.route} variant='body2' color='#212121' underline="none" key={route.id}>
          <ListItemButton>
            <ListItemIcon children={route.icon} />
            <ListItemText primary={route.id} />
          </ListItemButton>
        </Link>
      );
    })} */}

    <Link href="/dashboard" variant='body2' color='#212121' underline="none">
      <ListItemButton>
        <ListItemIcon children={<DashboardIcon />} />
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link href="/orders" variant='body2' color='#212121' underline="none">
      <ListItemButton>
        <ListItemIcon children={<ShoppingCartIcon />} />
        <ListItemText primary="Orders" />
      </ListItemButton>
    </Link>
    <Link href="/customers" variant='body2' color='#212121' underline="none">
      <ListItemButton>
        <ListItemIcon children={<PeopleIcon />} />
        <ListItemText primary="Customers" />
      </ListItemButton>
    </Link>
    <Link href="/wallet" variant='body2' color='#212121' underline="none">
      <ListItemButton>
        <ListItemIcon children={<WalletIcon />} />
        <ListItemText primary="Wallet" />
      </ListItemButton>
    </Link>
    <Link href="/settings" variant='body2' color='#212121' underline="none">
      <ListItemButton>
        <ListItemIcon children={<SettingsIcon />} />
        <ListItemText primary="Settings" />
      </ListItemButton>
    </Link>
  </>
);

const secondaryListItems = (
  <>
    <ListSubheader component="div" inset={true}> Saved reports </ListSubheader>
    {data.map(item => {
      return (
        <ListItemButton key={item}>
          <ListItemIcon children={<AssignmentIcon />} />
          <ListItemText primary={item} />
        </ListItemButton>
      );
    })}
  </>
);

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export default function Sidenav() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    sidenav
  } = controller;

  const toggleSidenav = () => {
    setSidenav(dispatch, !sidenav);
  };

  return (
    <Drawer variant="permanent" open={sidenav}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleSidenav}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </Drawer>
  );
}