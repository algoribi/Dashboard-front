import { useEffect } from 'react';

// mui
import { Avatar, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { useMaterialUIController, setCategory } from 'context'
import Title from 'components/Title';

const data = [
  {
    id: 1,
    name: 'Elvis Presley',
    age: 31,
    gender: 'man',
    address: '701 South Mount Vernon Avenue San Bernardino CA 92410-2798 USA',
    purchaseAmount: 312.44
  },
  {
    id: 2,
    name: 'Paul McCartney',
    age: 42,
    gender: 'man',
    address: '200 Riverview Parkway Santee CA 92071 USA',
    purchaseAmount: 866.99
  },
  {
    id: 3,
    name: 'Nicki Minaj',
    age: 21,
    gender: 'woman',
    address: '1313 Park Boulevard San Diego CA 92101-4787 USA',
    purchaseAmount: 100.81
  },
  {
    id: 4,
    name: 'Chris Brown',
    age: 32,
    gender: 'man',
    address: '3350 Market St Ste C San Diego CA 92102 USA',
    purchaseAmount: 654.39
  },
  {
    id: 5,
    name: 'Katy Perry',
    age: 37,
    gender: 'woman',
    address: '3375 Camino Del Rio S San Diego CA 92108-3883 USA',
    purchaseAmount: 212.79
  }
];

export default function Customers() {
  const [, dispatch] = useMaterialUIController();

  useEffect(() => {
    setCategory(dispatch, 'Customers');
  }, []);

  return (
    <Grid item xs={12} mt={8}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Title>Customers</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Profile-image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align="center">Purchase-amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Avatar alt={item.name} src={`/images/profile/${item.id}.jpg`} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell align="center">{`$${item.purchaseAmount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
    </Grid>
  );
}