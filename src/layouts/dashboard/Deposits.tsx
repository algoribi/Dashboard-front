import { Link, Typography } from '@mui/material';

import { useMaterialUIController } from 'context';
import Title from 'components/Title';

const getDate = () => {
  const date = new Date();
  return date.toDateString();
}

export default function Deposits() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    viewMore
  } = controller;

  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {getDate()}
      </Typography>
      {viewMore
        ? <Link color="primary" href="/wallet">View balance</Link>
        : <></>
      }
    </>
  );
}