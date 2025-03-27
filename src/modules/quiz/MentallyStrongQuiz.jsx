import React from "react";
import QuizTemplate from "./components/QuizTemplate";

const questions = [
  {
    question: "Do you get angry easily?",
    options: [
      { text: "Yes, I have difficulty controlling my anger", score: 3 },
      { text: "Yes, but I try not to", score: 2 },
      { text: "Rarely do I lose my cool", score: 1 },
      { text: "I can never get angered easily", score: 0 },
    ],
  },
  {
    question: " Do you accept feedback or constructive criticism?",
    options: [
      { text: "No, I don’t like being criticized", score: 3 },
      { text: "Not very open and accepting", score: 2 },
      { text: "Yes, but it depends on the situation", score: 1 },
      { text: "Yes, I’m open to feedback", score: 0 },
    ],
  },
  {
    question: "  You made a mistake that cost your friend a pretty penny. Do you accept and apologize for your mistake?",
    options: [
      { text: "No, it was not my fault", score: 3 },
      {
        text: "I will get defensive and blame them",
        score: 2,
      },
      {
        text: "I will try to distract them from the mistake",
        score: 1,
      },
      { text: "Yes, it was my fault after all. It’s only right", score: 0 },
    ],
  },
  {
    question: "Do you offer your help and participate in random acts of kindness to expect something in return",
    options: [
      { text: "I’d appreciate it if the effort is returned", score: 3 },
      { text: "I’d appreciate it but not expect it", score: 2 },
      { text: "It would feel nice but it’s not required", score: 1 },
      { text: "No, I offer help out of the kindness of my heart", score: 0 },
    ],
  },
  {
    question: "Do you often find yourself sharing your weaknesses and vulnerabilities with your loved ones?",
    options: [
      { text: "No. Why would I share my weakness with others", score: 3 },
      {
        text: "I would think about it but can’t promise",
        score: 2,
      },
      {
        text: "I’d be reluctant to but if it helps me, then sure",
        score: 1,
      },
      { text: "Yes, I know my weaknesses and they don’t scare me", score: 0 },
    ],
  },
  {
    question: "Are you driven by your instinct rather than rationality at times?",
    options: [
      { text: "No, logic is the right way", score: 3 },
      { text: "It depends on the situation", score: 2 },
      {
        text: "I do but sometimes",
        score: 1,
      },
      { text: "Yes, I trust my instincts more", score: 0 },
    ],
  },
  {
    question:
      "The airline you were traveling with lost your baggage, how do you find yourself reacting?",
    options: [
      { text: "I would get angry at them", score: 3 },
      { text: "I would be angered but deal with the situation", score: 2 },
      { text: "I would be upset but it’s not their fault", score: 1 },
      { text: "I would understand that it’s not in my control and let them deal with it", score: 0 },
    ],
  },
  {
    question: "How would you react after breaking up with your partner?",
    options: [
      { text: "I would seek revenge", score: 3 },
      { text: "I would scream at them and cry", score: 2 },
      {
        text: "I would blame them for the breakup",
        score: 1,
      },
      { text: "I would be upset but would get over it", score: 0 },
    ],
  },
  {
    question: "How often do you find yourself shedding a tear?",
    options: [
      { text: "Not very often. Crying is a weakness", score: 3 },
      { text: "Rarely. If I do, it’d be in private", score: 2 },
      { text: "Sometimes when I feel too emotional", score: 1 },
      { text: "Very often. Crying makes me feel light-hearted", score: 0 },
    ],
  },
  {
    question: "You are stressed after a long week at work, how do you find yourself engaging in stress relief?",
    options: [
      { text: "I binge-eat, drink, or smoke", score: 3 },
      { text: "I talk to someone about it", score: 2 },
      { text: "I engage in yoga or meditation", score: 1 },
      { text: "I don’t find myself stressed too often", score: 0 },
    ],
  },
  {
    question: "Instead of working on what you’re supposed to do, you find yourself procrastinating by watching funny cat videos online. Is it something you agree with?",
    options: [
      { text: "Yes, cat videos are my daily dose of serotonin", score: 3 },
      { text: "Yes, but it’s only occasionally", score: 2 },
      { text: "Sometimes. It helps me distract myself", score: 1 },
      { text: "No, I don’t procrastinate often", score: 0 },
    ],
  },
  {
    question: "“I have high expectations from others”. Is this statement true for you?Yes, I have",
    options: [
      { text: "Yes, I have high expectations", score: 3 },
      { text: "Sometimes, I expect too much from others", score: 2 },
      {
        text: "Rarely do I have high expectations",
        score: 1,
      },
      { text: "Never. I don’t have high expectations", score: 0 },
    ],
  },
];

const introduction = (
  <>
    <p className="relationship-p">
      Life is a journey of never-ending trials and tribulations, but we can
      persevere through it all which makes us stronger and our life worth
      experiencing. But, did you ever wonder where this ability to stay
      resilient in the face of adversity comes from? Well, it’s all a result of
      being a mentally strong person. <br /> <br />
      Being mentally strong means having the ability to deal and cope with
      stressors, pressures, and challenges effectively. It is what helps you
      deal with whatever life throws at you without getting overwhelmed and
      faltering in your steps and staying confident throughout it all. <br />
      <br />
      So, if you’ve ever wondered if you are a mentally strong person or not, we
      have a test for you that will help you determine how mentally strong you
      are and what you can do to increase your mental strength if you are not.
      <br />
      <br />
      Our “Am I Mentally Strong” Quiz will take you through a series of fun
      questions that will let you know your mental strength at the end of it.
      While answering these questions, remember to be honest with us and
      yourself. <br /> <br />
      Before we move on to the quiz, let’s take a brief look at the signs of a
      mentally strong person.
      <p style={{ fontSize: "25px", fontWeight: "bold" }}>
        Signs to Check How Mentally Strong You are?
      </p>
      <li>You are kind to everyone without expecting anything in return</li>
      <li>
        You can change your mind to accommodate others without feeling bitter
      </li>
      <li>You don’t shy away from accepting your mistakes</li>
      <li>You are patient with everyone and everything life throws your way</li>
      <li>You don’t feel bad or weak when you ask for help</li>
      <li>You can openly express your feelings and emotions</li>
      <li>You deal with failures without admitting defeat</li>
      <li>You know when to let go of your past mistakes</li>
      <li>You are always striving to improve yourself</li>
      <br />
      If these signs agree with you or if you feel like you lack in some areas
      but are unsure of where; take the quiz to know more about how mentally
      strong you are.
      <br />
      <br />
      Instructions: Please try to answer each of the questions below as honestly
      as you can. We ask you to be honest to deliver an accurate result.
    </p>
  </>
);

const resultMessages = {
  high: (
    <span>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        "You Are NOT Mentally Strong"
      </p>
      Ouch! Seems like you are not mentally very strong. It’s important to understand that it’s OK to express your emotions and calm down when you feel overwhelmed. Sometimes things are not in your control and that’s okay.
      <br />
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>
      Here’s what you can do to increase your mental strength:
      </p>
      <li>
      Try to focus on one thing at a time. Multitasking might be too much for you.
      </li>
      <li>
      Set some time aside for physical activities. A strong body leads to a strong mind.
      </li>
      <li>
      Learn to express your emotions. You can start by journaling.
      </li>
      <li>Reach out for help. It’s OK to ask for help now and then.</li>
    </span>
  ),
//   moderate: (
//     <span>
//       <p style={{ fontSize: "20px", fontWeight: "bold" }}>
//         "The result of your Emotional Type are in." Here they are: <br />
//         Emotional Type: The Empath
//       </p>
//       <img src={Empath} alt="The Empath" />
//       <p style={{ fontWeight: "bold", fontSize: "20px" }}>
//         Fun Fact About The Empath
//       </p>
//       You are sensitive, giving, emotionally attuned, and a very good listener.
//       You can be described as a helper, a friend, and an intuitive person. You
//       are passionate about everything you do and keep in mind others’ feelings
//       and emotions. You respond with your emotions first and head later. You are
//       also your loved ones’ cheerleader.
//       <br />
//       <br />
//       <span style={{ fontWeight: "bold", fontSize: "20px" }}>
//         What You Have Most Difficulty With
//       </span>
//       <br />
//       However, because of your penchant to be attuned emotionally to others, you
//       absorb others’ negativity too, are prone to anxious feelings, can easily
//       get tired, and have discerning boundaries with others.
//       <br />
//       <br />
//       <span style={{ fontSize: "18px", fontWeight: "bold" }}>Next Steps</span>
//       <br />
//       <li>
//         Practicing healthy and positive self-talk (using logic more than
//         emotions to lead).
//       </li>
//       <li>
//         Allowing yourself to sit in meditation to understand your emotions
//         first.
//       </li>
//       <li>
//         Setting boundaries with others. It is one of the best ways to protect
//         yourself from others taking advantage of your good nature.
//       </li>
//     </span>
//   ),
  medium: (
    <span>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
      "It’s OK! You Are Mentally Sensitive"
      </p>
      While you may not be mentally strong or weak, you are mentally SENSITIVE. You are empathetic, but sometimes your own problems seem to take the front seat to others. While you can be compassionate, you still sometimes struggle with being who you are.
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>
      Here’s what you can do to improve your mental strength:
      </p>
      <br />
      <li>Set some realistic goals and stick to them.</li>
      <li>Try to get out of your comfort zone and try new things.</li>
      <li>Instead of shying away from your problems, try to deal with them actively.</li>
      <li>Nurture and embrace a positive outlook toward yourself and others.</li>
    </span>
  ),
  low: (
    <span>=
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Wow! You ARE Mentally Strong"
      </p>
      Wow! Look at that, you are mentally strong and healthy. You stand fast in your beliefs, are highly respectful of others, know when to ask for help, and have a strong sense of self-confidence. You are willing to change and improve yourself and don’t shy away from expressing your true self in front of others.
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>
      Here are some tips that can help you maintain that strong mental confidence and resilience:
      </p>
      <br />
      <li>Keep believing in yourself and your ability to do good by all.</li>
      <li>Create a strong social network that helps you grow – mentally and emotionally.</li>
      <li>Keep embracing change while keeping an optimistic outlook on life.</li>
      <li>Keep working on caring for your mental health and if you need support at any point in life, don’t hesitate to reach out for help.</li>
    </span>
  ),
};

const MentallyStrongQuiz = () => {
  return (
    <QuizTemplate
      questions={questions}
      title="Am I Mentally Strong? Take this Quiz and Find Out"
      introduction={introduction}
      resultMessages={resultMessages}
      scrollOffset={1000}
    />
  );
};

export default MentallyStrongQuiz;
