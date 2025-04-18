import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

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
    <div className="contact-page">
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
          <div className="social-links">
          <a href="https://www.linkedin.com/in/kaheni-peter-8b40032a8" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-linkedin"></i> LinkedIn
</a>

            <a href="https://github.com/KaheniSatima" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.facebook.com/kahenisatima" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook"></i>
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
