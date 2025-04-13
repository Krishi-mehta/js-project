import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="image-container">
          <img
            src={logo}
            height="120"
            width="120"
            alt="logo"
          />
        </div>
        <div className="navbar-links">
          <nav>
            <ul>
              <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
              <li><Link to="/aboutus" className={location.pathname === "/aboutus" ? "active" : ""}>About Us</Link></li>
              <li><Link to="/quiz" className={location.pathname === "/quiz" ? "active" : ""}>Quiz</Link></li>
              <li><Link to="/blogs" className={location.pathname === "/blogs" ? "active" : ""}>Blogs</Link></li>
              <li><Link to="/writeastory" className={location.pathname === "/writeastory" ? "active" : ""}>Write A Story</Link></li>
              <li><Link to="/contactus" className={location.pathname === "/contactus" ? "active" : ""}>Contact Us</Link></li>
              <li><Link to="/faq" className={location.pathname === "/faq" ? "active" : ""}>FAQs</Link></li>
            </ul>
          </nav>
        </div>
        <div className="navbar-right">
          {/* <p className="navbar-p">Therapy for everyone</p> */}
          <button type="button" onClick={() => navigate("/login")} className="navbar-button">LOGOUT</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
