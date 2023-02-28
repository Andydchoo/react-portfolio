import { ThemeProvider } from '@emotion/react';
import { theme } from "./styles/styles";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    </ThemeProvider>
  );
}
