import React from 'react'
import cardImg from '../../../assets/images/indie.png';
import cardImg2 from '../../../assets/images/teen_v2.png';
import cardImg3 from '../../../assets/images/Couple.png';
import cardImg4 from '../../../assets/images/student_v2.png';
import cardImg5 from '../../../assets/images/corporate.png';
import '../css-files/area_of_expertise.css';
function Areaofexpertise() {
  return (
    <div>
       <section className="section-four">
        <div className="text-content">
          <h2 className='areaofexpertise_h2'>Would you like to explore Therapy?</h2>
          <p className="p-1">
            Online Therapy is a great way for you to de-stress or get things off
            your chest with no judgement.
          </p>
        </div>
        <div className="text-contentp">
          <p className="p-2">We offer Therapy for everyone -</p>
        </div>
        <div className="card-content">
          <div className="img">
            <img className="card-img1" src={cardImg} alt="indie" />
            <img className="card-img1" src={cardImg2} alt="indie" />
            <img className="card-img1" src={cardImg3} alt="indie" />
            <img className="card-img1" src={cardImg4} alt="indie" />
            <img className="card-img1" src={cardImg5} alt="indie" />
          </div>
          <div className="img-p">
            <p>Individual Therapy</p>
            <p>Teen Therapy</p>
            <p>Couple's Therapy</p>
            <p>Student Therapy</p>
            <p>Corporate Services</p>
          </div>
        </div>
      </section>
      <section class="section-five">
        <h2 class="five-h2">Area of Expertise</h2>
        <div class="expertise-list">
          <div class="expertise-item">
            <p class="expertise-title">Trauma</p>
          </div>
          <div class="expertise-item">
            <p class="expertise-title">Autism</p>
          </div>
          <div class="expertise-item">
            <p class="expertise-title">Abuse</p>
          </div>
          <div class="expertise-item">
            <p class="expertise-title">Anxiety</p>
          </div>
          <div class="expertise-item">
            <p class="expertise-title">LGBTQIA Concerns</p>
          </div>
          <div class="expertise-item">
            <p class="expertise-title">Loneliness</p>
          </div>
          <div class="expertise-item">
            <p class="expertise-title">Depression</p>
          </div>
          <div class="expertise-item">
            <p class="expertise-title">Grief & Loss</p>
          </div>
          <div class="expertise-item">
            <p class="expertise-title">Phobias</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Areaofexpertise
