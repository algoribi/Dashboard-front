import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { Grid, Paper } from '@mui/material';

import { useMaterialUIController, setCategory, setViewMore } from 'context'
import OrdersLayout from 'context/layouts/OrdersLayout'
import Order from 'layouts/dashboard/Orders';

export default function Orders() {
  const [controller, dispatch] = useMaterialUIController();
  const location = useLocation();

  useEffect(() => {
    const handleContext = () => {
      setCategory(dispatch, 'Orders');
      setViewMore(dispatch, false);
    }
    handleContext();

  }, [dispatch, location]);
  
  return (
    // <OrdersLayout>
      <Grid item xs={12} mt={8}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Order />
        </Paper>
      </Grid>
    // </OrdersLayout>
  );
}