import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";
import { CssBaseline } from '@mui/material';


export default function Footer() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; 2023 Andy Choo
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};