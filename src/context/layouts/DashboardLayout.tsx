import { FC, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { useMaterialUIController, setCategory, setViewMore } from 'context'

const DashboardLayout : FC = ({ children }) => {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setCategory(dispatch, 'Dashboard');
    setViewMore(dispatch, true);
  }, [pathname]);

  return (
    <>
      {children}
    </>
  );
}

export default DashboardLayout;