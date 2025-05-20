import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Footer from './Footer'; // Make sure you import Footer

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('pt352kah', 'pt352kah', form.current, 'HVhE5N_AN59aH64x0')
      .then((result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="contact-page">
        {/* Banner Section */}
        <div className="contact-banner">
          <div className="banner-left">
            <h1>KAHENI PETER</h1>
            <p className="banner-message">
              I’d love to hear from you! Whether you have a question about my services, want to hire me, want to collaborate, or just want to say hello — feel free to contact me.
            </p>
            <p className="banner-contact">
              pk2532625@gmail.com &nbsp; | &nbsp; +254 799090598
            </p>
          </div>
          <div className="banner-right">
            <i className="fas fa-comments fa-4x banner-icon"></i>
            <p className="banner-note">I would be happy to serve you or hear from you!</p>
          </div>
        </div>

        {/* Thick red line */}
        <hr className="thick-divider" />

        {/* Contact Content Section */}
        <h2>Contact Me</h2>
        <p>I'm open to freelance opportunities or collaborations. Feel free to reach out!</p>

        <div className="contact-container">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-details">
            <h3>Reach Me Directly</h3>
            <p><strong>Email:</strong> <a href="mailto:pk2532625@gmail.com" className="contact-link">pk2532625@gmail.com</a></p>
            <p><strong>Phone:</strong> +254 799 090 598</p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/254799090598" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
