import React from 'react';
import EarthCanvas from '../canvas/Earth';
import './Contact.css';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fb8cbc14-88a2-4cac-b790-e0680bd3962f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>

    <div className="contact-section">

      <h3 className='h1'>Contact</h3>
      <p className='p'>
          Please fill out the form below to reach out to me.
      </p>

      <div className="contact">
        <div className="contact-form-container">
        <form onSubmit={onSubmit} className="contact-form">
          <h2>Contact Me</h2>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
          <span className="result-message">{result}</span>
        </form>
      </div>
      <div className="contact-earth">
        <div className='earth'>
            <EarthCanvas />
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
