import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Stack, Box, Typography, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          pt: 8,
          pb: 6,
          maxWidth: 'med'
        }}>
        <Container>
          <Typography
            component="h1"
            variant="h2"
            fontWeight='600'
            align="center"
            color="text.main"
            gutterBottom
          >
            Projects
          </Typography>
          <Grid item>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              justifyContent="space-evenly"
            >
              {/* Projects cards */}
              <Card
                sx={{ display: 'flex', flexDirection: 'column', background: 'none', flexGrow: 1, maxWidth: '480px', maxHeight: '270px', }}
              >
                <CardMedia
                  sx={{}}
                  component="img"
                  image="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-site-of-Kenneth-Jimmy-a-software-developer.png"
                  alt="javascript"
                />
              </Card>
              <Card
                sx={{ display: 'flex', flexDirection: 'column', background: 'none', flexGrow: 1, maxWidth: '480px', maxHeight: '270px', }}
              >
                <CardMedia
                  sx={{}}
                  component="img"
                  image="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-site-of-Kenneth-Jimmy-a-software-developer.png"
                  alt="javascript"
                />
              </Card>
            </Stack>
          </Grid>
          {/* Second row of project Cards */}
          <Grid item>
            <Stack
              direction="row"
              justifyContent="space-evenly"
            >
              <Card
                sx={{ display: 'flex', flexDirection: 'column', background: 'none', flexGrow: 1, maxWidth: '480px', maxHeight: '270px', }}
              >
                <CardMedia
                  sx={{}}
                  component="img"
                  image="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-site-of-Kenneth-Jimmy-a-software-developer.png"
                  alt="javascript"
                />
              </Card>
              <Card
                sx={{ display: 'flex', flexDirection: 'column', background: 'none', flexGrow: 1, maxWidth: '480px', maxHeight: '270px', }}
              >
                <CardMedia
                  sx={{}}
                  component="img"
                  image="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-site-of-Kenneth-Jimmy-a-software-developer.png"
                  alt="javascript"
                />
              </Card>
            </Stack>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
