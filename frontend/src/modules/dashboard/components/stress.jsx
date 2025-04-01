import React from "react";
import "../css-files/anxiety.css"; // Assuming the CSS file remains the same for styling
import anx1 from "../../../assets/images/src/ms-1.png";
import anx2 from "../../../assets/images/src/stress-2.png";
import anx3 from "../../../assets/images/src/stress-3.png";
import anx4 from "../../../assets/images/src/stress-4.png";
import anx5 from "../../../assets/images/src/stress-5.png";
import anx6 from "../../../assets/images/src/stress-6.png";
import anx7 from "../../../assets/images/src/stress-7.png";
import anx8 from "../../../assets/images/src/stress-8.png";
import anx9 from "../../../assets/images/src/stress-9.png";

const StressResults = () => {
  // Data array for reusable components
  const articles = [
    {
      id: 1,
      imgSrc: anx1,
      date: "January 21, 2025",
      title: "Achieving all our daily goals by the end of the workday has become challenging since we moved to work from home during the pandemic. No wonder burnout is becoming more and more familiar with emails, Zoom meetings, and conference calls coming even after work hours.",
      para:"Finding the right balance can be challenging. And while digital communication is designed to help get our work done, it’s creating more stress and anxiety in the workplace, especially for those who work in different time zones."
    },
    {
      id: 2,
      imgSrc: anx2,
      date: "January 10, 2025 .",
      title: "Can stress cause vertigo? Let me keep it simple and straight… yes… right after knowing that answer, you might want to read the relationship between stress and vertigo so that you can work on overcoming stress-induced vertigo effectively.",
      para:"If you or your loved one are struggling with chronic stress, you must understand the stress and its symptoms to help in the right way."
    },
    {
      id: 3,
      imgSrc: anx3,
      date: "January 8, 2025",
      title: "FWhile a source of comfort and love, family can sometimes also be the root of stress. Whether navigating parenting challenges, financial strain, or caring for elderly relatives, family stress can affect your mental and physical well-being. Our loved one causes us stress and can leave us overwhelmed and out of balance.",
      para:"When stress is present more in the family, it impacts one’s personal, professional, and social life. Hence, in this post, we’ll understand what family stress is, its causes, and how it affects you. Most importantly, we will discuss practical strategies to manage it. By the end, you’ll be equipped to face family stress with empathy, understanding, and resilience."
    },
    {
      id: 4,
      imgSrc: anx4,
      date: "January 2, 2025 x",
      title: "How does it feel to be a parent, watching your kid always sulking, sad, and unhappy? How do you react to your whining child or angry child without any?",
      para:"If you get angry equally, this is not the right thing to do! If your child is always moody, causes might be hiding inside them. It also might happen that your child might be experiencing stress. Well, yes, children can also experience stress. And don’t worry; your child is not alone, and stress in childhood is completely manageable or controllable."
    },
    // {
    //   id: 5,
    //   imgSrc: anx5,
    //   date: "December 30, 2024",
    //   title: "Ways To Avoid Emotional Stress During Pr...",
    // },
    // {
    //   id: 6,
    //   imgSrc: anx6,
    //   date: "December 16, 2024",
    //   title: "Let Go Of Your Holiday Stress With These...",
    // },
    // {
    //   id: 7,
    //   imgSrc: anx7,
    //   date: "November 14, 2024",
    //   title: "10 Stress Busting Drinks To Make You Rel....",
    // },
    // {
    //   id: 8,
    //   imgSrc: anx8,
    //   date: "September 22, 2024",
    //   title: "Shaking Meditation – Is it a Real ...",
    // },
    // {
    //   id: 9,
    //   imgSrc: anx9,
    //   date: "September 12, 2024",
    //   title: "What Is Oxidative Stress & How Does...",
    // },
  ];

  return (
    <div>
      <h1 className="A1">Search Results For: "Stress"</h1>
      <div className="grid-container">
        {articles.map((article) => (
          <div className="grid-item" key={article.id}>
            <img src={article.imgSrc} alt="Article" />
            <p className="anxiety">{article.date}</p>
            <p className="anx-title">{article.title}</p>
            <p className="anx-btn">{article.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StressResults;
