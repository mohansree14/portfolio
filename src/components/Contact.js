import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('Z2dItWfoMeC3IRpPL'); // Replace with your EmailJS Public Key
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_3yl8sh4', // Replace with your EmailJS Service ID
        'template_d07ur5h', // Replace with your EmailJS Template ID
        {
          to_email: 'mohansreevijayakumare@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        }
      );

      if (result.status === 200) {
        alert('✅ Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('❌ Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="section-icon">✈️</span>
          Contact
        </h2>

        <div className="contact-wrapper">
          {/* Left Column - Contact Info */}
          <div className="contact-info">
            <h3 className="contact-heading">Let's Get in Touch!</h3>
            
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <p className="contact-label">Contact No</p>
                <p className="contact-value">+44 07887142359</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <p className="contact-label">Email</p>
                <p className="contact-value">mohansreevijayakumare@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <p className="contact-label">Address</p>
                <p className="contact-value">Guildford, UK</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
