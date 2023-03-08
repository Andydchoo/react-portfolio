import * as React from 'react';
import { Button, CssBaseline, Stack, Box, Typography, Container, Card, CardMedia } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";

//  Todo
//    -Padding between photo and text on large view is nonexistent

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          pt: 3,
          pb: 6,
          alignItems: 'center'
        }}
      >
        <Container
          sx={{
            display: { xs: 'block', sm: 'block', med: 'block', lg: 'flex', xl: 'flex' },
            maxWidth: { xs: 'sm', sm: 'sm', med: 'sm', lg: 'xl' },
            alignItems: 'center'
          }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.main"
            fontWeight='600'
            gutterBottom
            sx={{ display: { med: 'block', lg: 'none' } }}
          >
            About me
          </Typography>
          <Card variant="outlined" sx={{ mb: 4, flex: '1' }}>
            <CardMedia
              component="img"
              src="../../assets/headshot.png"
              alt="Andy Choo"
            />
          </Card>

          <Stack direction="column" sx={{ justifyContent: 'space-evenly', flex: "1" }}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.main"
              fontWeight='600'
              gutterBottom
              sx={{ display: { xs: 'none', sm: 'none', med: 'none', lg: 'block' } }}
            >
              About me
            </Typography>
            <Typography variant="h6" align="center" color="text.sub" paragraph>
              I'm Andy, a proficient full-stack web developer, dedicated to pursuing
              constant refinement of my skills through experience. My passion lies in
              the act of creation and fostering creativity. In my free time I love to
              build with woodworking and design with my custom keyboards.
            </Typography>
          </Stack>
        </Container>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={3}
          justifyContent="center"
        >
          <Button variant="contained" href="#projects">My Projects</Button>
          <Button variant="outlined" href="#contact">Contact me</Button>
        </Stack>

      </Box>
    </ThemeProvider >
  );
}
