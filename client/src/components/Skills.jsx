import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Stack, Box, Typography, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";


const cards = ['Front-End', 'Back-End'];


export default function Skills() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card elevation={4} sx={{ margin: 3, backgroundColor: 'background.default' }}>
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
              fontWeight='500'
              align="center"
              color="white.main"
              sx={{ opacity: '87%' }}
              gutterBottom
            >
              Skills
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="space-evenly"
            >
              {/* Cards */}
              <Grid item>
                <Card
                  sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'inherit' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='white.main' sx={{ opacity: '87%' }}>
                      Front-end
                    </Typography>
                    <Typography color="white.main" sx={{ opacity: '60%' }}>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <Card>
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
                  </Card>
                </Card>
              </Grid>

              <Grid item>
                <Card
                  sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'inherit' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" color='white.main' sx={{ opacity: '87%' }}>
                      Back-end
                    </Typography>
                    <Typography color='white.main' sx={{ opacity: '60%' }}>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <Card>
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