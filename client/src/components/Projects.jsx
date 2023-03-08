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
          maxWidth: 'med',
        }}>

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
        <Stack
          sx={{ p: 1 }}
          direction="row"
          justifyContent="space-evenly"
        >
          {/* Projects cards */}
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              background: 'none',
              flexGrow: 1,
              maxWidth: '480px',
              maxHeight: '270px',
            }}
          >
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="javascript"
            />
          </Card>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              background: 'none',
              flexGrow: 1,
              maxWidth: '480px',
              maxHeight: '270px',
            }}
          >
            <CardMedia
              sx={{}}
              component="img"
              image="https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="javascript"
            />
          </Card>
        </Stack>

        {/* Second row of project Cards */}
        <Stack
          direction="row"
          justifyContent="space-evenly"
          sx={{ p: 1 }}
        >
          <Card
            sx={{ display: 'flex', flexDirection: 'column', background: 'none', flexGrow: 1, maxWidth: '480px', maxHeight: '270px', }}
          >
            <CardMedia
              sx={{}}
              component="img"
              image="https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="javascript"
            />
          </Card>
          <Card
            sx={{ display: 'flex', flexDirection: 'column', background: 'none', flexGrow: 1, maxWidth: '480px', maxHeight: '270px', }}
          >
            <CardMedia
              sx={{}}
              component="img"
              image="https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="javascript"
            />
          </Card>
        </Stack>

      </Box>
    </ThemeProvider>
  )
}
