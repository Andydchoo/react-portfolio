import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Stack, Box, Typography, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";

// export default function Projects() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         sx={{
//           pt: 8,
//           pb: 6,
//         }}>
//         <Container
//           sx={{ maxWidth: 'lg' }}
//         >
//           <Typography
//             component="h1"
//             variant="h2"
//             fontWeight='600'
//             align="center"
//             color="text.main"
//             gutterBottom
//           >
//             Projects
//           </Typography>
//           <Stack
//             sx={{ p: 1 }}
//             direction="row"
//             justifyContent="space-around"

//           >
//             {/* Projects cards */}
//             <Card
//               sx={{
//                 display: 'flex',
//                 backgroundColor: 'background.variant',
//                 flexGrow: 1,
//                 maxWidth: '480px',
//                 maxHeight: '270px',
//                 borderRadius: '20px'
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image="assets\cryptowatch.png"
//                 alt="javascript"
//                 sx={{ padding: 2 }}
//               />
//             </Card>
//             <Card
//               sx={{
//                 display: 'flex',
//                 backgroundColor: 'background.variant',
//                 flexGrow: 1,
//                 maxWidth: '480px',
//                 maxHeight: '270px',
//                 borderRadius: '20px'
//               }}
//             >
//               <CardMedia
//                 sx={{}}
//                 component="img"
//                 image="assets/rgmarket.png"
//                 alt="javascript"
//                 sx={{ padding: 2 }}
//               />
//             </Card>
//           </Stack>

//           {/* Second row of project Cards */}
//           <Stack
//             direction="row"
//             justifyContent="space-evenly"
//             sx={{ p: 1 }}
//           >
//             <Card
//               sx={{
//                 display: 'flex',
//                 backgroundColor: 'background.variant',
//                 flexGrow: 1,
//                 maxWidth: '480px',
//                 maxHeight: '270px',
//                 borderRadius: '20px'
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image="assets/merntodo.png"
//                 alt="javascript"
//                 sx={{ padding: 2 }}
//               />
//             </Card>
//             <Card
//               sx={{
//                 display: 'flex',
//                 backgroundColor: 'background.variant',
//                 flexGrow: 1,
//                 maxWidth: '480px',
//                 maxHeight: '270px',
//                 borderRadius: '20px'
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image="assets/merntodo.png"
//                 alt="javascript"
//                 sx={{ padding: 2 }}
//               />
//             </Card>
//           </Stack>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   )
// }

const projects = [
  {
    title: 'CryptoWatch',
    description: 'This is the first project.',
    imageUrl: 'assets/cryptowatch.png',
    demoUrl: 'https://example.com/demo',
    sourceUrl: 'https://github.com/example/project1',
  },
  {
    title: 'RGMarket',
    description: 'This is the second project.',
    imageUrl: 'assets/rgmarket.png',
    demoUrl: 'https://example.com/demo',
    sourceUrl: 'https://github.com/example/project2',
  },
  {
    title: 'Mern Todolist',
    description: 'This is the third project.',
    imageUrl: 'assets/merntodo.png',
    demoUrl: 'https://example.com/demo',
    sourceUrl: 'https://github.com/example/project3',
  },
  {
    title: 'Project 4',
    description: 'This is the third project.',
    imageUrl: 'assets/merntodo.png',
    demoUrl: 'https://example.com/demo',
    sourceUrl: 'https://github.com/example/project3',
  },
];

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'block', alignItems: 'center', padding: 4 }}>
        <Container
          sx={{
            alignItems: 'center',
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
          <Grid container spacing={3} align='center'>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={12} med={6} key={index}>
                <Card sx={{ maxWidth: '345', backgroundColor: 'background.variant' }}>
                  <CardMedia
                    sx={{ height: 0, paddingTop: '56%' }}
                    image={project.imageUrl}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" fontWeight='600' color='text.main' component="h2" sx={{ mb: 2 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="h6" color='text.sub' component="p">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={project.demoUrl} target="_blank" rel="noopener">
                      Demo
                    </Button>
                    <Button size="small" color="primary" href={project.sourceUrl} target="_blank" rel="noopener">
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