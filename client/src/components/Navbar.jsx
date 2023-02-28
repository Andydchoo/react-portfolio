//  Plans

//  - Make hover effect take up entire height of navbar
//  - Fancy Animations would be nice
//  - Navigation links should work

//  Issues

//  - Lines 92-109.
//      -Typography begins to stop aligning left once large view begins.
//      -Every item seems to stretch out until large view-width is reached.
//      -Then it just constantly slides towards the middle, at the same width.
//      -Seems to be an issue with *flexgrow* potentially?

//  - Breakpoints arent importing properly with display property
//  - Icons on the right are awkwardly spaced on md size

import { React, useState } from 'react';
import { AppBar, IconButton, Toolbar, Box, Typography, Menu, Container, Button, MenuItem, Divider, Fade } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Navbar() {
  const [anchorEl, setanchorEl] = useState(null);

  const pages = ['// About', '// Skills', '// Portfolio', '// Contact'];

  const handleOpen = (event) => {
    setanchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setanchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" elevation={2} sx={{ backgroundColor: 'background.main', opacity: '.89' }}>
        <Container>
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }
              }}
            >
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="white.main"
              >
                <MenuIcon sx={{ color: "white.main" }} />
              </IconButton>
              <Menu
                id="menu-nav"
                anchorEl={anchorEl}
                elevation={3}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
                sx={{
                  display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleClose} sx={{ backgroundColor: 'background.main', color: 'white.main', opacity: '.84' }}>
                    <Typography textAlign="center">{page}</Typography>
                    <Divider />
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: 'flex',
                flexGrow: 1,
                fontFamily: 'Open sans',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'white.main',
                textDecoration: 'none',
              }}
            >
              Andy Choo
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleClose}
                  sx={{ margin: 2, color: 'white.main', display: 'block', fontFamily: 'Open sans' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'flex' },
              }}>
              <Button sx={{ color: 'white.main' }}>
                <GitHubIcon />
              </Button>
              <Button sx={{ color: 'white.main' }}>
                <LinkedInIcon />
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}