import React from 'react';
import './Services.css';

import webdesign from '../../assets/backfive.jpg';
import digitalmarketing from '../../assets/backfour.jpg';
import planning from '../../assets/backtwo.jpg';
import socialmarketing from '../../assets/backone.jpg';
import contentmarketing from '../../assets/backseven.jpg';
import graphicsdesign from '../../assets/backsix.jpg';

const services = [
  {
    image: webdesign,
    title: 'Website Design & Development',
    description: 'We create visually stunning, user-friendly websites that captivate your audience and function flawlessly.',
  },
  {
    image: digitalmarketing,
    title: 'Digital Marketing',
    description: 'Maximize your visibility with SEO, online ads, email marketing and more.',
  },
  {
    image: planning,
    title: 'Overall Strategy & Planning',
    description: 'We build strategies that align with your goals and guide your brand to success.',
  },
  {
    image: socialmarketing,
    title: 'Social Media Marketing',
    description: 'Boost brand engagement using Facebook, Instagram, X, and LinkedIn.',
  },
  {
    image: contentmarketing,
    title: 'Content Marketing',
    description: 'We craft engaging blog posts, infographics, and more to build trust and authority.',
  },
  {
    image: graphicsdesign,
    title: 'Graphics Design',
    description: 'Stand out with logos and visuals that leave a lasting impression.',
  },
];

const Services = () => {
  return (
    <div className="services-section container my-5">
      <div className="text-center mb-5">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Unleash your digital potential with our full range of services.
        </p>
      </div>
      
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="service-card shadow-sm h-100">
              <img src={service.image} alt={service.title} className="img-fluid service-image" />
              <div className="p-3">
                <h5 className="service-title">{service.title}</h5>
                <p className="service-description">{service.description}</p>
                <button className="btn btn-outline-primary btn-sm">Learn more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
