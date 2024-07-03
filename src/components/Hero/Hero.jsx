import './Hero.scss';
import { motion } from 'framer-motion';
import iPhone from '../../assets/DEMO-removebg.png';
import { useState } from 'react';
import Demo from '../Demo/Demo'; // Ensure correct import path
import Waitlist from '../Waitlist/Waitlist'; // Ensure correct import path

const Hero = ({ title }) => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const handleCloseModal = () => {
    setShowWaitlist(false);
    setShowDemo(false);
  };

  const handleWaitlistClick = () => {
    setShowWaitlist(true);
  };

  const handleDemoClick = () => {
    setShowDemo(true);
  };

  return (
    <div className="wrapper">
      <div className="title">
        <img src={title} alt="Title" />
        <div className="desc-container">
          <motion.div
            className="desc-line desc-line-1"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            <span>WEAR YOUR CREATIVITY</span>.<span style={{ fontStyle: 'italic' }}>EXPRESS YOURSELF</span>
          </motion.div>
          <motion.div
            className="desc-line desc-line-2"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ duration: 3, ease: 'easeInOut', delay: 3 }}
          >
            <strong>ROOKUS,</strong> WHERE AI MEETS FASHION
          </motion.div>
        </div>
        <div className="button-container">
          <motion.button
            className="waitlist-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 6 }}
            onClick={handleWaitlistClick}
          >
            Waitlist
          </motion.button>
          <motion.button
            className="demo-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 6.5 }}
            onClick={handleDemoClick}
          >
            Try Demo
          </motion.button>
        </div>
      </div>
      <div className="app">
        <img src={iPhone} alt="iPhone" />
      </div>
      {showWaitlist && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <Waitlist />
          </div>
        </div>
      )}
      {showDemo && <Demo />} {/* Ensure Demo component is rendered when showDemo is true */}
    </div>
  );
};

export default Hero;
