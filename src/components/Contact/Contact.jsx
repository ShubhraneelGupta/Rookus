import { useState } from 'react';
import './Contact.scss'; // Import Contact component styles

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    user_name: '',
    user_email: '',
    reply_to: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const serviceID = 'service_ab0ncrk';
    const templateID = 'template_wrhighr';
    const userID = 'JRlaG3hag5xl7193h';

    const templateParams = {
      from_name: formData.from_name,
      user_name: formData.user_name,
      user_email: formData.user_email,
      reply_to: formData.reply_to,
      message: formData.message,
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        user_id: userID,
        template_params: templateParams,
      }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({
        from_name: '',
        user_name: '',
        user_email: '',
        reply_to: '',
        message: '',
      });
    } else {
      alert('Oops! Something went wrong. Please try again later.');
    }
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
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
