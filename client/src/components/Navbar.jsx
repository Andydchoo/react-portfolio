//  Plans

//  - Make hover effect take up entire height of navbar for buttons
//  - Fancy Animations would be nice


//  Issues

//  - Lines 92-109.
//      -Typography begins to stop aligning left once large view begins.
//      -Every item seems to stretch out until large view-width is reached.
//      -Then it just constantly slides towards the middle, at the same width.
//      
//  - Navigation links should work
//      - Menu links dont work, but the navbar links do.
//  - Breakpoints arent importing properly with display property
//  - Icons on the right are awkwardly spaced on md size
//  - Opacity on background is messed up

import { React, useState } from 'react';
import { AppBar, IconButton, Toolbar, Box, Typography, Menu, Container, Button, MenuItem, Divider, Fade, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import zIndex from '@mui/material/styles/zIndex';


export default function Navbar() {
  const [anchorEl, setanchorEl] = useState(null);

  const pages = ['About', 'Skills', 'Projects', 'Contact'];

  const handleOpen = (event) => {
    setanchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setanchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='sticky' elevation={5} sx={{ backgroundColor: 'background.variant' }}>
        <Container>
          <Toolbar disableGutters>

            {/* Menu */}
            <Box
              sx={{
                flex: 1,
                display: { xs: 'flex', md: 'none', lg: 'none', xl: 'none' }
              }}
            >
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="text.main"
              >
                <MenuIcon sx={{ color: "text.main" }} />
              </IconButton>
              <Menu
                id="menu-nav"
                anchorEl={anchorEl}
                elevation={5}
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
                  display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' },
                  background: 'none'
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleClose} href={page} sx={{ backgroundColor: 'background.default', color: 'text.main' }}>
                    <Typography textAlign="center">- {page}</Typography>
                    <Divider />
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Title text */}
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#about"
              sx={{
                display: { xs: 'none', sm: 'none', med: 'flex' },
                flex: 1,
                fontFamily: 'Open sans',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'text.main',
                textDecoration: 'none',
                justifyContent: { sm: 'center', med: 'center' }
              }}
            >
              Andy Choo
            </Typography>

            {/* Nav buttons for med-larger screens */}
            <Box
              sx={{
                flex: 1,
                display: { xs: 'none', sm: 'none', md: 'flex' }
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleClose}
                  href={'#' + page}
                  sx={{
                    margin: 2,
                    color: 'text.main',
                    display: 'block',
                    fontFamily: 'Open sans',
                    fontWeight: '600'
                  }}
                >
                  //{page}
                </Button>
              ))}
            </Box>

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
                  color: 'text.main'
                }}
              >
                <GitHubIcon />
              </Button>
              <Button
                href='https://www.linkedin.com/in/andychoo'
                target='_blank'
                sx={{
                  color: 'text.main'
                }}
              >
                <LinkedInIcon />
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}