import React, { useState, useEffect } from 'react';
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
  const [submittedStories, setSubmittedStories] = useState([]);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Load stories from localStorage on component mount
  useEffect(() => {
    const storedStories = JSON.parse(localStorage.getItem('submittedStories')) || [];
    setSubmittedStories(storedStories);
  }, []);

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

    // Add the new story to the submittedStories array
    const newStory = {
      id: Date.now(), // Using timestamp as a simple unique ID
      name,
      email,
      subject,
      story,
      date: new Date().toLocaleDateString()
    };
    
    const updatedStories = [newStory, ...submittedStories];
    setSubmittedStories(updatedStories);
    
    // Store updated stories in localStorage
    localStorage.setItem('submittedStories', JSON.stringify(updatedStories));

    showAlertMessage('Story submitted successfully!');

    // Clear the form
    setName('');
    setEmail('');
    setSubject('');
    setStory('');
  };

  const deleteStory = (id) => {
    const updatedStories = submittedStories.filter(story => story.id !== id);
    setSubmittedStories(updatedStories);
    
    // Update localStorage after deletion
    localStorage.setItem('submittedStories', JSON.stringify(updatedStories));
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

      {/* Display submitted stories */}
      {submittedStories.length > 0 && (
        <div className="submitted-stories">
          <h3 className="submitted-stories-title">Submitted Stories</h3>
          <div className="story-grid">
            {submittedStories.map((storyItem) => (
              <div key={storyItem.id} className="story-card-modern">
                <div className="story-card-inner">
                  <span className="story-tag">{storyItem.subject || "No Subject"}</span>
                  <h3 className="story-heading">{storyItem.name}</h3>
                  <p className="story-date">{storyItem.date}</p>
                  <p className="story-text">{storyItem.story}</p>
                  <button 
                    onClick={() => deleteStory(storyItem.id)} 
                    className="story-delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
