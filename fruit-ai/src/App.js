import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Chatbot from './Components/Chatbot';
import Translator from './Components/Translator';
import FAQ from './Components/FAQ';
import About from './Components/About';
import './styles/App.css';  // Importing global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatbot" element={
            <div className="chatbot-wrapper">
              <Chatbot />
            </div>
          } />
          <Route path="/translator" element={<Translator />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
