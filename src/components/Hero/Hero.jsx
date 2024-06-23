import './Hero.scss';
import iPhone from '../../assets/DEMO-removebg.png';
import {motion} from 'framer-motion'

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
        </div>
        <div className="button-container">
          <motion.button
            className="waitlist-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 6, type:"tween" }}
          >
            Waitlist
          </motion.button>
          <motion.button
            className="demo-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 6.5, type:"tween" }}
          >
            Try Demo
          </motion.button>
        </div>
      </div>
      <div className="app">
        <img src={iPhone} alt="iPhone" />
        
      </div>
      
    </div>
  );
};

export default Hero;
