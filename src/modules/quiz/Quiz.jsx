import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import loveLanguageQuiz from "../../assets/icons/Love-Language-Quiz-Icon-01.png";
import lonelinessQuiz from "../../assets/icons/Loneliness-01-01.png";
import AceQuiz from "../../assets/icons/Take-The-ACES-Quiz-icon.png";
import RelationshipQuiz from "../../assets/icons/Are-You-Ready-For-a-Relationship-icon.png";
import AnxietyQuiz from "../../assets/icons/Free-Anxiety-Test-768x353.png"
import MentalQuiz from "../../assets/icons/What-is-your-mental-age-1-768x353.jpg"
import SleepQuiz from "../../assets/icons/How-Well-Do-You-Sleep-1-768x353.png"
import StrongQuiz from "../../assets/icons/Am-I-Mentally-Strong-768x353.png"
import EmotionalQuiz from "../../assets/icons/What-Is-Your-Emotional-Type-768x353.png"

import "./quiz.css";

const quizzes = [
  {
    title: "Are You Ready For a Relationship? | Fun & Free Quiz",
    image: RelationshipQuiz,
    link: "/relationshipquiz"
  },
  {
    title: "The ACE Quiz: Did You Experience Childhood Trauma?",
    image: AceQuiz,
    link: "/childhoodtraumaquiz"
  },
  {
    title: "What’s My Love Language? | 5 Love Languages Quiz",
    image: loveLanguageQuiz,
    link: "/lovelanguagequiz"
  },
  {
    title: "Am I Lonely? Take Our Loneliness Test to Find Out!",
    image: lonelinessQuiz,
    link: "/lonelinessquiz"
  },
  {
    title: "Do I Have Anxiety? Free Anxiety Test!",
    image: AnxietyQuiz,
    link: "/anxietyquizquiz"
  },
  {
    title: "What Is My Mental Age?",
    image: MentalQuiz,
    link: "/mentalagequiz"
  },
  {
    title: "How Well Do You Sleep? Sleep Quiz",
    image: SleepQuiz,
    link: "/sleepquiz"
  },
  {
    title: "Am I Mentally Strong? Take this Quiz and Find Out",
    image: StrongQuiz,
    link: "/mentallystrongquiz"
  },
  {
    title: "What Is Your Emotional Type? Find Out!",
    image: EmotionalQuiz,
    link: "/emotionaltypequiz"
  },
];

const QuizPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
    <div className="quiz-container">
      <h1 className="quiz-title">Better You Quizzes</h1>
      <p className="quiz-description">Our free Quizzes can help you take a proactive approach to your mental health and wellness!</p>
      <div className="quiz-grid">
        {quizzes.map((quiz, index) => (
          <div key={index} className="quiz-card">
            <img src={quiz.image} alt={quiz.title} className="quiz-image" />
            <h3 className="quiz-heading">{quiz.title}</h3>
            <a href={quiz.link} target="_blank" rel="noreferrer"></a>
            <button onClick = {()=> navigate(quiz.link)}className="quiz-button">Take Quiz</button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default QuizPage;
