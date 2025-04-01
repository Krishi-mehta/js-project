import React from 'react'
import { useNavigate } from 'react-router-dom';

import stepImg1 from '../../../assets/icons/Are-You-Ready-For-a-Relationship-icon.png';
import stepImg2 from '../../../assets/icons/Take-The-ACES-Quiz-icon.png';
import stepImg3 from '../../../assets/icons/Loneliness-01-01.png';
import stepImg4 from '../../../assets/icons/Free-Anxiety-Test-768x353.png'

import '../css-files/steps.css';
const Steps=()=> {
  const navigate = useNavigate();
  return (
    <div>
        <section className="section-steps">
        <div className="heading">
          <h2 className='steps_h2'>Quizzes to Discover Your True Self</h2>
          <p className='steps_p'>
          Our free quiz can help you take a proactive approach to your mental health and wellness!
          </p>
          {/* <h4 className='steps_h4'>We help you find the right Therapist in 3 simple steps</h4> */}
        </div>
        <div className="steps">
          <div className="step1">
            <img className="step1_img" src={stepImg1} alt="form" />
            <h3 className='step1_h3'>Are You Ready For a Relationship? | Fun &amp; Free Quiz</h3>
            <button className='btn-for-quiz'><a href="/RelationshipQuiz">Take Quiz</a></button>
            {/* <p className='steps_p1'>Fill in a simple form to help us understand you better</p> */}
            {/* </div> */}
          </div>
          <div className="step2">
            <img className="step2_img"src={stepImg2} alt="steps" />
            <h3 className='step2_h3'>The ACE Quiz: Did You Experience Childhood Trauma?</h3>
            <button className='btn-for-quiz'><a href="/RelationshipQuiz">Take Quiz</a></button>
            {/* <p className='steps_p2'>
              Based on your answers, we will match you with up to 3 Therapists
              within 24 hours.
            </p> */}
          </div>
          <div className="step3">
            <img className="step3_img"src={stepImg3} alt="find" />
            <h3 className='step3_h3'>Am I Lonely? Take Our Loneliness Test to Find Out!</h3>
            <button className='btn-for-quiz'><a href="/RelationshipQuiz">Take Quiz</a></button>
            {/* <p className='steps_p'>
              Select your Therapist and schedule your online session at your
              convenience.
            </p> */}
          </div>
          <div className="step3">
            <img className="step3_img"src={stepImg4} alt="find" />
            <h3 className='step3_h3'>Do I Have Anxiety? Free Anxiety Test!</h3><br />
            <button className='btn-for-quiz'><a href="/RelationshipQuiz">Take Quiz</a></button>
            {/* <p className='steps_p'>
              Select your Therapist and schedule your online session at your
              convenience.
            </p> */}
          </div>
        </div>
        <div className="quiz-btn">
          <a href="" onClick={()=>navigate("/quiz")} className='a_quiz'>Take More Quizzes</a>
        </div>
      </section>
      
    </div>
  )
}

export default Steps
