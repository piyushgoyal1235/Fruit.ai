import React from 'react';
import '../styles/About.css'; // Import the updated CSS

const About = () => {
  return (
    <div className="about-container">
      {/* Vector elements */}
      <div className="vector vector-1"></div>
      <div className="vector vector-2"></div>
      <div className="vector vector-3"></div>

      {/* About content */}
      <div className="about-content">
        <h1 className="about-title">Fruit.AI</h1>
        <p className="about-description">
          Whether you're looking to discover new fruits, understand their nutritional values, 
          or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. 
          We provide personalized fruit recommendations tailored to your health needs, 
          making it easier for you to integrate the best fruits into your daily routine.
        </p>
        <button className="about-button">ABOUT</button>
      </div>
    </div>
  );
};

export default About;
