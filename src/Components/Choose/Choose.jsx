import React from 'react';
import './Choose.css';
import {
  BsGraphUp,
  BsGear,
  BsAward,
  BsChatDots,
  BsPeople,
  BsCashStack
} from 'react-icons/bs';

const reasons = [
  {
    icon: <BsGraphUp className="choose-icon" />,
    title: 'Data-driven approach',
    message: 'We rely on insights, not guesswork, to drive your success.',
  },
  {
    icon: <BsGear className="choose-icon" />,
    title: 'Customizable solutions',
    message: 'We tailor our strategies to your unique needs and goals.',
  },
  {
    icon: <BsAward className="choose-icon" />,
    title: 'Exceptional results',
    message: 'We track progress and celebrate every milestone together.',
  },
  {
    icon: <BsChatDots className="choose-icon" />,
    title: 'Transparent communication',
    message: 'We keep you informed and involved every step of the way.',
  },
  {
    icon: <BsPeople className="choose-icon" />,
    title: 'Passionate team',
    message: 'We’re a team of digital enthusiasts who care about your success.',
  },
  {
    icon: <BsCashStack className="choose-icon" />,
    title: 'Cost effective',
    message: 'We offer smart solutions that respect your budget.',
  },
];

const Choose= () => {
  return (
    <div className="container my-5 choose-section">
      <div className="text-center mb-4">
        <h2 className="choose-title">Why Choose Us?</h2>
      </div>

      <div className="row">
        {reasons.map((reason, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 text-center p-4 shadow-sm">
              <div className="mb-3">{reason.icon}</div>
              <h5 className="choose-card-title">{reason.title}</h5>
              <p className="choose-card-text">{reason.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
