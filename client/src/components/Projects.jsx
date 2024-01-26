import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/styles";

const projects = [
  {
    title: "SankyuStudio",
    description: "A full-stack ecommerce website built with Next.js",
    imageUrl: "assets/sankyu.webp",
    demoUrl: "https://sankyustudio.vercel.app/",
    sourceUrl: "https://github.com/Andydchoo/sankyu-next",
  },
  {
    title: "The Daily Bounty(WIP)",
    description: "Service for users to purchase food waste for cheap.",
    imageUrl: "assets/tdb.webp",
    demoUrl: "https://thedailybounty.com",
    sourceUrl: "",
  },
  {
    title: "VodU",
    description: "Upload, view, and comment on clips from video games.",
    imageUrl: "assets/vodu.webp",
    demoUrl: "https://vod-u-front.onrender.com/",
    sourceUrl: "https://github.com/Copernichris/Vodu",
  },
  {
    title: "Mern Todolist",
    description: "A simple todo list app built using the mern stack.",
    imageUrl: "assets/merntodo.webp",
    demoUrl: "https://mern-todo-front.onrender.com/",
    sourceUrl: "https://github.com/Andydchoo/Mern-todo",
  },
];

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <a
        className="anchor"
        id="Projects"
        alt="anchor"
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
      <Box sx={{ display: "block", alignItems: "center", padding: 4 }}>
        <Container
          sx={{
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            fontWeight="600"
            align="center"
            color="text.main"
            gutterBottom
          >
            Projects
          </Typography>
          <Grid container spacing={3} align="center" sx={{ pt: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={12} med={6} key={index}>
                <Card
                  sx={{
                    maxWidth: "345",
                    backgroundColor: "background.variant",
                  }}
                >
                  <CardMedia
                    sx={{ height: 0, paddingTop: "56%" }}
                    image={project.imageUrl}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      fontWeight="600"
                      color="text.main"
                      component="h2"
                      sx={{ mb: 2 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="h6" color="text.sub" component="p">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener"
                    >
                      Demo
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener"
                    >
                      Source
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
