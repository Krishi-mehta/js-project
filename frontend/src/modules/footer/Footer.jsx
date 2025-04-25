import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-about">
          <h2 className="footer-title">About BetterYou</h2>
          <p>
            BetterYou is a platform dedicated to supporting mental health by providing education, tools, and a space for expression. Our goal is to encourage healing, foster understanding, and build a stigma-free environment.
          </p>
        </div>

        <div className="footer-links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/writeastory">Write A Story</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h2 className="footer-title">Newsletter</h2>
          <p>Stay connected. Get updates and resources straight to your inbox.</p>
          <form>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your Email Address"
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Disclaimer: The content provided by BetterYou is for informational purposes only and should not be considered a substitute for professional medical advice. Please consult a qualified professional for your mental health concerns.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
