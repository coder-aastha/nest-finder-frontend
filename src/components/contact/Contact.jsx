import './contact.scss';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We&apos;re here to help! Reach out to us with any questions or inquiries.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <div className="container">
          <h2>Get in Touch</h2>
          <form className="form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <div className="container">
          <h2>Our Office</h2>
          <div className="info">
            <div className="address">
              <h3>Address</h3>
              <p>123 Real Estate Blvd, City, Country</p>
            </div>
            <div className="phone">
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="email">
              <h3>Email</h3>
              <p>contact@realestatecompany.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
