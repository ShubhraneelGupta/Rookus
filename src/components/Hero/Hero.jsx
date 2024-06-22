import './Hero.scss';
import iPhone from '../../assets/iPhone-png.png';

const Hero = ({ title }) => {
  return (
    <div className="wrapper">
      <div className="title">
        <img src={title} alt="Title" />
        <div className="desc-container">
          <div className="desc-line desc-line-1">
            WEAR <span>YOUR CREATIVITY</span>.<span style={{ fontStyle: 'italic' }}>EXPRESS YOURSELF</span>
          </div>
          <div className="desc-line desc-line-2">
            ROOKUS. WHERE AI MEETS FASHION
          </div>
        </div>
      </div>
      <div className="app">
        <img src={iPhone} alt="iPhone" />
      </div>
    </div>
  );
};

export default Hero;
