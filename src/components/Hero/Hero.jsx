import './Hero.scss';
import iPhone from '../../assets/DEMO-removebg.png';

const Hero = ({ title }) => {
  return (
    <div className="wrapper">
      <div className="title">
        <img src={title} alt="Title" />
        <div className="desc">
            WEAR <span>YOUR CREATIVITY</span>.<span style={{ fontStyle: 'italic' }}>EXPRESS YOURSELF</span>
            <br/>ROOKUS. WHERE AI MEETS FASHION
        </div>
        <div className="button-container">
          <button className="waitlist-button">Waitlist</button>
          <button className="demo-button">Try Demo</button>
        </div>
      </div>
      <div className="app">
        <img src={iPhone} alt="iPhone" />
      </div>
    </div>
  );
};

export default Hero;
