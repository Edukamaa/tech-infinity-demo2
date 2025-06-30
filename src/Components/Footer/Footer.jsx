import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">

          {/* Services Section */}
          <div className="col-md-3">
            <h5>Services</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Website Design</a></li>
              <li><a href="#">Ecommerce Website Design</a></li>
              <li><a href="#">Digital Marketing in Kenya</a></li>
              <li><a href="#">SEO</a></li>
              <li><a href="#">Social Media Marketing</a></li>
              <li><a href="#">Graphics Design</a></li>
              <li><a href="#">Website Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5>Contact</h5>
            <p>Email: info@techinfinitysolutions.com</p>
            <p>Phone: +254 722 785 480</p>
            <p>or +254 757 775 835</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Website Design Prices</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>
              Based in Nairobi, Kenya, Techinfinity Solutions is a rising star in web design
              and digital marketing. We offer custom digital strategies that boost your business.
            </p>
          </div>

        </div>

        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0">&copy; 2025 Tech Infinity Solutions. All rights reserved.</p>
          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-whatsapp"></i></a>
            <a href="#"><i className="bi bi-tiktok"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
