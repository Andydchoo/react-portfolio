import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";
import { CssBaseline } from '@mui/material';


export default function Footer() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary" sx={{ bottom: 0, width: '100%' }}>
        <Toolbar>
          <Typography variant="body1" color="background.default">
            &copy; 2023 Andy Choo
          </Typography>
          {/* Social's icons */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'flex', sm: 'flex' },
              justifyContent: 'flex-end'
            }}>
            <Button
              href="https://github.com/Andydchoo"
              target="_blank"
              sx={{
                color: 'background.default'
              }}
            >
              <GitHubIcon />
            </Button>
            <Button
              href='https://www.linkedin.com/in/andychoo'
              target='_blank'
              sx={{
                color: 'background.default'
              }}
            >
              <LinkedInIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};