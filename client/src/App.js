import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";
import { theme } from "./styles/styles";
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" style={{ scrollBehavior: 'smooth' }}>
        <Navbar id='Navbar' />
        <About id='About' />
        <Skills id='Skills' />
        <Projects id='Projects' />
        <Contact id='Contact' />
        <Footer id='Footer' />
      </div>
    </ThemeProvider>
  );
}
