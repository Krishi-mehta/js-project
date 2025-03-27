import React from "react";
import QuizTemplate from "./components/QuizTemplate";

const questions = [
  {
    question: "Life is ...",
    options: [
      { text: "Fun and adventurous", score: 3 },
      { text: "What you make it", score: 1 },
      { text: "Something to learn from", score: 0 },
      { text: "All about family", score: 2 },
    ],
  },
  {
    question: "If you’re planning a house party. You …",
    options: [
      { text: "Plan which games to play", score: 3 },
      { text: "Find out where the cheapest vodka is", score: 2 },
      { text: "Think about inviting your neighbors", score: 1 },
      { text: "Make sure you have got enough chairs", score: 0 },
    ],
  },
  {
    question:
      "When you’re cleaning your wardrobe and find an old shirt, what do you do?",
    options: [
      { text: "I don’t have a wardrobe", score: 3 },
      {
        text: "Throw it out",
        score: 2,
      },
      {
        text: "Consider donating it",
        score: 1,
      },
      { text: "Put it on", score: 0 },
    ],
  },
  {
    question: "On your birthday, you feel…",
    options: [
      { text: "Happy and excited", score: 3 },
      { text: "Adventurous", score: 2 },
      { text: "Emotional ", score: 1 },
      { text: "Ignoring the day", score: 0 },
    ],
  },
  {
    question: "What's your favorite gift?",
    options: [
      { text: "Netflix Subscription", score: 3 },
      {
        text: "Clothes",
        score: 2,
      },
      {
        text: "Money",
        score: 1,
      },
      { text: "Books", score: 0 },
    ],
  },
  {
    question: " It's Friday night, you're most likely to …",
    options: [
      { text: "Go bar-hopping with friends", score: 3 },
      { text: "Go out for date night with your S/O", score: 2 },
      {
        text: "Have a quiet dinner at home",
        score: 1,
      },
      { text: "Catch up on work", score: 0 },
    ],
  },
  {
    question: "What's your favorite morning drink?",
    options: [
      { text: "Milk", score: 3 },
      { text: "Coffee", score: 2 },
      { text: "Tea", score: 1 },
      { text: "Water", score: 0 },
    ],
  },
  {
    question: "What time do you normally go to bed?",
    options: [
      { text: "Into the wee hours of the morning", score: 3 },
      { text: "When you get sleepy", score: 2 },
      {
        text: "Around 11 PM - Midnight",
        score: 1,
      },
      { text: "Between 9-9:30 PM", score: 0 },
    ],
  },
  {
    question: "When do you usually wake up in the morning?",
    options: [
      { text: "Somewhere at noon", score: 3 },
      { text: "9-10 AM", score: 2 },
      { text: "7-8 AM", score: 1 },
      { text: "6-7 AM", score: 0 },
    ],
  },
  {
    question: "What do you think about social media?",
    options: [
      { text: "Never", score: 3 },
      { text: "An inseparable part of life", score: 2 },
      { text: "It is essential", score: 1 },
      { text: "Interesting and fun", score: 0 },
      { text: "It is confusing", score: 0 },
    ],
  },
  {
    question: " What would you like to do in your free time?",
    options: [
      { text: "Never", score: 3 },
      { text: "Hanging out with friends", score: 2 },
      { text: "Watching a movie", score: 1 },
      { text: "Reading a book", score: 0 },
      { text: "Sleeping or just relaxing", score: 0 },
    ],
  },
  {
    question: " If a friend betrays you, how would you react?",
    options: [
      { text: "Never", score: 3 },
      { text: "I’ll get angry ", score: 2 },
      { text: "I’ll get emotional ", score: 1 },
      { text: "I’ll ask them “Why?”", score: 0 },
      { text: "I’ll accept and move on ", score: 0 },
    ],
  },
  {
    question: " If a friend betrays you, how would you react?",
    options: [
      { text: "Never", score: 3 },
      { text: "I’ll get angry ", score: 2 },
      { text: "I’ll get emotional ", score: 1 },
      { text: "I’ll ask them “Why?”", score: 0 },
      { text: "I’ll accept and move on ", score: 0 },
    ],
  },
  {
    question: "How often do you act without thinking?",
    options: [
      { text: "Always. I’m quite impulsive", score: 3 },
      { text: "Sometimes", score: 2 },
      { text: "I take my time to think through my actions ", score: 1 },
      { text: "I always act with a thorough plan", score: 0 },
    ],
  },
];

const introduction = (
  <>
    <p className="relationship-p">
      “Age is just a number” – you’ve heard of this phrase, haven’t you? But
      have you ever wondered what it means? We all have a “mental age” and
      that’s one of the reasons why we sometimes feel like an “old soul” or a
      “teen stuck in an adult’s body”. But, what is this “mental age” we all
      seem to have? <br /> <br />
      Mental age can be defined as your “mental ability expressed as the age at
      which an average person reaches the same ability”. Mental age, in
      psychological terms, is used to assess a child’s neurodevelopmental
      ability, especially in children with ASD or Down syndrome and in
      neurodevelopmental disorders where the actual age of the child does not
      always align with their mental age. <br /> <br />
      Our mental age can be calculated by observing our executive functions,
      emotional growth, and maturity. While these skills are developed as we
      age, there may be people who might not always develop these skills and
      act, feel, or behave the way they should at their age. <br /> <br />
      So, are you excited to learn your mental age? Do you think your mental age
      aligns with your actual age? Or do you believe that you’re either an old
      soul stuck in a young body or a child stuck in an adult body?
      <br /> <br />
      If you’re looking for a fun yet introspective quiz to figure out your
      mental age, then our quiz will help! Our “Mental Age Test” is designed for
      anyone who’s wondering how old they are mentally.
      <br /> <br />
      Before you begin this quiz, keep in mind that having a younger mental age
      does not mean you’re immature nor does having an older mental age mean
      you’re old-fashioned or a fuddy-duddy.
      <br />
      <br />
      A Word of Caution: This is a self-assessment test and not an official
      diagnosis. The score reflected on this quiz does not necessarily define or
      characterize your emotional, intellectual, or behavioral abilities. If
      you’re looking for an official diagnosis or assessment, it is recommended
      that you speak to a mental health professional.
      <br />
      <br />
      <p style={{ fontSize: "22px", fontWeight: "bold" }}>
        What is Your Mental Age ? Take this test to find out.{" "}
      </p>
      <p>
        Instructions:: Please try to answer each of the questions below as
        honestly as you can. We ask you to be honest to deliver an accurate
        result.
      </p>
    </p>
  </>
);

const resultMessages = {
  high: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Your Mental Age is 15-21"
      </span>
      <br />
      <br />
      Your mental age is somewhere between 15-21 which means you have a teenager
      or a young adult’s thinking. You’re just now beginning to be self-aware,
      but you have a long way to go. You’re an energetic and fun-loving person
      and to you, life is all play and less work. There’s nothing wrong with
      that!
    </span>
  ),
  medium: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Your Mental Age is 25-30"
      </span>
      <br />
      <br />
      Your mental age is somewhere between 25-30 which means that you’re a
      goal-driven and hardworking person who finds life meaningful. You enjoy
      learning new things and gaining new experiences. You like enjoying
      spending time with your friends and family and that’s OK!
    </span>
  ),
  low: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Your Mental Age is 55+"
      </span>
      <br />
      <br />
      Your mental age is 55 and above which means you’re mentally mature. You
      have clear ideas of what you want from life and it shows. At this mental
      age, you’re looking for experiences and people you like and are quite
      close to new experiences. You’re set in your ways and OK with it. You
      prefer hanging out with your family and living a stress-free life. You
      prefer a slow pace and are very happy with it too.
    </span>
  ),
};

const MentalAgeQuiz = () => {
  return (
    <QuizTemplate
      questions={questions}
      title="What Is My Mental Age?"
      introduction={introduction}
      resultMessages={resultMessages}
      scrollOffset={900}
    />
  );
};

export default MentalAgeQuiz;
