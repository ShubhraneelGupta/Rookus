import './Hero.scss';
import { motion } from 'framer-motion';
import iPhone from '../../assets/DEMO-removebg.png';

const Hero = ({ title }) => {
  return (
    <div className="wrapper">
      <div className="title">
      <img src={title} alt="" srcset="" />    
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
          <motion.div
            className="desc-line desc-line-3"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ duration: 3, ease: 'easeInOut', delay: 6 }}
          >
            
          </motion.div>
        </div>
        <div className="button-container">
          <motion.button
            className="waitlist-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 9 }}
          >
            Waitlist
          </motion.button>
          <motion.button
            className="demo-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 9.5 }}
          >
            Try Demo
          </motion.button>
        </div>
      </div>
      <div className="app">
        <img src={iPhone} alt="iPhone" />
        
      </div>
      <footer className="footer">
        <p>&copy; 2024 Rookus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Hero;
