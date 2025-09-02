import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-content">
            <figure className="newsletter-img">
              <img src="/images/newsletter-img.png" alt="Newsletter subscription" />
            </figure>
            <h2 className="h2 newsletter-title">Subscribe to our newsletter</h2>
          </div>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email Address"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
