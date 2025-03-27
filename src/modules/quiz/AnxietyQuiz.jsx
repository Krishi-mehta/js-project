import React from "react";
import QuizTemplate from "./components/QuizTemplate";

const questions = [
  {
    question:
      "How long have you been disinterested in activities and events you’ve previously enjoyed?",
    options: [
      { text: "Not at all. I love my hobbies!", score: 3 },
      { text: "Somewhat. I still take time for my hobbies", score: 1 },
      { text: "More often than not", score: 0 },
      { text: "I can’t find it in me to continue my hobbies", score: 2 },
    ],
  },
  {
    question:
      "In the past month, how often have you felt down, depressed, or hopeless?",
    options: [
      { text: "Not that often", score: 3 },
      { text: "I have sometimes felt down but not for long", score: 2 },
      { text: "More often than not", score: 1 },
      { text: "I’ve felt down and depressed almost every day ", score: 0 },
    ],
  },
  {
    question:
      "How long have you had trouble with falling asleep, staying asleep, or sleeping too much in the past month?",
    options: [
      { text: "No trouble at all. I sleep like a baby", score: 3 },
      {
        text: "I sometimes find it hard to sleep",
        score: 2,
      },
      {
        text: "I’ve had trouble sleeping more days than usual",
        score: 1,
      },
      { text: "All the time. I can’t sleep at all some days", score: 0 },
    ],
  },
  {
    question:
      "How often do you feel that you’re a disappointment or a failure to your family and friends?",
    options: [
      { text: "I feel like I make my loved ones proud", score: 3 },
      { text: "Sometimes, I doubt my worth", score: 2 },
      { text: "I doubt myself more than I would like these days", score: 1 },
      { text: "I feel like a complete failure these days", score: 0 },
    ],
  },
  {
    question:
      "How often do you find it hard to concentrate on simple tasks such as reading the newspaper, or watching the TV?",
    options: [
      { text: "Not that often. I can focus on my tasks well", score: 3 },
      {
        text: "Sometimes, I can’t focus for long",
        score: 2,
      },
      {
        text: "I lose focus most of the time",
        score: 1,
      },
      {
        text: "I can’t focus on my own train of thought let alone my tasks",
        score: 0,
      },
    ],
  },
  {
    question:
      "How often do you worry about things such as your daily errands, relationships, careers, finances, and more?",
    options: [
      {
        text: "Not that often. I worry but it doesn’t stick for long",
        score: 3,
      },
      { text: "I worry about things from time to time", score: 2 },
      {
        text: "I find myself losing my mind to my worries most of the time",
        score: 1,
      },
      {
        text: "I worry all the time. It feels like I can’t stop worrying these days",
        score: 0,
      },
    ],
  },
  {
    question:
      "How long have you been unable to interact with people in a social setting? It could include talking on the phone or in person.",
    options: [
      { text: " I love talking to and interacting with others!", score: 3 },
      {
        text: "It’s been some time since I felt uncomfortable in a social setting",
        score: 2,
      },
      {
        text: "I have felt uncomfortable socially for some time now",
        score: 1,
      },
      {
        text: "I haven’t been able to interact with others in a long while",
        score: 0,
      },
    ],
  },
  {
    question:
      "Do you avoid social situations just because you feel like you would be rejected or judged for being yourself?",
    options: [
      { text: "No, I love receiving feedback on my thoughts", score: 3 },
      { text: "Not all the time", score: 2 },
      {
        text: "I avoid social functions because I feel uncomfortable",
        score: 1,
      },
      {
        text: "Yes, I always avoid speaking up or showing up to social events because I fear I’ll be rejected for being myself",
        score: 0,
      },
    ],
  },
  {
    question:
      "How often do you have symptoms such as a racing heart rate, intense fear, dizziness, nausea, or knot in the stomach?",
    options: [
      {
        text: "Not that often. I feel nervous, but that’s normal, right?",
        score: 3,
      },
      {
        text: "I experience these symptoms only when I feel overwhelmed",
        score: 2,
      },
      {
        text: "I experience these symptoms most of the time, even without cause",
        score: 1,
      },
      { text: "I experience these symptoms all the time", score: 0 },
    ],
  },
  {
    question:
      "Do you fear that you’ll lose control of your abilities in the throes of the symptoms of anxiety you experience?",
    options: [
      { text: "No, I don’t lose control that easily", score: 3 },
      {
        text: "I fear I’ll lose control sometimes, but it’s not a persistent fear",
        score: 2,
      },
      { text: "I fear losing control more days than usual", score: 1 },
      { text: "I fear losing control over myself all the time", score: 0 },
    ],
  },
];

const introduction = (
  <>
    <p className="relationship-p">
      Feeling overwhelmed, worried, and uneasy has become somewhat of a common
      occurrence in our lives, despite our best efforts. Rather than allowing us
      to take a moment of reprieve, anxiety slips in and makes us worry all over
      again. If this is something that sounds familiar to you, then you’re not
      alone. To help you reclaim your peace of mind, you need to understand the
      level of anxiety you’re living with, and to help you with that, we present
      to you yet another free quiz. <br /> <br />
      Welcome to Better You’s “Do I Have Anxiety?” free anxiety test – your first
      step towards understanding your emotional and mental well-being. <br />{" "}
      <br />
      You must have had moments of unease or nervousness, as we’d like to put
      it, before anything new you try, right? This sliver of nervousness is a
      common experience, but anxiety isn’t just nervousness – it’s a relentless
      feeling that affects your everyday life. It manifests itself in physical
      health – racing heart, trembling limbs, a knot in your stomach, etc. – and
      emotionally – persistent worries, feelings of impending doom, and a hard
      time concentrating. <br /> <br />
      If you’re experiencing any of these symptoms, then it’s important to
      address them. Here’s where our anxiety test comes in! Our free anxiety
      quiz is designed to help you assess your emotional state, and provide you
      with insights into your feelings that might indicate the presence of an
      anxiety disorder.
      <br /> <br />
      Know that self-awareness is the first step to bring a positive change in
      your life and this test is just one of those small steps that can set you
      on a path to recovery and healing.
      <br /> <br />
      <p style={{ fontSize: "22px", fontWeight: "bold" }}>
        Why Take This Anxiety Test?{" "}
      </p>
      We also work diligently to provide you with instant results upon
      completing the test. The immediate result can help guide you to your next
      steps in seeking support and moving forward on the path of recovery.{" "}
      <br />
      <br />
      Note: Anxiety never looks the same to everybody. What you experience might
      be different from what others do, so do not compare your experiences and
      symptoms with others. This is one of the reasons why a test can’t
      conclusively provide a formal diagnosis. However, this online anxiety test
      is a questionnaire-based test that can provide you with an overview of
      your anxiety levels. <br />
      <br />
      <p style={{ fontSize: "22px", fontWeight: "bold" }}>
        Please note that this test is not an official test or diagnosis and can
        only offer an indication of your anxiety. You should seek a mental
        health professional for an in-depth diagnosis.
      </p>
      <i>Let's begin!</i>
    </p>
  </>
);

const resultMessages = {
  high: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>"Neat! You Show Little Signs of Anxiety"</span>
      <br />
      <br />
      Whoa! Look at that. Your response indicates little to no signs of anxiety. You manage stress and day-to-day challenges effectively. You don’t let the stress of the day get to you and that shows in the strong emotional health you’ve maintained.
      <br />
      <br />
      Continue to practice self-care and maintain a healthy balance in your life. If you ever feel the need to reach out for help, don’t hesitate to contact a professional for support. You can also try to join anxiety support groups and online forums just to have a support resource at hand when you need it.
      <br />
      <br />
      Keep up the positive mindset!
    </span>
  ),
  medium: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>"Hmm…You Might Have Moderate Anxiety"</span>
      <br />
      <br />
      Oh, seems like you might show moderate signs of anxiety. You’re not alone in experiencing anxiety and to acknowledge your feelings is a brave step in itself. While your symptoms of anxiety might be causing some discomfort in your everyday life and routine, there are effective strategies you can incorporate into your routine to manage your anxiety. Here are some things to consider:
      <li>Practice relaxation techniques like deep breathing exercises, progressive muscle relaxation, and mindful breathing to calm your anxious mind.</li>
      <li>Engage in regular physical activity to increase the production of endorphins.</li>
      <li>Eat a well-balanced diet, get enough sleep each night, and explore activities that help you feel relaxed and calm.</li>
      <li>Learn to recognize negative thoughts and stressors. You can learn to challenge your negative thoughts and eliminate the stressors that might contribute to your anxiety.</li>
      <li>Consider seeking support from an anxiety support group, online forums, or a professional therapist.</li>
    </span>
  ),
  low: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>"Yikes! You Have a Strong Indication of An Anxiety Disorder"</span>
      <br />
      <br />
      Ah! Your response indicates that you might have severe symptoms of anxiety, enough to indicate an anxiety disorder. Please know that you’re not alone in facing these challenges and seeking help is just one of the steps you can take to improve your well-being. Your symptoms have been significantly impacting your everyday life, but with some effective strategies and help, you can cope with them.
      <br />
      Here are some tips to cope with high anxiety levels:
      <li>If your symptoms are too severe and disrupt your daily life, then you must consider seeking a professional’s help and support. A professional can help you with an evidence-based approach to treating anxiety.</li>
      <li>Add mindfulness and meditation to your daily routine. These practices can keep you grounded in the present moment and keep your mind from drifting too far.</li>
      <li>You can also practice deep breathing or conscious breathing exercises to manage shortness of breath or shallow breathing which are the most common symptoms of anxiety.</li>
      <li>Establish a daily routine with healthy meals, regular physical exercise, and an adequate sleep schedule. You can also try setting boundaries, delegating tasks, and limiting your daily stressors to avoid worsening your stress and anxiety.</li>
      <li>Practice self-compassion and be kind to yourself. Anxiety often makes you turn against yourself and self-blame. When that happens, practice compassionate self-talk and reciting positive affirmations to feel grounded in the present moment.</li>
    </span>
  ),
};

const AnxietyQuiz = () => {
  return (
    <QuizTemplate
      questions={questions}
      title="Do I Have Anxiety? Free Anxiety Test!"
      introduction={introduction}
      resultMessages={resultMessages}
      scrollOffset={1100}
    />
  );
};

export default AnxietyQuiz;
