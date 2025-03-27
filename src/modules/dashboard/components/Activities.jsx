import React from "react";
import "../css-files/anxiety.css"; // Assuming the CSS file remains the same for styling
import anx1 from "../../../assets/images/src/act-1.png";
import anx2 from "../../../assets/images/src/ms-2.png";
import anx3 from "../../../assets/images/src/act-3.png";
import anx4 from "../../../assets/images/src/act-4.png";
import anx5 from "../../../assets/images/src/act-5.png";
import anx6 from "../../../assets/images/src/act-6.png";
import anx7 from "../../../assets/images/src/act-7.png";
import anx8 from "../../../assets/images/src/act-8.png";
import anx9 from "../../../assets/images/src/act-9.png";

const ActivityResults = () => {
  // Data array for reusable components
  const articles = [
    {
      id: 1,
      imgSrc: anx1,
      date: "June 14, 2024",
      title: " Occupational therapy is known to be one of the most effective treatment options for autism spectrum disorder (ASD). Autism is a neurodevelopmental condition that disrupts social communication skills, thus resulting in repetitive and restrictive behaviors. Research shows that the prevalence of autism has increased in the US approximately 1 in 36 children are diagnosed with autism.",
      para:"Autism can be diagnosed in the stages of childhood (typically after five). Occupational therapy is one of the effective treatment modes for autism because it is an evidence-based approach and helps children live their lives more independently and successfully."
    },
    {
      id: 2,
      imgSrc: anx2,
      date: "November 5, 2023.",
      title: "Life is a complex web of mystery and intrigue. Once you find your footing, there comes a vengeful tide that sweeps you off your feet, leaving you untethered. This wave, we call, grief. Life, love, and loss – are the three elements that are never apart from each other. Where there is life, there is love; and where there is love, there is loss. Loss is followed naturally by grief – whether it’s the loss of a loved one, an unexpected life change, or something else.",
      para:"So, taking wisdom from my cousin, I have compiled some healing grief activities that you can engage in or participate in to cope with your loss and find a way in life. These grief activities aren’t just for adults, but they are for kids and teens experiencing loss and grief."
    },
    {
      id: 3,
      imgSrc: anx3,
      date: "March 31, 2023",
      title: "After a stressful day, I lose the energy to do anything, much less something nice for others. Lately, though, I’ve begun to realize that not doing any kind of self-soothing after a stressful day was taking a toll on me that I couldn’t predict. While it didn’t immediately occur to me, as days went by, my sleep schedule became a mess, I often overreacted, and my emotions were in disarray.",
      para:"People often say, “Think positive…” “Believe everything is OK…” and whatnot. But it is like that; easier said than done! Creating a positive mindset doesn’t come suddenly and it takes a lot of practice and patience to develop positive thinking."
    },
    {
      id: 4,
      imgSrc: anx4,
      date: "December 13, 2022",
      title: "Living with social anxiety can be tough especially when the holiday season is around the corner. Social anxiety triggers the fear of rejection, criticism, dizziness, trembling, and whatnot! But, do you know that the levels, signs, symptoms, or triggers related to your social anxiety can be controlled or managed before they start impacting your day-to-day life? There are various self-help strategies approved by therapists that can help learn to live with social anxiety in a healthy manner.",
      para:"Such self-help strategies are also referred to as social anxiety activities. These activities are effective because they are combined with the principles of cognitive-behavioral therapy (CBT)."
    },
    // {
    //   id: 5,
    //   imgSrc: anx5,
    //   date: "April 2, 2022",
    //   title: "Engaging In Artistic Activities Helps Te...",
    // },
    // {
    //   id: 6,
    //   imgSrc: anx6,
    //   date: "March 24, 2022",
    //   title: "10 Best Daily Routine Activities For Dep...",
    // },
    // {
    //   id: 7,
    //   imgSrc: anx7,
    //   date: "February 6, 2022",
    //   title: "The Best Therapeutic Group Activities Fo....",
    // },
    // {
    //   id: 8,
    //   imgSrc: anx8,
    //   date: "December 24, 2021",
    //   title: "Alone At Christmas? Lift Your Holiday Sp..",
    // },
    // {
    //   id: 9,
    //   imgSrc: anx9,
    //   date: "August 28, 2021",
    //   title: "Therapeutic Benefits of Adventure Activi...",
    // },
  ];

  return (
    <div>
      <h1 className="A1">Search Results For: "Activity"</h1>
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

export default ActivityResults;
