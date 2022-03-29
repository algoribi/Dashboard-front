import { useEffect } from 'react';

import { Grid, Paper } from '@mui/material';

import { useMaterialUIController, setCategory, setViewMore } from 'context'
import Order from 'layouts/dashboard/Orders';

export default function Orders() {
  const [, dispatch] = useMaterialUIController();

  useEffect(() => {
    setCategory(dispatch, 'Orders');
    setViewMore(dispatch, false);
  }, []);
  
  return (
    <Grid item xs={12} mt={8}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Order />
      </Paper>
    </Grid>
  );
}