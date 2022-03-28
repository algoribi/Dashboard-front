import { FC, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { useMaterialUIController, setCategory, setViewMore } from 'context'

const OrdersLayout : FC = ({ children }) => {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setCategory(dispatch, 'Orders');
    setViewMore(dispatch, false);
  }, [pathname]);

  return (
    <>
      {children}
    </>
  );
}

export default OrdersLayout;