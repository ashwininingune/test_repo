import './App.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CssBaseline from '@mui/material/CssBaseline';
import Resume from './Components/Resume';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  );
}

export default App;
