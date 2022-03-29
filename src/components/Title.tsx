import { FC } from 'react';

// mui
import Typography from '@mui/material/Typography';

import { useMaterialUIController } from 'context';

const Title: FC = ({ children }) => {
  const [controller, ] = useMaterialUIController();
  const { mainColor } = controller;

  return (
    <Typography variant="h6" color={mainColor.main} mb={1}>
      {children}
    </Typography>
  );
}

export default Title;