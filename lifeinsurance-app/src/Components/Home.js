import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Header from './Header';
import Footer from './Footer';
import termimg from '../term-life.jpg';
import wholeimg from '../whole-life.jpg';
import universalimg from '../universal-image.png';
import variableimg from '../variable-life.avif';
import varuniimg from '../variable-universal-life.jpg';
import indeximg from '../indexed-universal-life.jpg';
import garentimg from '../garented-life.jpg';
import simpleimg from '../simplified-life.jpg';
import groupimg from '../group-life.jpg';
import finalimg from '../Final-life.jpg';

const Home = () => {
  return (
    <main>
      <Header />
      <section id="home" className="hero-section">
        <h2>Welcome to Our Life Ensure</h2>
        <p>Secure your future with our comprehensive life insurance plans.</p>
        <button className="cta-button">Get Started</button>
      </section>
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="cards-container">
          <Link to="/termlife" className="card">
            <img src={termimg} alt="Term Life Insurance" className="card-image"/>
            <div className="card-content">
              <h3>Term Life Insurance</h3>
              <p>Get covered for a specific term.</p>
            </div>
          </Link>
          <Link to="/wholelife" className="card">
            <img src={wholeimg} alt="Whole Life Insurance" className="card-image"/>
            <div className="card-content">
              <h3>Whole Life Insurance</h3>
              <p>Lifetime coverage and cash value.</p>
            </div>
          </Link>
          <Link to="/universallife" className="card">
            <img src={universalimg} alt="Universal Life Insurance" className="card-image"/>
            <div className="card-content">
              <h3>Universal Life Insurance</h3>
              <p>Flexible coverage and premiums.</p>
            </div>
          </Link>
          <Link to="/variablelife" className="card">
            <img src={variableimg} alt="Variable Life Insurance" className="card-image"/>
            <div className="card-content">
              <h3>Variable Life Insurance</h3>
              <p>Investment options with coverage.</p>
            </div>
          </Link>
          <Link to="/variableuniversalLife" className="card">
            <img src={varuniimg} alt="Variable Universal Life Insurance" className="card-image"/>
            <div className="card-content">
              <h3>Variable Universal Life Insurance</h3>
              <p>Combines features of universal life and variable life insurance.</p>
            </div>
          </Link>
          <Link to="/indexeduniversallife" className="card">
            <img src={indeximg} alt="Indexed Universal Life Insurance" className="card-image"/>
            <div className="card-content">
              <h3>Indexed Universal Life Insurance</h3>
              <p>The cash value growth is linked to a stock market index.</p>
            </div>
          </Link>
          <Link to="/guaranteedissuelife" className="card">
            <img src={garentimg} alt="Guaranteed Issue Life Insurance" className="card-image"/>
            <div className="card-content">
              <h3>Guaranteed Issue Life Insurance</h3>
              <p>Traditional life insurance due to health issues.</p>
            </div>
          </Link>
          <Link to="/simplifiedissuelife" className="card">
            <img src={simpleimg} alt="Simplified Issue Life Insurance" className="card-image"/>
            <div className="card-content">
              <h3>Simplified Issue Life Insurance</h3>
              <p>Coverage amounts are determined based on the answers to the questionnaire.</p>
            </div>
          </Link>
          <Link to="/grouplife" className="card">
            <img src={groupimg} alt="Group Life Insurance" className="card-image"/>
            <div className="card-content">
              <h3>Group Life Insurance</h3>
              <p>Basic coverage at a low or no cost to the employee.</p>
            </div>
          </Link>
          <Link to="/finalexpense" className="card">
            <img src={finalimg} alt="Final Expense Insurance" className="card-image"/>
            <div className="card-content">
              <h3>Final Expense Insurance</h3>
              <p>Cover funeral and burial expenses.</p>
            </div>
          </Link>
        </div>
      </section>
      <section id="faq" className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>What is term life insurance?</h3>
          <p>Term life insurance provides coverage for a specific period, usually 10, 20, or 30 years.</p>
        </div>
        <div className="faq">
          <h3>How do I choose the right life insurance plan?</h3>
          <p>Consider your financial goals, budget, and the needs of your dependents.</p>
        </div>
      </section>
      <section id="stats" className="stats-section">
        <h2>Our Achievements</h2>
        <div className="stat">
          <h3>10,000+</h3>
          <p>Policies Sold</p>
        </div>
        <div className="stat">
          <h3>95%</h3>
          <p>Customer Satisfaction</p>
        </div>
        <div className="stat">
          <h3>30+</h3>
          <p>Years in Business</p>
        </div>
      </section>
      <section id="newsletter" className="newsletter-section">
        <h2>Stay Updated</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: lifeensure@lifeinsurance.com</p>
        <p>Phone: +123 456 7111</p>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
