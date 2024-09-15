import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Link to the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Fruit.AI</h1>
      <p className="subtitle">Be Healthy!</p>
      <div className="grid-container">
        <Link to="/chatbot" className="block chat-block">Chat.</Link>
        <Link to="/translator" className="block translator-block">Gx.</Link>
        <Link to="/faq" className="block faq-block">FAQs</Link>
        <Link to="/about" className="block about-block">About</Link>
      </div>
    </div>
  );
};

export default Home;
