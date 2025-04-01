import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import beachImg from '../../assets/images/beach.jpg';
// import happyImg from '../../assets/images/happy.jpg';
// import gbImg from '../../assets/images/g and b.jpeg';

import '../aboutus/aboutus.css';

const Aboutus = () => {
    return (
      <div className="aboutus-background"
      style={{
        backgroundImage: `url(${beachImg})`, // Use the imported image dynamically
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', // Ensure it covers the full viewport
      }}
      >
        <Header />
        <div className="aboutus-container">
        <h1 className='aboutus-title'>About Us</h1>

        <div className="aboutus-mission">
            <h2>Our Mission</h2>
            <p>At Better You, we believe in creating a community where mental and emotional well-being is prioritized. Our team meticulously curates quality content with information, ensuring it reflects the latest research in the mental health field.
            </p>
           <p> Our content is crafted by skilled writers and is rigorously fact-checked and reviewed by experienced editors. This multistep process guarantees accuracy and encourages us to provide the best possible answers to your most pressing mental health questions.</p>
                
            <p>We understand the importance of staying current. That's why the Better You team is dedicated to providing comprehensive and unbiased guidance you can trust, and we carefully update all our content whenever new information becomes available. This process ensures you have access to the most up-to-date and reliable information possible.</p>
                
            <p>Better You is more than just a website. We aim to build a community where you can find peace and feel supported. We encourage open conversations and sharing personal stories, creating a sense of understanding and belonging. Whether you're seeking information or a safe space to just be, Better You is here to help.</p>
        </div>

        <div className="aboutus-who-we-are">
            <h2>Who We Are</h2>
                <p>Better You is the is a free mental health helpline and compassionate guide to mental health and well-being. We provide confidential and supportive online guidance offering a safe space to explore emotions. who are available to help navigate challenges and find a path towards healing and growth.</p>

               <p> Better You aims to change the way people view mental health and bridge the treatment gap by providing support and resources. We believe that mental health is a basic human right and thateveryone deserves access to affordable mental health care without judgment.</p>
        </div>

        <div className="aboutus-offerings">
            <h2>What We Offer</h2>
           <p> Better You offer accessible, anonymous, and 24/7 support.Our main motive is to make people normal as they were. Regarding mental health it is the one to be considered on the top priority as it directly connects our heart and our brain
            </p>
             <p>Better You will help you to gain your enthusiasm back from where you left.Here we beleive trust is important to express your feelings and Better you chats are highly encrypted so there is no fear of getting your data leaked. Make sure to contact us if you have any queries.</p>
        </div>

        <div className="aboutus-why-choose-us">
            <h2>Why Choose Us?</h2>
            <p>
                Each year, approximately 11,000 new cases of schizophrenia are added to the mental disorder burden in Gujarat.uicide remains a leading cause of death among individuals aged 15-29 years, highlighting the severity of mental health issues in younger populations.Studies indicate that one out of every two people in the world will develop a mental health disorder at some point in their lives.
            </p>
                <p>
                    As of 2025, it is estimated that about 10.7% of the global population suffers from some form of mental illness. hence, We are committed to providing you and your loved ones with access to quality mental health services. Better You helps you to understand your true self and to get away from your anxiety and depression and to see the world with more and more love and to get your enthausiasm back like before and to identify your inner child.
                </p>
        </div>
    </div>
        <Footer />
      </div>
    )
  }
  
  export default Aboutus;