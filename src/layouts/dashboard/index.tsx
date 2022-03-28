import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { Toolbar, Container, Grid, Paper } from '@mui/material';

import { useMaterialUIController, setCategory, setViewMore } from 'context'
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';


export default function Dashboard() {
  const [controller, dispatch] = useMaterialUIController();
  const location = useLocation();

  useEffect(() => {
    const handleContext = () => {
      setCategory(dispatch, 'Dashboard');
      setViewMore(dispatch, true);
    }
    handleContext();

  }, [dispatch, location]);

  return (
    <>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} lg={9}>
            <Paper sx={{
              p: 2, display: 'flex', flexDirection: 'column', height: 240 }} >
              <Chart />
            </Paper>
          </Grid>
          {/* Deposits */}
          <Grid item xs={12} lg={3}>
            <Paper sx={{
              p: 2, display: 'flex', flexDirection: 'column', height: 240 }} >
              <Deposits />
            </Paper>
          </Grid>
          {/* Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}