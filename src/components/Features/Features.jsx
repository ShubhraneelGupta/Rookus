import React from 'react';
import './Features.scss';
import featureImage3 from '../../assets/iPhone-png.png';
import logo from '../../assets/rookus-logo.jpg';

const Feature = () => {
  return (
    <div className="feature-page">
      <header className="header">
        <img src={logo} alt="Rookus Logo" className="logo" />
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Rookus: Where AI Meets Fashion</h1>
          <p className="hero-subtitle">Revolutionizing fashion with the power of artificial intelligence.</p>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature">
          <img src={featureImage3} alt="Feature 1" className="feature-image" />
          <div className="feature-details">
            <h2 className="feature-title">Feature One</h2>
            <p className="feature-description">Description for feature one. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
        </div>

        <div className="feature">
          <img src={featureImage3} alt="Feature 2" className="feature-image" />
          <div className="feature-details">
            <h2 className="feature-title">Feature Two</h2>
            <p className="feature-description">Description for feature two. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
        </div>

        <div className="feature">
          <img src={featureImage3} alt="Feature 3" className="feature-image" />
          <div className="feature-details">
            <h2 className="feature-title">Feature Three</h2>
            <p className="feature-description">Description for feature three. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
