import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './TopBar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="contact-info">
          <span><strong>Email:</strong> info@ltechinfinitydemo2.com</span>
          <span className="ms-md-3"><strong>Phone:</strong> +254 722-785-480 / +254 757-758-535</span>
        </div>
        <div className="social-icons mt-2 mt-md-0">
          <a href="#"><i className="bi bi-tiktok"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-twitter-x"></i></a>
          <a href="#"><i className="bi bi-whatsapp"></i></a>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
