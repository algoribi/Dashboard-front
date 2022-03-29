import { useEffect } from 'react';

import { Container, Grid, Paper } from '@mui/material';

import { useMaterialUIController, setCategory, setViewMore } from 'context'
import Deposits from 'layouts/dashboard/Deposits';
import TransactionTimeline from './TransactionTimeline';
import Orders from 'layouts/dashboard/Orders';

export default function Wallet() {
  const [, dispatch] = useMaterialUIController();

  useEffect(() => {
    setCategory(dispatch, 'Wallet');
    setViewMore(dispatch, false);
  }, []);

  return (
    <Container>
      <Grid mt={12} container spacing={3}>
        <Grid item xs={12} lg={3}>
          <Paper sx={{
            p: 2, display: 'flex', flexDirection: 'column', height: 270 }} >
            <Deposits />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Paper sx={{
            p: 2, display: 'flex', flexDirection: 'column', height: 270 }} >
            <Orders />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Paper sx={{
            pt: 5, display: 'flex', flexDirection: 'column'}} >
            <TransactionTimeline />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}