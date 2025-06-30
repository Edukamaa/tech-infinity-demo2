import React from 'react';
import './Reviews.css';
import { FaStar } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';

// ✅ Import images
import boy1 from '../../assets/boy1.jpeg';
import boy2 from '../../assets/boy2.jpeg';
import boy3 from '../../assets/boy3.jpeg';
import boy4 from '../../assets/boy4.png'; // Corrected
import girl1 from '../../assets/girl1.jpeg';
import girl2 from '../../assets/girl2.jpeg';
import girl3 from '../../assets/girl3.jpeg';
import girl4 from '../../assets/girl4.jpeg';
import girl5 from '../../assets/girlfive.jpeg'; // ✅ New image

const Reviews = () => {
  const title = "Reviews from our esteemed customers";
  const subtitle = "We value every feedback and strive to grow from it.";

  // ✅ 9 reviews now
  const reviewData = [
    { name: 'Brian', image: boy1, date: 'June 20, 2025', message: 'Their team was super helpful, and the results were amazing!' },
    { name: 'Sarah', image: girl1, date: 'June 15, 2025', message: 'Great service! My website looks stunning.' },
    { name: 'Kevin', image: boy2, date: 'June 10, 2025', message: 'Highly recommend Luvah Tech for branding and design.' },
    { name: 'Faith', image: girl2, date: 'June 9, 2025', message: 'Professional and fast. They understood my vision.' },
    { name: 'Mark', image: boy3, date: 'June 5, 2025', message: 'Quality work with very friendly support.' },
    { name: 'Jane', image: girl3, date: 'June 2, 2025', message: 'They delivered exactly what I wanted and more!' },
    { name: 'Leo', image: boy4, date: 'June 1, 2025', message: 'Creative, responsive, and efficient. Loved working with them.' },
    { name: 'Tasha', image: girl4, date: 'May 30, 2025', message: 'Best digital team I’ve worked with in a while.' },
    { name: 'Winnie', image: girl5, date: 'May 28, 2025', message: 'Top-notch results, very professional and creative team!' },
  ];

  // ✅ Group reviews into chunks of 3 for each slide
  const grouped = reviewData.reduce((acc, curr, i) => {
    const groupIndex = Math.floor(i / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(curr);
    return acc;
  }, []);

  return (
    <div className="reviews-section container my-5">
      {/* Title and Subtitle */}
      <div className="text-center mb-4">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>

      {/* Bootstrap Carousel */}
      <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="false">
        <div className="carousel-inner">
          {grouped.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row">
                {group.map((review, idx) => (
                  <div className="col-md-4 mb-3" key={idx}>
                    <div className="card text-center p-3 review-card">
                      <img src={review.image} alt={review.name} className="rounded-circle mb-2 review-img" />
                      <h6 className="mb-0">
                        {review.name} <BsCheckCircleFill className="text-primary small" />
                      </h6>
                      <small className="text-muted">{review.date}</small>
                      <div className="stars my-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-warning" />
                        ))}
                      </div>
                      <p className="small text-muted">{review.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
