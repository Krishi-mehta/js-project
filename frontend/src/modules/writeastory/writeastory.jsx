import React, { useState } from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import '../writeastory/writeastory.css'

const WriteAStory = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [story, setStory] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      showAlertMessage('Please enter your name.');
      return;
    }

    if (email.trim() === '' || !emailPattern.test(email)) {
      showAlertMessage('Please enter a valid email address.');
      return;
    }

    if (story.length < 20) {
      showAlertMessage('Your story should be at least 20 characters long.');
      return;
    }

    showAlertMessage('Form submitted successfully!');
    console.log('Form Data:', { name, email, subject, story });

    setName('');
    setEmail('');
    setSubject('');
    setStory('');
  };

  const showAlertMessage = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setShowOverlay(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
    setShowOverlay(false);
    setAlertMessage('');
  };

  return (
    <div className="write-story-container">
      <Header />
      <header className='write-story-header'>
        <h1 className="write-story-title">Better You</h1>
      </header>
      <h2 className="write-story-subtitle">SHARE YOUR PERSONAL STORIES OF TRIUMPH</h2>
      <p className="write-story-description">
        It is possible to overcome mental health problems. All it takes is a
        little willpower and some help. Share your stories of recovery & inspire
        people in overcoming their struggles of various kinds.
      </p>
      <div className="write-story-form-wrapper">
        <form onSubmit={handleSubmit} className="write-story-form">
          <label htmlFor="name" className="write-story-label">
            Your Name <span className="write-story-required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="write-story-input"
            required
          />
          
          <label htmlFor="email" className="write-story-label">
            Your Email <span className="write-story-required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="write-story-input"
            required
          />
          
          <label htmlFor="subject" className="write-story-label">
            Subject<span className="write-story-required">*</span></label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="write-story-input"
          />
          
          <label htmlFor="story" className="write-story-label">
            Share Story<span className="write-story-required">*</span></label>
          <textarea
            id="story"
            name="story"
            rows="5"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="write-story-textarea"
          ></textarea>
          
          <button type="submit" className="write-story-button">Send</button>
        </form>
      </div>

      {showOverlay && <div className="write-story-overlay"></div>}
      {showAlert && (
        <div className="write-story-alert">
          <p>{alertMessage}</p>
          <button onClick={closeAlert} className="write-story-alert-button">OK</button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default WriteAStory;
