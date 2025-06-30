import React from 'react';
import './Header.css';

const Header = ({ title, subtitle }) => {
  return (
    <div className="section-header text-center my-5">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
};

export default Header;
