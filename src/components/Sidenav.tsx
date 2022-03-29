// mui
import { ListItemButton, ListItemIcon, ListItemText, ListSubheader, Toolbar, IconButton, List, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { Link } from 'react-router-dom';

// icons
import AssignmentIcon from '@mui/icons-material/Assignment';

import { useMaterialUIController, setSidenav } from "context";
import { routes } from 'routes';

const data = ['Current month', 'Last quarter', 'Year-end sale'];
const drawerWidth: number = 240;

const mainNavItems = (
  <>
    {routes.map(route => {
      return (
        <ListItemButton component={Link} to={route.route} key={"sidemenu-"+ route.id}>
          <ListItemIcon>
            {route.icon}
          </ListItemIcon>
            <ListItemText>
              {route.id}
            </ListItemText>
        </ListItemButton>
      );
    })}
  </>
);

const secondaryNavItems = (
  <>
    <ListSubheader component="div" inset={true}> Saved reports </ListSubheader>
    {data.map(item => {
      return (
        <ListItemButton key={item}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText>
            {item}
          </ListItemText>
        </ListItemButton>
      );
    })}
  </>
);

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
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
    sidenav,
    fixNavbar
  } = controller;

  const toggleSidenav = () => {
    if (fixNavbar === false) {
      setSidenav(dispatch, !sidenav);
    }
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
        {mainNavItems}
        <Divider sx={{ my: 1 }} />
        {secondaryNavItems}
      </List>
    </Drawer>
  );
}