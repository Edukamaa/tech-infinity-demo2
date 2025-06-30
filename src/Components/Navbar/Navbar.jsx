import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" className="logo me-2" />
          <span className="brand-name">Tech Infinity</span>
        </a>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
