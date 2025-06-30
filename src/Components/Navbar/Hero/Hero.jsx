import React from 'react';
import './Hero.css';
import backone from '../../../assets/backone.jpg';

const Hero = () => {
  return (
    <div className="hero-message" style={{ backgroundImage: `url(${backone})` }}>
      <div className="container text-center">
        <h1 className="hero-title">
          Ignite your brand's digital journey with <span>Tech Infinity Solutions.</span>
        </h1>
        <p className="hero-subtitle">
          Your one-stop centre for tailored digital marketing strategies that drive results.
        </p>
        <a href="#contact" className="btn btn-primary consultation-btn">
          Get a free consultation
        </a>
      </div>
    </div>
  );
};

export default Hero;

