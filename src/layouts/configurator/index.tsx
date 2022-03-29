import { useEffect } from 'react';

// mui
import { Container, Grid, Paper, Box, Typography, ListItemButton, Switch } from '@mui/material';
import { useTheme, PaletteColor } from '@mui/material/styles'

import { useMaterialUIController, setCategory, setMainColor, setFixNavbar } from 'context'

export default function Configurator() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    mainColor,
    fixNavbar
  } = controller;
  const theme = useTheme();
  
  useEffect(() => {
    setCategory(dispatch, 'Configurator');
  }, []);

  const color : {
    id: "primary" | "secondary" | "error" | "warning" | "success";
    color: PaletteColor; }[] = [
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

  const findColor = () : "primary" | "secondary" | "error" | "warning" | "success" => {
    const colorName = color.filter(item => item.color === mainColor);
    if (colorName.length === 1) {
      return colorName[0].id;
    } else {
      return "primary";
    }
  }

  return (
    <Container>
      <Grid mt={12} container spacing={3}>
        <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
          <Typography variant="h4" color={mainColor.main}>Material UI Configurator</Typography>
          <Typography variant="body1" color={mainColor.light} mb={1}>See our dashboard options!</Typography>
          <Paper sx={{
            m: 3,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            width : 600 }} >
            {/* theme colors */}
            <Typography variant="h6" color={mainColor.main} mb={2}>Theme Colors</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {color.map(item => {
                return (
                  <ListItemButton sx={{
                    m: 2,
                    border: 1,
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    bgcolor: item.color.light,
                    borderColor: item.color.main }}
                    onClick={() => {setMainColor(dispatch, item.color)}}
                    key={item.id} />
                )
              })}
            </Box>
            {/* Navbar Fixed*/}
            <Typography variant="h6" color={mainColor.main} mt={5} mb={1}>Navbar Fixed</Typography>
            <Switch onChange={() => {setFixNavbar(dispatch, !fixNavbar)}} checked={fixNavbar} color={findColor()} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}