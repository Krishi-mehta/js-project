import React from 'react'
import { useNavigate } from 'react-router-dom';

import cardImg1 from '../../../assets/images/cart1.jpg';
import cardImg2 from '../../../assets/images/cart2.jpg';
import cardImg3 from '../../../assets/images/cart3.jpg';
import '../css-files/carts.css';
const Carts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="section-carts">
        <div className="carts">
          <h2 className='carts_h2'>Sometimes you're not ready to talk.</h2>
          <h1 className='carts_h1'>That's Okay :)</h1>
          <p className='carts_p'>Read more from our blog ~</p>
        </div>
        <div className="cards">
          <div className="cart">
            <img className='card1_img'src={cardImg1} alt="" />
            <div className="title">May 12,2020 . 3 mins read</div>
            <h2 className='card_h2'>Signs you need Therapy</h2>
            <p className='card_p'>By Taehreem Ansari</p>
              <button className='card_button' onClick={() => navigate("/learnmore1")}>Learn More</button>
          </div>
          <div className="cart">
            <img className='card1_img' src={cardImg2} alt="" />
            <div className="title">Oct 12,2020 . 4 mins read</div>
            <h2 className='card_h2'>7 healthy coping mechanisms for better mental health</h2>
            <p className='card_p'>By Shambhavi Juyal</p>
              <button className='card_button' onClick={() => navigate("/learnmore2")}>Learn More</button>
          </div>
          <div className="cart">
            <img className='card1_img' src={cardImg3} alt="" />
            <div className="title">Dec 12,2020 . 3 mins raed</div>
            <h2 className='card_h2'>Keeping a check on your emotional wellness</h2>
            <p className='card_p'>By Rahul</p>
              <button className='card_button' onClick={() => navigate("/learnmore3")}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Carts
