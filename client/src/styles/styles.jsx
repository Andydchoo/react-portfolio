import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      med: 750,
      lg: 1024,
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
      default: '#121212',
      variant: `#292929`,
      variant2: `#3b3b3b`
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
    text: {
      main: `rgba(255, 255, 255, .87)`,
      sub: `rgba(255, 255, 255, .6)`,
    },
  },
});