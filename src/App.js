import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SkillsBar from './pages/SkillsBar';
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/MyPortFolio" exact element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact"  element={<Contact/>}/>
          <Route path="/skills" element={<SkillsBar/>}/> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
