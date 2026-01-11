import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      {submitted ? (
        <div className="thank-you">
          <h3>✅ Thank You!</h3>
          <p>We have received your message. Our team will contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Contact;