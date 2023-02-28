import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";
import { theme } from "./styles/styles";
import Navbar from './components/Navbar';
import About from './components/About';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" >
        <Navbar />
        <About />
      </div>
    </ThemeProvider>
  );
}
