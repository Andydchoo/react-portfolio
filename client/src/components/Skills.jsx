import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Stack,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/styles";

export default function Skills() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <a
        className="anchor"
        id="Skills"
        href="/#"
        style={{
          display: "block",
          position: "relative",
          top: "-68px",
          visibility: "hidden",
        }}
      >
        a
      </a>
      <Card
        elevation={4}
        sx={{
          margin: 3,
          backgroundColor: "background.variant",
          borderRadius: "7px",
        }}
      >
        <Box
          sx={{
            pt: 8,
            pb: 6,
            maxWidth: "med",
          }}
        >
          <Container>
            <Typography
              component="h1"
              variant="h2"
              fontWeight="600"
              align="center"
              color="text.main"
              gutterBottom
            >
              Technical Skills
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" justifyContent="space-evenly">
              {/* Front-end card */}
              <Grid item>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "background.variant2",
                    alignItems: "center",
                    borderRadius: "7px",
                  }}
                  elevation={3}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h2"
                      color="text.main"
                    >
                      Front-end
                    </Typography>
                  </CardContent>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", med: "row" },
                      background: "none",
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      sx={{ height: "100%" }}
                    >
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "35px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                        alt="javascript"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/HTML-05B0F6?style=for-the-badge&logo=html5&logoColor=F74913"
                        alt="html"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/CSS-136EB4?&style=for-the-badge&logo=css3&logoColor=white"
                        alt="css"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                          borderBottomLeftRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
                        alt="jquery"
                      />
                    </Stack>
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      sx={{ height: "100%", pb: 1 }}
                    >
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                        alt="react"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                        alt="bootstrap"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
                        alt="mui"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                          borderBottomLeftRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
                        alt="redux"
                      />
                    </Stack>
                  </Card>
                </Card>
              </Grid>
              {/* Backend card */}
              <Grid item>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "background.variant2",
                    alignItems: "center",
                    borderRadius: "7px",
                  }}
                  elevation={3}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h2"
                      color="text.main"
                    >
                      Back-end
                    </Typography>
                  </CardContent>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", med: "row" },
                      background: "none",
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      sx={{ height: "100%" }}
                    >
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "20px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                        alt="nodejs"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                        alt="mongodb"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                          borderBottomLeftRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
                        alt="express"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                          borderBottomLeftRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/Sanity-ff5c5c?style=for-the-badge&logo=sanity&logoColor=white"
                        alt="sanity"
                      />
                    </Stack>
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      sx={{ height: "100%", pb: 1 }}
                    >
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
                        alt="mysql"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
                        alt="heroku"
                      />
                      <CardMedia
                        sx={{
                          maxWidth: "250px",
                          maxHeight: "55px",
                          minHeight: "40px",
                          minWidth: "150px",
                          borderBottomLeftRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                        component="img"
                        image="https://img.shields.io/badge/Strapi-7134eb?style=for-the-badge&logo=strapi&logoColor=white"
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
    </ThemeProvider>
  );
}
