import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../faqs/faq.css";

function Faq() {
  const [answersVisibility, setAnswersVisibility] = useState(
    Array(10).fill(false)
  );

  const toggleAnswer = (id) => {
    setAnswersVisibility((prevState) => {
      const updatedVisibility = [...prevState];
      updatedVisibility[id - 1] = !updatedVisibility[id - 1];
      return updatedVisibility;
    });
  };

  return (
    <div>
      <Header />
      <section className="FAQ">
        <div className="faq_h1">FREQUENTLY ASKED QUESTIONS</div>
        <div className="container-66">
          <div className="faq-item">
            <div className="question" onClick={() => toggleAnswer(1)}>
            What is mental health?<span className="span_button">+</span>
            </div>
            <div
              className="answer"
              style={{ display: answersVisibility[0] ? "block" : "none" }}
              id="answer1"
            >
              Mental health refers to our emotional, psychological, and social well-being. It affects how we think, feel, and behave in daily life.
            </div>
          </div>

          <div className="faq-item">
            <div className="question" onClick={() => toggleAnswer(2)}>
            Why is mental health important?<span className="span_button">+</span>
            </div>
            <div
              className="answer"
              style={{ display: answersVisibility[1] ? "block" : "none" }}
              id="answer2"
            >
              Good mental health helps us handle stress, build relationships, and make decisions effectively. It is just as important as physical health.
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={() => toggleAnswer(3)}>
            How do I know if I need help with my mental health?<span className="span_button">+</span>
            </div>
            <div
              className="answer"
              style={{ display: answersVisibility[2] ? "block" : "none" }}
              id="answer2"
            >
              If you're experiencing persistent sadness, anxiety, mood swings, or difficulty coping with daily life, it may be time to seek professional support.
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={() => toggleAnswer(4)}>
            What are the signs of depression?<span className="span_button">+</span>
            </div>
            <div
              className="answer"
              style={{ display: answersVisibility[3] ? "block" : "none" }}
              id="answer2"
            >
              Symptoms include persistent sadness, loss of interest in activities, fatigue, difficulty concentrating, and changes in sleep or appetite.
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={() => toggleAnswer(5)}>
            What causes anxiety?
              <span className="span_button">+</span>
            </div>
            <div
              className="answer"
              style={{ display: answersVisibility[4] ? "block" : "none" }}
              id="answer2"
            >
              Anxiety can be triggered by genetics, brain chemistry, stressful life events, or medical conditions.
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={() => toggleAnswer(6)}>
            How can I manage stress effectively?<span className="span_button">+</span>
            </div>
            <div
              className="answer"
              style={{ display: answersVisibility[5] ? "block" : "none" }}
              id="answer2"
            >
              Techniques like deep breathing, mindfulness, exercise, and maintaining a healthy lifestyle can help manage stress.
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={() => toggleAnswer(7)}>
            What are some self-care tips for mental well-being?<span className="span_button">+</span>
            </div>
            <div
              className="answer"
              style={{ display: answersVisibility[6] ? "block" : "none" }}
              id="answer2"
            ><li>Maintain a balanced diet and exercise regularly</li>
            <li>Get enough sleep</li>
            <li>Engage in hobbies and social activities</li>
            <li>Practice relaxation techniques like meditation</li>
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={() => toggleAnswer(8)}>
            When should I see a therapist or psychologist?<span className="span_button">+</span>
            </div>
            <div
              className="answer"
              style={{ display: answersVisibility[7] ? "block" : "none" }}
              id="answer2"
            >
              If mental health symptoms interfere with daily life, relationships, or work, professional help may be necessary.
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={() => toggleAnswer(9)}>
            Is therapy confidential?<span className="span_button">+</span>
            </div>
            <div
              className="answer"
              style={{ display: answersVisibility[8] ? "block" : "none" }}
              id="answer2"
            >
              Yes, therapists are required to keep sessions confidential, with exceptions in cases of harm to oneself or others.
            </div>
          </div>
          <div className="faq-item">
            <div className="question" onClick={() => toggleAnswer(10)}>
            Is mental illness a sign of weakness?
              <span className="span_button">+</span>
            </div>
            <div
              className="answer"
              style={{ display: answersVisibility[9] ? "block" : "none" }}
              id="answer2"
            >
              No, mental health conditions are medical issues, just like physical illnesses, and seeking help is a sign of strength.
            </div>
          </div>

          {/* Other FAQ items go here */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Faq;
