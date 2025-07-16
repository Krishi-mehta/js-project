import React from "react";
import QuizTemplate from "./components/QuizTemplate";

const questions = [
  {
    question: "How do you feel about your emotional stability?",
    options: [
      { text: "I feel emotionally stable and balanced", score: 3 },
      { text: "I'm working on managing my emotions", score: 2 },
      { text: "I sometimes struggle with emotional control", score: 1 },
      { text: "I often feel emotionally overwhelmed", score: 0 },
    ],
  },
  {
    question: "How do you handle conflicts in relationships?",
    options: [
      { text: "I communicate openly and work towards resolution", score: 3 },
      { text: "I try to find middle ground", score: 2 },
      { text: "I sometimes avoid confrontation", score: 1 },
      { text: "I struggle to handle conflicts effectively", score: 0 },
    ],
  },
  {
    question: "Are you over your past relationships?",
    options: [
      { text: "Yes, I've processed and moved on", score: 3 },
      { text: "Mostly, but some feelings remain", score: 2 },
      { text: "I'm still working through some issues", score: 1 },
      { text: "No, I'm still affected by past relationships", score: 0 },
    ],
  },
  {
    question: "How do you feel about your self-worth?",
    options: [
      { text: "I have a strong sense of self-worth", score: 3 },
      { text: "I generally feel good about myself", score: 2 },
      { text: "My self-worth fluctuates", score: 1 },
      { text: "I struggle with self-worth issues", score: 0 },
    ],
  },
  {
    question: "Are you financially stable?",
    options: [
      { text: "Yes, I'm financially independent and stable", score: 3 },
      { text: "I'm working towards financial stability", score: 2 },
      { text: "I sometimes struggle financially", score: 1 },
      { text: "I'm not financially stable", score: 0 },
    ],
  },
  {
    question: "How do you feel about commitment?",
    options: [
      { text: "I'm ready for a committed relationship", score: 3 },
      { text: "I'm open to commitment", score: 2 },
      { text: "I'm unsure about commitment", score: 1 },
      { text: "I'm afraid of commitment", score: 0 },
    ],
  },
  {
    question: "Do you have clear life goals?",
    options: [
      { text: "Yes, I have clear goals and am working towards them", score: 3 },
      { text: "I have some goals in mind", score: 2 },
      { text: "I'm still figuring out my goals", score: 1 },
      { text: "I'm uncertain about my life direction", score: 0 },
    ],
  },
  {
    question: "How do you handle personal space in relationships?",
    options: [
      { text: "I respect boundaries and maintain healthy space", score: 3 },
      { text: "I try to balance togetherness and independence", score: 2 },
      { text: "I sometimes struggle with giving space", score: 1 },
      { text: "I find it difficult to maintain boundaries", score: 0 },
    ],
  },
];

const introduction = (
  <>
    <p className="relationship-p">
      Entering a new relationship is a big step that can add to your joy and contentment. But, at the same time, you need to have emotional maturity, self-awareness, and stability to make the new relationship work. Being ready for a relationship isn't about finding the right person, but it's also about ensuring that you're in the right place to start caring and loving another person.
      <br /><br />
      If you're wondering about your commitment to a new relationship, then Better You has a fun quiz for you that will tell you if you're ready for a relationship or not. This "Are you ready for a relationship" quiz is designed to help you become self-aware of different aspects of your life, including your emotional state, self-understanding, and overall stability.
      <br /><br />
      As you answer each question in this quiz, you learn more about yourself and your preparedness to enter and commit to a new relationship. So, if you're single and thinking about committing to a new relationship, or just curious about your emotional maturity in an already existing relationship, then you're at the right place.
      <br /><br />
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Note: Better You understands the importance of privacy. Your responses are not shared with any third-party website, so you can rest assured of your privacy.
      </p>
      <br />
      <i>Let's begin!</i>
      <p style={{ fontSize: "35px" }}>Are You Ready For a Relationship? | Fun & Free Quiz</p>
      <h4>
        <i>Important: Please answer each question honestly for the most accurate results.</i>
      </h4>
    </p>
  </>
);

const resultMessages = {
  high: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "You're Ready for a Relationship!"
      </span>
      <br /><br />
      Your responses indicate that you're in a good place to start a new relationship. You demonstrate:
      <br /><br />
      • Emotional stability and self-awareness<br />
      • Healthy boundaries and communication skills<br />
      • Financial and personal independence<br />
      • Clear life goals and direction<br />
      • Ability to handle conflicts maturely<br />
      <br />
      You understand yourself and what you want in a relationship. Keep maintaining these healthy attitudes as you move forward in your relationship journey.
    </span>
  ),
  medium: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "You're Getting There"
      </span>
      <br /><br />
      Your responses suggest that while you have some good relationship readiness qualities, there are areas you might want to work on:
      <br /><br />
      • Continue developing emotional awareness<br />
      • Work on strengthening your self-confidence<br />
      • Focus on personal growth and stability<br />
      • Practice better communication skills<br />
      • Build stronger boundaries<br />
      <br />
      Take some time to work on these areas. Remember, there's no rush - the right relationship will come when you're truly ready.
    </span>
  ),
  low: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "You May Need More Time"
      </span>
      <br /><br />
      Your responses suggest you might benefit from focusing on personal growth before entering a relationship:
      <br /><br />
      • Work on emotional stability and self-understanding<br />
      • Focus on building self-confidence and independence<br />
      • Consider professional support if needed<br />
      • Develop clearer life goals and direction<br />
      • Practice healthy communication and boundary-setting<br />
      <br />
      Remember, it's okay to take time to work on yourself. The strongest relationships are built on a foundation of self-love and personal stability.
    </span>
  )
};

const RelationshipQuiz = () => {
  return (
    <QuizTemplate
      questions={questions}
      title="Are You Ready For a Relationship? | Fun & Free Quiz"
      introduction={introduction}
      resultMessages={resultMessages}
      scrollOffset={700}
    />
  );
};

export default RelationshipQuiz;
