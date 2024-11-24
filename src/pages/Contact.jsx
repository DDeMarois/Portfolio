import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    )    
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormStatus('Message sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          setFormStatus('Failed to send the message.');
        }
      );

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

return (
  <div>
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <p>I'd love to hear from you! Fill out the form below to get in touch.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}
    </section>
    <footer>
      <Link to="/">Go back to Home</Link>
    </footer>
  </div>
);
}

export default Contact;
