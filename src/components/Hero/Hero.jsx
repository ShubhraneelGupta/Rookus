import './Hero.scss';
import iPhone from '../../assets/DEMO-removebg.png';
import {motion} from 'framer-motion'

const Hero = ({ title }) => {
  return (
    <div className="wrapper">
      <div className="title">
            <img src={title} alt="" srcset="" />    

        <div className="desc">
            WEAR <span>YOUR CREATIVITY</span>.<span style={{ fontStyle: 'italic' }}>EXPRESS YOURSELF</span>
            <br/>ROOKUS. WHERE AI MEETS FASHION
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
