// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';  // Assure-toi que cette ligne existe

function App() {
  return (
    <Router>
      <div>
        <h1>My Company</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />  {/* Vérifie que la route est bien définie */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
