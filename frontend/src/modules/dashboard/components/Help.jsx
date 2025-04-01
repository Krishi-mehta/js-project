import React from 'react'
import { useNavigate } from 'react-router-dom';


import helpImg from '../../../assets/images/story-icon.png';
import '../css-files/help.css';

const Help = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="section-help">
        <div className="helps">
        <div className="help-img">
            <img src={helpImg} alt="help" />
          </div>
          <div className="help-text">
            <h2 className='help_h2'>
            We Love to Hear Your Story
              {/* <span className="span-help"> the right therapist.</span> */}
            </h2>
            <p className='help_p'>
            Motivate and uplift others through your stories. Your personal narratives can become a beacon of hope, resilience, and courage in the twilight of stormy seas and inspire them to come out stronger and braver.
            </p>
            <a href="/writeastory" onClick={() => navigate("/writeastory")} className='help-btn'>Write Your Story</a>
          </div>
          {/* <div className="help-btn"> */}
            
          {/* </div> */}
          {/* <div className="help-img">
            <img src={helpImg} alt="help" />
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default Help
