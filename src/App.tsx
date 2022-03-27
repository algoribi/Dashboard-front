import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getRoutes } from './routes';
import Header from "components/Header";
import Sidenav from "components/Sidenav";

// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";

export default function App() {
  const { pathname } = useLocation();
  
  // setting page scroll to 0
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <Sidenav />

      {/* content */}
      <Box
        component="main"
        sx={{
          backgroundColor: '#f5f5f5',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        {getRoutes()}
      </Box>
    </Box>
  );
}