import React from 'react';
import '../styles/ContactUs.css';
import Header from './Header';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <main>
      <Header />
      <section className="contact-hero-section">
        <h2>Contact Us</h2>
        <p style={{ textAlign: 'center' }}>We're here to help you with any questions or concerns.</p>
      </section>
      <section className="contact-details-section">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:lifeensure@lifeinsurance.com">lifeensure@lifeinsurance.com</a></p>
          <p>Phone: <a href="tel:+1234567111">+91 9998979695</a></p>
          <p>Address: 123 Insurance St., Coimbatore, India</p>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <section className="contact-map-section">
        <h3>Our Location</h3>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509186!2d144.95373531531687!3d-37.81627927975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773f9a7d5677e1!2sEnvato!5e0!3m2!1sen!2sus!4v1634563930159!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactUs;
