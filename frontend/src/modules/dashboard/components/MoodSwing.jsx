import React from "react";
import "../css-files/anxiety.css"; 
import ms1 from "../../..//assets/images/src/ms-1.png";
import ms2 from "../../../assets/images/src/ms-2.png";
import ms3 from "../../../assets/images/src/ms-3.png";
import ms4 from "../../../assets/images/src/ms-4.png";
import ms5 from "../../../assets/images/src/ms-5.png";
import ms6 from "../../../assets/images/src/ms-6.png";
import ms7 from "../../../assets/images/src/ms-7.png";
import ms8 from "../../../assets/images/src/ms-8.png";
import ms9 from "../../../assets/images/src/ms-9.png";

const MoodSwing = () => {
  const articles = [
    {
      imgSrc: ms1,
      date: "December 3, 2024",
      title: "Mood swings are common for people with ADHD, and knowing how to manage them makes things easy. In this post, we will explain different ways in which ADHD mood swings can be managed.",
      para: "Everyone struggles with mood changes, so blaming people with attention deficit hyperactivity disorder or saying they are the ones with mood swings will not be right. Certainly, these people experience more mood fluctuations and may get uncontrollable, but there are ways to manage these swings. Here, we explain these ideas in detail."
    },
    {
      imgSrc: ms2,
      date: "November 29, 2024",
      title: "Do you often find yourself on an emotional roller coaster, where at one point you might find yourself being all happy go lucky at one moment and experiencing oh my life phase on the next! If yes, then you may be experiencing frequent mood swings.",
      para: "The name itself explains what it might feel like- Swinging between your moods or rapidly fluctuating between different emotions! From being happy to angry or from being fearful to sad, it is all about experiencing the ups and downs of emotions."
    },
    {
      imgSrc: ms3,
      date: "November 21, 2024",
      title: "If you are a woman or you have a female figure in close contact you might see them being on an emotional roller coaster ride once every month.",
      para:"Well, that is normal among many women as it is a result of Premenstrual Syndrome (PMS). A word commonly and casually used by many. But, what exactly is PMS? Is it just the mood swings before the menstruation cycle? Is it bad for my mental health? What can I do to cope with PMSing? These all questions remain unanswered. But, not anymore. It is time to understand the link between PMS and Mood Swings because of your emotional and mental health matters."
    },
    {
      imgSrc: ms4,
      date: "November 6, 2024",
      title: "Menopause can act as a huge change for women as their menstrual cycle stops and the estrogen levels go down. A woman is now not able to bear a child or get pregnant and the fact might not act as a sweet truth for many. For some of them, menopause is a physically painful process at one end whereas concerns for body image, unattractiveness, low confidence, etc. becomes a roller coaster for mental health. It is indeed a time of change and mood swings during menopause tag along with many.",
      para:"The persistent feeling of sadness, loss of interest in any activity and overburdening of emotions may be experienced during menopause because of a major shift in hormonal cycle.  A quick drop in estrogen levels may generate newest symptoms of depression like hot flashes or sudden fever, sleep disturbances and mood swings."
    },
    {
      imgSrc: ms5,
      date: "September 30, 2024",
      title: "Oh, that first cup of coffee – or tea – in the morning, when everything is slow, is so relaxing, isn’t it? As you sit there and sip your daily dose of caffeine, there’s a renewed sense of wakefulness that accompanies you throughout the day. Caffeine has become a daily companion to most of us. It not only helps us jolt awake and keep drowsiness away, but it’s also something that keeps us on our toes all day long – to some, quite literally. ",
      para:"To understand the link between bipolar and caffeine, we need to first understand what bipolar disorder is. Bipolar disorder is a mental health disorder that is characterized by extreme mood swings – often described as mania and depression. The link between caffeine and bipolar might not be entirely understood, but it is undeniably there. "
    },
    {
      imgSrc: ms6,
      date: "September 28, 2024",
      title: "The challenging situations in life can sometimes feel like a whirlwind of emotions leaving us feel uneasy, hopeless, and restless. To handle such situations and to attain peace we start looking for ways that help find the way to solace and this quest makes us return to the roots and adopt ancient healing practices like Tibetan singing bowls.",
      para:"These ancient instruments produce soothing tones that make a promise of relaxation and healing potentially impacting mood and overall well-being. The resonating tones and the gentle vibrations they make have been attracting people for centuries. Yet some people question their abilities and seek answers for how these singing bowls can uplift spirits and enhance mental wellness."
    },
    // {
    //   imgSrc: ms7,
    //   date: "September 19, 2024",
    //   title: "Bipolar Depression: An Intense Period Of.....",
    // },
    // {
    //   imgSrc: ms8,
    //   date: "September 15, 2024",
    //   title: "Euphoric Mood: A Positive Mood To Boost ...",
    // },
    // {
    //   imgSrc: ms9,
    //   date: "July 24, 2024",
    //   title: "Exploring The Different Types Of Mood Di...",
    // },
  ];

  return (
    <div>
      <h1 className="A1">Search Results For: "MoodSwings"</h1>
      <div className="grid-container">
        {articles.map((article) => (
          <div className="grid-item" key={article.id}>
            <img src={article.imgSrc} alt="Article" />
            <p className="anxiety">{article.date}</p>
            <p className="anx-title">{article.title}</p>
            <p className="anx-btn">{article.para}</p>
            {/* <h3 className="anx-btn">Read More</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSwing;
