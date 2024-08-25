import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: '0 4px 2px -2px gray',
        background: '#363636',
        color: 'white',
        width: '100vw',
        padding: 0
      }}
    >
      <Toolbar sx={{ padding: 0, background: '#363636', color: 'white' }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Grid
            item
            sx={{
              padding: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="h6" component="div" sx={{ color: '#FFFFFF' }}>
              MyLogo
            </Typography>
          </Grid>
          <Grid item sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', gap: { lg: '10px', xs: "2px" }, justifyContent: "space-between" }}>
              <Box sx={{ display: 'flex', flexDirection: "row" }}>
                <Button sx={{ color: '#FFFFFF' }} component={Link} to="/problems">Problems</Button>
                <Button sx={{ color: '#FFFFFF' }} component={Link} to="/contest">Contest</Button>
                <Button sx={{ color: '#FFFFFF' }} component={Link} to="/discuss">Discuss</Button>
              </Box>
              <Box>
                <Button sx={{ color: '#FFFFFF' }} component={Link} to="/login">Login</Button>
                <Button sx={{ color: '#FFFFFF' }} component={Link} to="/register">Register</Button>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
