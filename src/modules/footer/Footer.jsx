import React from 'react'
import { Link } from "react-router-dom";

import './footer.css';
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            {/* <h2 className='footer_main'>About Us</h2> */}
            <p className='footer_main'>
              This is a platform dedicated to providing support, resources, and education for individuals and families affected by mental health disorders. Our mission is to foster understanding, break down stigma, and promote mental well-being in all aspects of life.
            </p>
          </div>
          <div className="footer-section links">  
            <h2>Quick Links</h2>
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
          {/* <div className="footer-section contact">
            <h2>Contact Us</h2>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i> 123 Main Street, City,
                Country
              </p>
              <p><i className="fas fa-phone"></i> 123-456-7890</p>
              <p><i className="fas fa-envelope"></i> info@example.com</p>
            </div>
          </div> */}
          <div className="footer-section newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <form action="#">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Your Email Address"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          Disclaimer: Content Provided by CalmSage serves as information purpose only and cannot be directed as a substitute for any type of professional medical advice. Therefore, we encourage our readers to seek the guidance of qualified health professionals for further queries related to your health or mental health condition.
        </div>
      </footer>
    </div>
  )
}

export default Footer;
