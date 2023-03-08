import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Stack, Box, Typography, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";


const cards = ['Front-End', 'Back-End'];

//  - Plans
//    - Try out text decorations. Looks clean but extremely boring right now.
//    - Make icons clickable/interactable

export default function Skills() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card elevation={4} sx={{ margin: 3, backgroundColor: 'background.variant', borderRadius: '7px' }}>
        <Box
          sx={{
            pt: 8,
            pb: 6,
            maxWidth: 'med'
          }}
        >
          <Container>
            <Typography
              component="h1"
              variant="h2"
              fontWeight='600'
              align="center"
              color="text.main"
              gutterBottom
            >
              My Skills
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              justifyContent="space-evenly"
            >

              {/* Front-end card */}
              <Grid item>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.variant2',
                    alignItems: 'center',
                    borderRadius: '7px'
                  }}
                  elevation={3}
                >

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4" component="h2" color='text.sub'>
                      Front-end
                    </Typography>
                  </CardContent>
                  <Card sx={{ display: 'flex', flexDirection: { xs: 'column', med: 'row' }, background: 'none' }}>
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      sx={{ height: '100%' }}
                    >
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '35px', }}
                        component="img"
                        image="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                        alt="javascript"
                      />
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '40px', minWidth: '150px' }}
                        component="img"
                        image="https://img.shields.io/badge/HTML-05B0F6?style=for-the-badge&logo=html5&logoColor=F74913"
                        alt="html"
                      />
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '40px', minWidth: '150px' }}
                        component="img"
                        image="https://img.shields.io/badge/CSS-136EB4?&style=for-the-badge&logo=css3&logoColor=white"
                        alt="css"
                      />
                    </Stack>
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      sx={{ height: '100%' }}
                    >
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '40px', minWidth: '150px' }}
                        component="img"
                        image="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                        alt="react"
                      />
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '40px', minWidth: '150px' }}
                        component="img"
                        image="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                        alt="bootstrap"
                      />
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '40px', minWidth: '150px' }}
                        component="img"
                        image="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
                        alt="mui"
                      />
                    </Stack>
                  </Card>
                </Card>
              </Grid>
              {/* Backend card */}
              <Grid item>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.variant2',
                    alignItems: 'center',
                    borderRadius: '7px'
                  }}
                  elevation={3}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h4" component="h2" color='text.sub'>
                      Back-end
                    </Typography>
                  </CardContent>
                  <Card sx={{ display: 'flex', flexDirection: { xs: 'column', med: 'row' }, background: 'none' }}>
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      sx={{ height: '100%' }}
                    >
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '20px' }}
                        component="img"
                        image="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                        alt="nodejs"
                      />
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '40px', minWidth: '150px' }}
                        component="img"
                        image="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                        alt="mongodb"
                      />
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '40px', minWidth: '150px' }}
                        component="img"
                        image="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
                        alt="express"
                      />
                    </Stack>
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      sx={{ height: '100%' }}
                    >
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '40px', minWidth: '150px' }}
                        component="img"
                        image="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
                        alt="mysql"
                      />
                      <CardMedia
                        sx={{ maxWidth: '250px', maxHeight: '55px', minHeight: '40px', minWidth: '150px' }}
                        component="img"
                        image="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=whitee"
                        alt="heroku"
                      />
                    </Stack>
                  </Card>
                </Card>
              </Grid>
              {/* End of cards */}
            </Stack>
          </Container>
        </Box>
      </Card>
    </ThemeProvider >
  );
}