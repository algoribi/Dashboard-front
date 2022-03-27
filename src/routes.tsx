import { Routes, Route, Navigate } from "react-router-dom";

// routes
import Dashboard from 'layouts/dashboard';
import Orders from 'layouts/orders';
import Customers from 'layouts/customers';
import Wallet from 'layouts/wallet';
import Settings from 'layouts/settings';

// mui material icons : https://mui.com/components/material-icons/
import { SvgIconProps } from '@mui/material/SvgIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';

interface Type {
  id: string;
  component: JSX.Element;
  route: string;
  icon: (props: SvgIconProps) => JSX.Element;
}

const routes : Type[] = [
  {
    id : "Dashboard",
    component: <Dashboard />,
    route: "/dashboard",
    icon: DashboardIcon
  },
  {
    id : "Orders",
    component: <Orders />,
    route: "/orders",
    icon: ShoppingCartIcon
  },
  {
    id : "Customers",
    component: <Customers />,
    route: "/customers",
    icon: PeopleIcon
  },
  {
    id : "Wallet",
    component: <Wallet />,
    route: "/wallet",
    icon: WalletIcon
  },
  {
    id : "Settings",
    component: <Settings />,
    route: "/settings",
    icon: SettingsIcon
  }
];

function getRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      {routes.map(route => {
        return <Route path={route.route} element={route.component} key={route.id} />;
      })}
    </Routes>
  );
}

export {
  routes,
  getRoutes
}