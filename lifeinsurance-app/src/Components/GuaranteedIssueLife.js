import React, { useState } from 'react';
import '../styles/InsuranceForm.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const GuaranteedIssueLife = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    coverageAmount: '',
    investmentOptions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guaranteed Issue Life Form submitted:', formData);
  };

  return (
    <main>
      <Header/>
    <div className='insurance-section'>
      <h2>Guaranteed Issue Life Insurance</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="coverageAmount">Coverage Amount</label>
          <input type="text" id="coverageAmount" name="coverageAmount" value={formData.coverageAmount} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="investmentOptions">Investment Options</label>
          <input type="text" id="investmentOptions" name="investmentOptions" value={formData.investmentOptions} onChange={handleChange} required />
        </div>
        <Link to="/payment">
        <button type="submit" className="btn">Submit</button>
        </Link>
      </form>
    </div>
      <Footer/>
    </main>
  );
};

export default GuaranteedIssueLife;
