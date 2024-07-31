import React from 'react';
import '../styles/AboutUs.css';
import Header from './Header';
import Footer from './Footer';
import missionImage from '../mission.webp';
import historyImage from '../history-image.jpg';

const AboutUs = () => {
  return (
    <main>
      <Header />
      <section className="about-hero-section">
        <h2>About Us</h2>
        <p>We provide the best life insurance services with a focus on customer satisfaction.</p>
      </section>
      <section className="about-details-section">
        <div className="about-card">
          <img src={missionImage} alt="Our Mission" />
          <h3>Our Mission</h3>
          <p>Committed to providing the best life insurance services.</p>
        </div>
        <div className="about-card">
          <img src={historyImage} alt="Our History" />
          <h3>Our History</h3>
          <p>Over 50 years of excellence in life insurance services.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutUs;
