import { React, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  CssBaseline,
  Box,
  Card,
  Link,
  Container,
  Stack,
  InputAdornment,
  InputLabel
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Email from '@mui/icons-material/Email';
import { ThemeProvider } from '@emotion/react';
import { theme } from "../styles/styles";

// - Todo
//    - Fix up spacing
//    - Color of text inside textboxes is too dark

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Message: ", message);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          display: { xs: 'block', sm: 'block', med: 'block', lg: 'flex', xl: 'flex' },
          maxWidth: { xs: 'sm', sm: 'sm', med: 'sm', lg: 'lg', xl: 'xl' },
          alignItems: 'center'
        }}>
        <Stack direction="column" sx={{ justifyContent: 'space-evenly', flex: "1" }}>
          <Typography variant="h2" fontWeight="600" align="center" color='text.main' gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="h6" align="center" gutterBottom sx={{ color: 'text.sub' }}>
            Want to get in touch? Send me a message, and I'll get back to you as soon as I can!
          </Typography>
          <Link
            variant="h6"
            align="center"
            target="_blank"
            rel="noreferrer"
            href={`mailto:andydchoo@gmail.com`}
            underline="hover"

          >
            {/* Icon is not aligned properly */}
            <Email />
            {'AndyDChoo@gmail.com'}
          </Link>
        </Stack>
        <Card sx={{ backgroundColor: 'background.variant', flex: '1', pb: 1, borderRadius: '7px' }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack direction="column" sx={{ alignItems: 'center', justifyContent: 'center', width: '90%' }}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                value={name}
                onChange={handleNameChange}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: "text.sub" }}>
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={handleEmailChange}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: "text.sub" }}>
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                required
                rows={4}
                value={message}
                onChange={handleMessageChange}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        </Card>
      </Container>
    </ThemeProvider >
  );
}

// export default function Contact() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box component="form" sx={{ backgroundColor: 'background.variant', pt: '30' }}>
//         <Typography variant="h4" color="text.main" gutterBottom>
//           Contact Me
//         </Typography>
//         <Card sx={{ backgroundColor: 'background.variant' }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField label="First Name" variant="outlined" fullWidth />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField label="Last Name" variant="outlined" fullWidth />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Email" variant="outlined" fullWidth />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
//             </Grid>
//             <Grid item xs={12}>
//               <Button variant="contained" color="primary">
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </Card>
//       </Box>
//     </ThemeProvider>
//   );
// };
