import React, { useState, useRef } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import "../relationshipQuiz.css";
import talkspaceIcon from "../../../assets/icons/talkspace.svg";
import therapyIcon from "../../../assets/icons/onlinetherepy.png";

const QuizTemplate = ({ 
  questions, 
  title, 
  introduction, 
  scrollOffset = 1200,
  resultMessages
}) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [errors, setErrors] = useState(Array(questions.length).fill(false));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const questionRefs = useRef([]);

  const handleSelect = (index, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedOption;
    setAnswers(newAnswers);

    const newErrors = [...errors];
    newErrors[index] = false;
    setErrors(newErrors);
  };

  const calculateScore = () => {
    let hasError = false;
    let firstUnansweredIndex = null;

    const newErrors = answers.map((answer, index) => {
      if (answer === null) {
        if (firstUnansweredIndex === null) firstUnansweredIndex = index;
        hasError = true;
        return true;
      }
      return false;
    });

    setErrors(newErrors);

    if (hasError) {
      setScore(null);
      if (firstUnansweredIndex !== null && questionRefs.current[firstUnansweredIndex]) {
        questionRefs.current[firstUnansweredIndex].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
      return;
    }

    const totalScore = answers.reduce((acc, answer) => acc + answer.score, 0);
    setScore(totalScore);
    setIsSubmitted(true);
    window.scroll({ top: scrollOffset, behavior: "smooth" });
  };

  const handleQuiz = () => {
    setAnswers(Array(questions.length).fill(null));
    setErrors(Array(questions.length).fill(false));
    setScore(null);
    setIsSubmitted(false);
    window.scrollTo({ top: scrollOffset, behavior: "smooth" });
  };

  const getResultMessage = () => {
    if (score === null) return "";

    const style = {
      color: "#000",
      fontWeight: "italic",
      fontSize: "17px",
      padding: "0px 50px",
      textAlign: "left",
      lineHeight: "32px",
    };

    // Determine which message to show based on score
    let message;
    if (score >= 25) {
      message = resultMessages.high;
    } else if (score >= 12) {
      message = resultMessages.medium;
    } else {
      message = resultMessages.low;
    }

    return (
      <div>
        <br />
        <p style={style}>{message}</p>
        <button className="relationship-retake-btn" onClick={handleQuiz}>
          Retake Quiz
        </button>
        <p style={{ padding: "2px 50px" }}>
          Disclaimer: This quiz is not medically accurate and does not define
          your personality. For an in-depth assessment, you can visit or contact
          a mental health professional.
        </p>

        <div className="cards">
          <div className="cardOne">
            <img
              src={talkspaceIcon}
              alt=""
              className="cardOneImg"
              style={{ marginLeft: "3.5rem", padding: "1rem" }}
            />
            <br />
            <li>
              Easy to use platform which provides various methods of
              communication like messaging, audio messaging, phone calls, and
              live video conferencing.
            </li>
            <br />
            <li>
              Provides in-app services which are easily accessible with
              pocket-friendly subscription plans.
            </li>
            <button className="cardBtn">
              <a href="https://www.talkspace.com/" target="blank">
                Get Started
              </a>
            </button>
          </div>
          <div className="cardTwo">
            <img
              src={therapyIcon}
              alt=""
              className="cardTwoImg"
              style={{ marginLeft: "1.5rem", padding: "1rem" }}
            />
            <br />
            <li>
              Offers therapy based on the principles of CBT and subscription
              plans provides access to the toolbox.
            </li>
            <br />
            <li>
              Provides discount on the first month of subscription and
              pocket-friendly subscription prices are available.
            </li>
            <br />
            <button className="cardBtn">
              <a href="https://www.online-therapy.com/" target="blank">
                Get Started
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#FDF5E0" }}>
      <Header />
      <div className="main-container" style={{ marginTop: 120 }}>
        <h1 className="relationship-quiz-title">{title}</h1>
        <div className="relationship-p">{introduction}</div>
        <div className="relationship-quiz-container">
          {isSubmitted ? (
            <>
              {score !== null && (
                <p className="relationship-result">{getResultMessage()}</p>
              )}
            </>
          ) : (
            <>
              <div className="relationship-questions-container">
                {questions.map((q, index) => (
                  <div
                    key={index}
                    ref={(el) => (questionRefs.current[index] = el)}
                    className="relationship-question-box"
                  >
                    <p className="relationship-question">
                      {index + 1}. {q.question}
                    </p>
                    <div className="relationship-options-container">
                      {q.options.map((option, i) => (
                        <div key={i} className="relationship-option-wrapper">
                          <label
                            className={`relationship-option ${
                              answers[index] === option ? "selected" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={option.text}
                              onChange={() => handleSelect(index, option)}
                              checked={answers[index] === option}
                            />
                            {option.text}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors[index] && (
                      <p className="error-message" style={{ color: "red" }}>
                        Please answer this question.
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <button className="relationship-submit-btn" onClick={calculateScore}>
                Get Results
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizTemplate; 