import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import logo from "../../assets/images/logo.png";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        navigate('/login');
        Swal.fire('Logged out!', 'You have been successfully logged out.', 'success');
      }
    });
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="image-container">
          <img src={logo} height="100" width="100" alt="logo" />
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              {["/", "/aboutus", "/quiz", "/blogs", "/writeastory", "/contactus", "/faq"].map((path, index) => {
                const names = ["Home", "About Us", "Quiz", "Blogs", "Write A Story", "Contact Us", "FAQs"];
                return (
                  <li key={path}>
                    <Link to={path} className={location.pathname === path ? "active" : ""}>
                      {names[index]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="navbar-right" ref={dropdownRef}>
          {loggedInUser ? (
            <div className="user-dropdown">
              <button className="navbar-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Welcome, {loggedInUser.charAt(0).toUpperCase() + loggedInUser.slice(1)}
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <button type="button" onClick={() => navigate("/login")} className="navbar-button">
              LOGIN
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
