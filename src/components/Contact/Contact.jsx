// Contact.jsx

import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss'; // Import Contact component styles

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    user_name: '',
    user_email: '',
    reply_to: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ab0ncrk', 'template_wrhighr')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({
          from_name: '',
          user_name: '',
          user_email: '',
          reply_to: '',
        });
      }, (error) => {
        console.error(error.text);
        alert('Oops! Something went wrong. Please try again later.');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from_name">Your Name</label>
          <input type="text" id="from_name" name="from_name" value={formData.from_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="user_name">User Name</label>
          <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Your Email</label>
          <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="reply_to">Reply To</label>
          <input type="text" id="reply_to" name="reply_to" value={formData.reply_to} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
