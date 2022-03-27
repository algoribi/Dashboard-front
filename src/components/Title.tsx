import { FC } from 'react';
import Typography from '@mui/material/Typography';

const Title: FC = ({ children }) => {
  return (
    <Typography variant="h6" color="primary" mb={1}>
      {children}
    </Typography>
  );
}

export default Title;