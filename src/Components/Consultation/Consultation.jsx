import React from 'react';
import './Consultation.css';
import back from '../../assets/backthree.jpg';

const Consultation = () => {
  return (
    <div className="consultation-section" style={{ backgroundImage: `url(${back})` }}>
      <div className="container text-center text-white">
        <h2 className="consultation-title">Ready to unlock your digital potential?</h2>
        <p className="consultation-subtitle">
          Contact us today and let’s craft your digital success story together.
        </p>
        <a href="#contact" className="btn btn-danger consultation-btn">
          Get a free consultation
        </a>
      </div>
    </div>
  );
};

export default Consultation;
