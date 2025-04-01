import React from "react";
import QuizTemplate from "./components/QuizTemplate";

const questions = [
  {
    question:
      "Do you find it difficult to sleep lately?",
    options: [
        { text: "Yes, I find it hard to sleep", score: 3 },
        { text: "Yes, but after the initial struggle, I sleep easily", score: 2 },
        { text: "No, not as much lately", score: 1 },
        { text: "Not at all", score: 0 },
    ],
  },
  {
    question:
      "Do you find it hard to stay properly awake and lucid during the daytime?",
    options: [
      { text: "Yes, all the time", score: 3 },
      { text: "Yes, but not always", score: 2 },
      { text: "No, not anymore", score: 1 },
      { text: "Not at all", score: 0 },
    ],
  },
  {
    question:
      " Do you feel well-rested when you first wake up in the morning?",
    options: [
      { text: "I wake up feeling tired", score: 3 },
      {
        text: "Usually, I wake up tired but not after a while",
        score: 2,
      },
      {
        text: "I wake up feeling sleepy but not always",
        score: 1,
      },
      { text: "I woke up feeling energized!", score: 0 },
    ],
  },
  {
    question:
      "Do you think you’re getting the amount of sleep your body needs?",
    options: [
      { text: "I don’t think so", score: 3 },
      { text: "I’d like to believe that but I remain skeptical", score: 2 },
      { text: "I do get enough hours of sleep", score: 1 },
      { text: "Yes, I am getting the right amount of sleep", score: 0 },
    ],
  },
  {
    question:
      "Are you prone to snoring?",
    options: [
      { text: "Yes, I’ve been told that often", score: 3 },
      {
        text: "Yes, but not very often",
        score: 2,
      },
      {
        text: "I don’t believe that but I can’t be sure",
        score: 1,
      },
      { text: "No, I don’t snore", score: 0 },
    ],
  },
  {
    question:
      "Do you feel listless and sleepy enough during the day to take a nap of more than 5 minutes?",
    options: [
      { text: "I frequently take hour-long naps", score: 3 },
      { text: "I might take a 30-minute nap occasionally", score: 2 },
      {
        text: "I don’t take many naps during the day anymore",
        score: 1,
      },
      { text: "No. If I have to take a nap, it’d be a 5-minute nap", score: 0 },
    ],
  },
  {
    question:
      "Are you prone to moving around a lot restlessly when you’re sleeping or feel uncomfortable during your sleep?",
    options: [
      { text: "I am always restless when I’m sleeping", score: 3 },
      { text: "I toss and turn in my sleep all the time", score: 2 },
      { text: "I might feel uncomfortable initially but settle down after some time", score: 1 },
      { text: "I am at peace when I’m sleeping", score: 0 },
    ],
  },
  {
    question:
      "Do you wake up with a headache or shortness of breath in the morning?",
    options: [
      { text: "Yes, many days I wake up feeling cranky", score: 3 },
      { text: "Yes, more often than not", score: 2 },
      {
        text: "Some days I wake up uncomfortably, but not all the time",
        score: 1,
      },
      { text: "I always wake up feeling refreshed ", score: 0 },
    ],
  },
  {
    question:
      "Do you find yourself waking up in the middle of the night and unable to fall asleep?",
    options: [
      { text: "All the time", score: 3 },
      { text: "More days than not", score: 2 },
      { text: "Sometimes, but not enough to cause sleep troubles", score: 1 },
      { text: "Not at all", score: 0 },
    ],
  },
  {
    question:
      "In the last month, how long has it taken you to fall asleep (on average)?",
    options: [
      { text: "More than an hour", score: 3 },
      { text: "45–60 minutes", score: 2 },
      { text: "30 minutes, give or take a few minutes", score: 1 },
      { text: "Less than 15 minutes", score: 0 },
    ],
  },
];

const introduction = (
  <>
    <p className="relationship-p">
    Oh, Sleep! How you elude me! Probably something you can relate to, right? Sleep, these days, has become the most coveted yet the most elusive thing. I mean, imagine this; as soon as you get in your best PJs – all ready to get that much-needed shuteye – and as soon as your head hits the pillow, you’re wide awake. <br /> <br />
    After counting countless sheep, reading books, and even meditating, nothing seems to work. <br /> <br />
    Could this be a sign of just a rare sleepless night or something more? <br /> <br />
    Did you know that the majority of people don’t even realize that they have a sleep disorder? And I’m not just talking about insomnia. Many types of sleep disorders can cause sleep disturbances, but in the end, all of them have one thing in common; they affect the quality of your sleep. <br /><br />
    Now, what Symptoms could Indicate a Serious Sleep Disorder?
    <br />
    Take a look at them before we move on to understand if you have a sleep issue;<br />
          <li>You fall asleep while driving</li>
          <li>
          You struggle to stay awake when inactive
          </li>
          <li>
          You have difficulty paying attention or concentrating at work, school, or home
          </li>
          <li>You have low performance at work or school</li>
          <li>You are often told by others that you look sleepy</li>
          <li>You have slowed responses</li>
          <li>You have the urge to take naps almost every day</li>
          <p>
          These symptoms are the most common ones that occur when you’re struggling with a sleep disorder. Specific disorders may have specific symptoms that you would need to speak about with a sleep specialist.
          </p>
          If you think you might have some of these symptoms, then take our “How well do you sleep” quiz to know more about your sleep patterns and how you can improve your sleep.
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>[Please note that this quiz is not an indicator or diagnostic test for sleep disorders. If you have symptoms of sleep disorders, then it is advised that you speak with a professional healthcare advisor or a sleep specialist. Only a professional can make an accurate diagnosis.]</p>
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>
          How Well Do You Sleep? Let’s Find Out!{" "}
          </p>
          Instructions: Please try to answer each of the questions below as honestly as you can. We ask you to be honest to deliver an accurate result. Answer the questions based on your sleeping habits or patterns over the past month (4 weeks).
        </p>
  </>
);

const resultMessages = {
  high: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>"You Are Not Sleeping Well Enough"</span>
      <br />
      <br />
      Ouch! Seems like you are not getting enough sleep in the last few weeks. Sleep is an important part of our mental and emotional development and not getting a well-rested sleep can impact how you think, behave, feel, or act in your waking hours. It’s OK, though.
      <br />
      <br />
      Here’s what you can do to improve your sleep:
      <br />
      <br />
      • Go to bed at the same time each night and wake up at the same time each morning.
      <br />
      • Make sure your sleep environment is conducive to good quality rest. Your bedroom should be quiet, devoid of unnatural lighting, and has a cool temperature.
      <br />
      • Avoid eating heavy meals, drinking caffeine, and consuming alcohol before bedtime.
      <br />
      • Get some physical activity during the day. When you exercise, your muscles feel relaxed enough to fall asleep quickly at night.
      <br />
    </span>
  ),
  medium: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "You Are Sleeping Adequately"
      </span>
      <br />
      <br />
      So, you may not be getting the sleep you need, but it’s OK. You understand that sleep is an important part of your well-being and want to work to get the rest you desire. Your sleep hygiene may not be on par with the pros, but there is always time and many ways you can catch up to them.
      <br />
      <br />
      Here’s what you can do to improve your sleep hygiene:
      <br />
      <li>Be consistent with your routine and try to get at least eight hours of sleep each night.</li>
      <li>Avoid all digital and electronic devices before going to bed.</li>
      <li>Do not think too much; just concentrate on doing something aesthetically pleasing such as reading, listening to sleep music, practicing relaxation exercises, and more..</li>
      <li>Take a warm bath or shower or try using aromatherapy oils to relax your body and mind into sleeping.</li>
    </span>
  ),
  low: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Amazing! You Are Getting Abundant Sleep"
      </span>
      <br />
      <br />
      Wow! Look at that, you are getting the perfect amount of sleep your body is craving. You are steadfast in your belief that sleep is an essential driver when it comes to running the train of your mental and emotional well-being. You have your sleep game on par and are very well aware of your healthy sleep habits.
      <br />
      <br />
      Here are some tips that can help you maintain that healthy sleep streak:
      <br />
      <li>Keep practicing those relaxation techniques and breathing exercises to ease your body and mind into a deep sleep.</li>
      <li>Keep exercising every day to ensure the smooth production of melatonin.</li>
      <li>Keep a good sleep schedule and sleep environment. Make sure there are no unnatural lighting disturbing your shuteye, no electronics in your bedroom, comfy mattress and pillows, and the temperature is set to cool.</li>
      <li>Keep your dinner time and sleep-wake time consistent. Make sure you eat light and well and that you sleep and wake up at the same time every day to ensure a good biological clock.</li>
    </span>
  ),
};

const SleepQuiz = () => {
  return (
    <QuizTemplate
      questions={questions}
      title="How Well Do You Sleep? Sleep Quiz"
      introduction={introduction}
      resultMessages={resultMessages}
      scrollOffset={1200}
    />
  );
};

export default SleepQuiz;
