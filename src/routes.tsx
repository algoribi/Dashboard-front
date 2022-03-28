import { Routes, Route, Navigate } from "react-router-dom";

// routes
import Dashboard from 'layouts/dashboard';
import Orders from 'layouts/orders';
import Customers from 'layouts/customers';
import Wallet from 'layouts/wallet';
import Configurator from 'layouts/configurator';

// mui material icons : https://mui.com/components/material-icons/
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConfiguratorIcon from '@mui/icons-material/Settings';

interface Type {
  id: string;
  component: JSX.Element;
  route: string;
  icon: JSX.Element;
}

const routes : Type[] = [
  {
    id : "Dashboard",
    component: <Dashboard />,
    route: "/dashboard",
    icon: <DashboardIcon />
  },
  {
    id : "Orders",
    component: <Orders />,
    route: "/orders",
    icon: <ShoppingCartIcon />
  },
  {
    id : "Customers",
    component: <Customers />,
    route: "/customers",
    icon: <PeopleIcon />
  },
  {
    id : "Wallet",
    component: <Wallet />,
    route: "/wallet",
    icon: <WalletIcon />
  },
  {
    id : "Configurator",
    component: <Configurator />,
    route: "/configurator",
    icon: <ConfiguratorIcon />
  }
];

function getRoutes() {
  return (
    <Routes>
      {routes.map(route => {
        return <Route path={route.route} element={route.component} key={route.id} />;
      })}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export {
  routes,
  getRoutes
}