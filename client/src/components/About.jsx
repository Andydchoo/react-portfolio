import * as React from 'react';
import { Button, CssBaseline, Stack, Box, Typography, Container, Card, CardMedia } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Hero unit */}
      <Box
        sx={{
          pt: 6,
          pb: 6,
        }}
      >
        <Container maxWidth="med">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="white.main"
            sx={{ opacity: "87%" }}
            gutterBottom
          >
            About me
          </Typography>
          <Card variant="outlined" sx={{ mb: 4 }}>
            <CardMedia
              component="img"
              src="../../assets/headshot.png"
              alt="Andy Choo"
            />
          </Card>
          <Typography variant="h6" align="center" color="white.main" sx={{ opacity: "60%" }} paragraph>
            I'm Andy, a full-stack web developer, seeking constant growth and improvement through experience.
            I have a passion for creation, and (think of word). My hobbies include wood working, and building custom keyboards!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={3}
            justifyContent="center"
          >
            <Button variant="contained" href="#projects">My Projects</Button>
            <Button variant="outlined" href="#contact">Contact me</Button>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
