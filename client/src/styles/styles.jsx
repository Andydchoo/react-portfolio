import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      med: 613,
      lg: 1024,
      xl: 1200
    }
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(',')
  },
  palette: {
    background: {
      main: '#121212',
    },
    primary: {
      main: '#BB86FC',
      variant: '#3700B3',
    },
    secondary: {
      main: '#03DAC6',
      variant: '#018786',
    },
    error: {
      main: '#CF6679',
    },
    white: {
      main: '#FFFFFF',
    }
  },
});