import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import blogImg1 from '../../assets/images/blog1.webp'
import blogImg2 from '../../assets/images/blog2.webp'
import blogImg3 from '../../assets/images/blog3.webp'
import blogImg4 from '../../assets/images/blog4.webp'
import blogImg5 from '../../assets/images/blog5.webp'
import blogImg6 from '../../assets/images/blog6.webp'
import blogImg7 from '../../assets/images/blog7.webp'

import '../blogs/blogs.css';
function Blogs() {
  return (
    <div>
        <Header/>
        <div className="grid_container_blog">
      <div className="container1">
        <div className="img_blog">
            <h2>101 Guide to a Stress-Free New Year</h2>
            <img src={blogImg1} alt="img"/>
        </div>
        <div className="content">
            <a href="">
            <p>
                Dear Readers, Kudos on reaching the final stretch of the year! You've navigated so much—it's quite an accomplishment! And you’re almost.</p>
            </a>
        </div>
    </div>
    <div className="container1">
        <div className="img_blog">
            <h2>Intentions in Motion: Navigating through Sustainable New Year Resolutions..</h2>
            <img src={blogImg2} alt="img"/>
        </div>
        <div className="content">
            <a href="">
            <p>
                It is that time of the year again when the calendar counts down to the final days of the year, you are pausing to reflect on the life...</p>
            </a>
        </div>
    </div>
    <div className="container1">
        <div className="img_blog">
            <h2>Maintaining Work-Life Balance</h2>
            <img src={blogImg3} alt="img"/>
        </div>
        <div className="content">
            <a href="">
            <p>
                We live in a world where the line between work and life is often blurred. More often than not, we find it difficult to maintain an....</p>
            </a>
        </div>
    </div>
    <div className="container1">
        <div className="img_blog">
            <h2>Family Matters: Decoding Mental Well-Being in Your Dynamics</h2>
            <img src={blogImg4} alt="img"/>
        </div>
        <div className="content">
            <a href="">
            <p>
                We are always surrounded by machines, that come in various sizes and shapes. It has a sole purpose, to make our lives easier. Did you...</p>
            </a>
        </div>
    </div>
    <div className="container1">
        <div className="img_blog">
            <h2>Navigating Festive Loneliness</h2>
            <img src={blogImg5} alt="img"/>
        </div>
        <div className="content">
            <a href="">
            <p>
                In a room buzzing with laughter and festive cheer, Tai felt an unspoken void despite the lively atmosphere. Zu, sensing their...</p>
            </a>
        </div>
    </div>
    <div className="container1">
        <div className="img_blog">
            <h2>Effective Communication Skills For Festive Harmony</h2>
            <img src={blogImg6} alt="img"/>
        </div>
        <div className="content">
            <a href="">
            <p>
                The holiday season presents a wonderful opportunity to gather with friends and family, indulge in delicious meals, and soak in the joyous..</p>
            </a>
        </div>
    </div>
    <div className="container1">
        <div className="img_blog">
            <h2>The Art of Listening</h2>
            <img src={blogImg7} alt="img"/>
        </div>
        <div className="content">
            <a href="">
            <p>
                So far we have been exploring how sharing our experiences, good or bad, makes us feel empowered. We also acknowledged the amount</p>
            </a>
        </div>
    </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Blogs
