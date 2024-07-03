// Features.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Features.scss'; // Ensure this path is correct for your project

// Import phone images correctly
import iPhoneImage from '../../assets/iPhone-png.png';

const phones = [
  { id: 1, description: 'Phone 1 description', features: [1, 2], path: '/phone1' },
  { id: 2, description: 'Phone 2 description', features: [3, 4], path: '/phone2' },
  { id: 3, description: 'Phone 3 description', features: [5, 6], path: '/phone3' },
  // Add more phones as needed
];

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [selectedPhone, setSelectedPhone] = useState(null);

  const handlePhoneClick = (phoneId) => {
    setSelectedPhone(phoneId === selectedPhone ? null : phoneId);
  };

  return (
    <div className="feature-page">
      <div className="header">
        {/* Header content */}
        <h1>Features</h1>
      </div>
      
      <div className="hero-section">
        {/* Hero section content */}
        <div className="hero-content">
          <h2>Discover Our Features</h2>
          <p>Explore the powerful capabilities of our app with seamless integration and advanced functionalities.</p>
        </div>
      </div>
      
      <div className="feature-section">
        {/* Feature content */}
        {phones.map((phone) => (
          <motion.div
            key={phone.id}
            className="phone-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {selectedPhone === phone.id && phone.features.map((featureId) => (
              <div key={featureId} className="feature">
                <motion.img
                  src={iPhoneImage}
                  alt={`Phone ${phone.id}`}
                  className="feature-image"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="feature-details">
                  <h3 className="feature-title">Feature {featureId}</h3>
                  <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo cursus magna vel ullamcorper.</p>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      
      <div className="phone-slider" ref={ref}>
        <motion.div
          className="phone-container"
          initial={{ x: '-100%' }}
          animate={{ x: inView ? '0%' : '-100%' }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          {phones.map((phone) => (
            <div key={phone.id} className="phone" onClick={() => handlePhoneClick(phone.id)}>
              <motion.img
                src={iPhoneImage}
                alt={`Phone ${phone.id}`}
                className="phone-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              />
              <motion.p
                className="phone-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: 0.4 }}
              >
                {phone.description}
              </motion.p>
              {selectedPhone === phone.id && (
                <motion.div
                  className="phone-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link to={phone.path}>View Details</Link>
                  {/* You can also render specific components or pages here */}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
      
    </div>
  );
};

export default Features;
