import { useContext, useEffect } from 'react';

import { Container, Grid, Paper, Box, Typography, ListItemButton } from '@mui/material';
import { useTheme } from '@mui/material/styles'

import { useMaterialUIController, setCategory, setMainColor } from 'context'

export default function Configurator() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    mainColor
  } = controller;
  const theme = useTheme();

  const color = [
    {
      id : 'primary',
      color : theme.palette.primary
    },
    {
      id : 'secondary',
      color : theme.palette.secondary
    },
    {
      id : 'error',
      color : theme.palette.error
    },
    {
      id : 'warning',
      color : theme.palette.warning
    },
    {
      id : 'success',
      color : theme.palette.success
    }
  ];

  const colorBoxStyles = {
    m: 1,
    border: 1,
    width: '2rem',
    height: '2rem',
    borderRadius: '50%'
  }

  const configuratorPaperStyles = {
    m: 2,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center'
  }

  // useEffect(() => {
  //   setCategory(dispatch, 'Configurator');
  // }, []);

  return (
    <Container>
      <Grid mt={12} container spacing={3}>
        <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
          <Typography variant="h4" color={mainColor.main}>Material UI Configurator</Typography>
          <Typography variant="body1" color={mainColor.light} mb={1}>See our dashboard options!</Typography>
          <Grid item xs={12} sx={{ p: 2, display: 'flex' }} >
            {/* theme colors */}
            <Paper sx={{ ...configuratorPaperStyles }} >
              <Typography variant="h6" color={mainColor.main} mb={1}>Theme Colors</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {color.map(item => {
                  return (
                    <ListItemButton sx={{ ...colorBoxStyles, bgcolor: item.color.light, borderColor: item.color.main }}
                      onClick={() => {setMainColor(dispatch, item.color)}}
                      key={item.id} />
                  )
                })}
              </Box>
            </Paper>
            {/*  */}
            <Paper sx={{ ...configuratorPaperStyles }} >
              <Typography variant="h6" color={mainColor.main} mb={1}>Theme Colors</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {color.map(item => {
                  return (
                    <ListItemButton sx={{ ...colorBoxStyles, bgcolor: item.color.light, borderColor: item.color.main }}
                      onClick={() => {setMainColor(dispatch, item.color)}}
                      key={item.id} />
                  )
                })}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}