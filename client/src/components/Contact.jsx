import { React, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  TextField,
  Button,
  Typography,
  CssBaseline,
  Box,
  Card,
  Link,
  Container,
  Stack,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Email from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";
import CommentIcon from "@mui/icons-material/Comment";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/styles";

// - Todo
//    - Fix up spacing
//    - Color of text inside textboxes is too dark

//  - Issues
//    - Sm-med view has bug with footer

export default function Contact() {
  const [success, setSuccess] = useState();

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        console.log("Message sent");
        setSuccess("Message Sent!");
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        id="Contact"
        sx={{
          display: {
            xs: "block",
            sm: "block",
            med: "block",
            lg: "flex",
            xl: "flex",
          },
          maxWidth: { xs: "sm", sm: "sm", med: "sm", lg: "xl", xl: "xl" },
          alignItems: "center",
          mb: 5,
        }}
      >
        {/* Title/description */}
        <Stack
          direction="column"
          sx={{
            justifyContent: "space-evenly",
            flex: "1",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="600"
            align="center"
            color="text.main"
            gutterBottom
          >
            Contact Me
          </Typography>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{
              color: "text.sub",
              maxWidth: "sm",
            }}
          >
            Want to get in touch? Send me a message, and I'll get back to you as
            soon as I can!
          </Typography>
          <Link
            variant="h6"
            align="center"
            target="_blank"
            rel="noreferrer"
            href={`mailto:andydchoo@gmail.com`}
            underline="hover"
            gutterBottom
          >
            {/* Icon is not aligned properly */}
            <Email />
            {"AndyDChoo@gmail.com"}
          </Link>
        </Stack>

        {/* Contact Form Card */}
        <Card
          elevation={5}
          sx={{
            backgroundColor: "background.variant",
            flex: "1",
            pb: 5,
            pt: 5,
            borderRadius: "7px",
          }}
        >
          <Box
            component="form"
            ref={form}
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack
              direction="column"
              sx={{
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                name="user_name"
                margin="normal"
                sx={{
                  m: 3,
                  input: { color: "text.main" },
                  "& label": { color: "text.main" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "text.main",
                    },
                  },
                }}
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
                name="user_email"
                margin="normal"
                sx={{
                  m: 3,
                  input: { color: "text.main" },
                  "& label": { color: "text.main" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "text.main",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: "text.sub" }}>
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                required
                name="subject"
                margin="normal"
                sx={{
                  m: 3,
                  input: { color: "text.main" },
                  "& label": { color: "text.main" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "text.main",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: "text.sub" }}>
                      <SubjectIcon />
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
                name="message"
                rows={4}
                inputProps={{ style: { color: "white" } }}
                sx={{
                  m: 3,
                  "& label": { color: "text.main" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "text.main",
                    },
                  },
                }}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: "text.sub" }}>
                      <CommentIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ m: 3, fontWeight: "600" }}
              >
                Send Message
              </Button>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{ color: "text.sub", maxWidth: "sm" }}
              >
                {success}
              </Typography>
            </Stack>
          </Box>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
