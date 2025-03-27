import React from "react";
import "../css-files/anxiety.css"; // Assuming the CSS file remains the same for styling
import anx1 from "../../../assets/images/src/act-1.png";
import anx2 from "../../../assets/images/src/anx2.png";
import anx3 from "../../../assets/images/src/anx3.png";
import anx4 from "../../../assets/images/src/anx4.png";
import anx5 from "../../../assets/images/src/anx5.png";
import anx6 from "../../../assets/images/src/anx6.png";
import anx7 from "../../../assets/images/src/anx7.png";
import anx8 from "../../../assets/images/src/anx8.png";
import anx9 from "../../../assets/images/src/anx-9.png";

const AnxietyResults = () => {
  // Data array for reusable components
  const articles = [
    {
      id: 1,
      imgSrc: anx1,
      date: "In older times, talking about mental health was stigmatized. People used to fear talking about it. However, with changing times, things are different. These days, people openly discuss and talk about mental health issues like social anxiety, general anxiety, OCD, ADHD, and others. Yet, everyone commits one common mistake.",
      title: "Social anxiety is the fear of facing people. It can be meeting strangers or people you’re familiar with. This is the most common form of anxiety, and most people struggle with it, but when it starts to impact your life, you need to pay attention. Say you are invited to a party, and the thought of going makes your body tremble or your palms sweaty.",
    },
    {
      id: 2,
      imgSrc: anx2,
      date: "Is your child afraid of unfamiliar people? If so, they are not alone; many children experience this. It is natural for young children to be scared of strangers. It is an important milestone in their growth as it helps the child learn to trust their instincts and their surroundings.",
      title: "However, if you find that this stresses your child, there are ways in which you can help them cope with stranger anxiety and develop trust while they rely on their instinct.",
    },
    {
      id: 3,
      imgSrc: anx3,
      date: "Balanced hormone levels in our body provide a balanced well-being. But, do you know that your hormone levels can also have various effects on social anxiety? Imbalanced hormone levels in the body influence neurotransmitters which results in problems such as social anxiety.",
      title: "People who are struggling with social anxiety disorder (SAD) may be aware of their levels of certain hormones and their impacts on social anxiety. In this blog, we will explore the link between hormones and social anxiety. Let’s get started!",
    },
    {
      id: 4,
      imgSrc: anx4,
      date: "Everyone gets nervous and feels anxious at some point in their life. This is why people often confuse the two terms and use them interchangeably. If you, too, have been using them without knowing what they are and how they differ, this post is for you. Here, we talk about nervousness, its signs, treatment, and how it differs from anxiety. ",
      title: "Nervousness is a mix of anxiety, dread, and excitement. It makes your palms sweaty, increases your heart rate, and causes butterflies in your stomach as there is apprehension or fear about the first date, job interview, etc.",
    },
    // {
    //   id: 5,
    //   imgSrc: anx5,
    //   date: "September 30, 2024",
    //   title: "How to Deal with Layoff Anxiety...",
    // },
    // {
    //   id: 6,
    //   imgSrc: anx6,
    //   date: "September 28, 2024",
    //   title: "Daith Piercing For Anxiety: All You Need...",
    // },
    // {
    //   id: 7,
    //   imgSrc: anx7,
    //   date: "September 19, 2024",
    //   title: "Noise Sensitivity Anxiety – All Yo...",
    // },
    // {
    //   id: 8,
    //   imgSrc: anx8,
    //   date: "September 15, 2024",
    //   title: "How to Measure Anxiety With The Beck Anx...",
    // },
    // {
    //   id: 9,
    //   imgSrc: anx9,
    //   date: "July 24, 2024",
    //   title: "Is Anxiety Brain Fog Real? | What You Ne...",
    // },
  ];

  return (
    <div>
      <h1 className="A1">Search Results For: "Anxiety"</h1>
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

export default AnxietyResults;
