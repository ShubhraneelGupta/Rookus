import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '',
    user_email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form data:', form); 
  
    emailjs.send('service_ab0ncrk', 'template_wrhighr')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setForm({
          from_name: '',
          user_email: '',
          phoneNumber: '',
          message: '',
        });
      }, (error) => {
        console.error(error.text);
        alert('Oops! Something went wrong. Please try again later.');
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <h1>Convey Your Ideas to Us</h1>
        <p>
          Contact us for questions, technical assistance, or collaboration
          opportunities via the contact information provided.
        </p>
        <div className="contact-details">
          <div className="contact-detail">
            <span role="img" aria-label="phone">📞</span>
            <a href="tel:+1234567890">+91 96606 73731</a>
          </div>
          <div className="contact-detail">
            <span role="img" aria-label="email">✉️</span>
            <a href="mailto:hello@reallygreatsite.com">bhaiya email daal do idhar</a>
          </div>
          <div className="contact-detail">
            <span role="img" aria-label="address">📍</span>
            <address>MARS :/</address>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="user_email"
              value={form.user_email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
            />
          </label>
          <button type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
