import React from 'react';
import { Link } from 'react-router-dom';
import finalimg from '../Final-life.jpg';
import garentimg from '../garented-life.jpg';
import groupimg from '../group-life.jpg';
import indeximg from '../indexed-universal-life.jpg';
import simpleimg from '../simplified-life.jpg';
import '../styles/Services.css';
import termimg from '../term-life.jpg';
import universalimg from '../universal-image.png';
import variableimg from '../variable-life.avif';
import varuniimg from '../variable-universal-life.jpg';
import wholeimg from '../whole-life.jpg';
import Footer from './Footer';
import Header from './Header';

const Services = () => {
  return (
    <main>
      <Header/>
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
      <Footer/>
    </main>
  );
};

export default Services;
