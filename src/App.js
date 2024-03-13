import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';

import Skills from './Component/Skills';
import Body from './Component/Body';
import Resume from './Component/Resume';
import AboutMe from './Component/AboutMe';
import Contact from './Component/Contact';


function App() {
 
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
