// mui
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Toolbar, IconButton, Typography, Badge } from '@mui/material';

// mui icon
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useMaterialUIController, setSidenav } from "context";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  })
}));

export default function Header() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    mainColor,
    sidenav,
    category,
    fixNavbar
  } = controller;
  const theme = useTheme();

  const toggleSidenav = () => {
    if (fixNavbar === false) {
      setSidenav(dispatch, !sidenav);
    }
  };

  return (
    <AppBar position="absolute" open={sidenav} style={{backgroundColor: mainColor.main}}>
      <Toolbar
        sx={{ pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSidenav}
            sx={{
              marginRight: '36px',
              ...(sidenav && { display: 'none' }),
            }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
        >
          {category}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color={mainColor === theme.palette.secondary ? "primary" : "secondary"}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}