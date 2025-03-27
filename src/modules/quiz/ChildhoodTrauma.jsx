import React from "react";
import QuizTemplate from "./components/QuizTemplate";

const questions = [
  {
    question:
      "Did you ever experience physical violence from a parent or adult caregiver, such as hitting, kicking, or being slapped?",
    options: [
      { text: "Never", score: 3 },
      { text: "Rarely", score: 1 },
      { text: "Sometimes", score: 0 },
      { text: "Often", score: 2 },
    ],
  },
  {
    question:
      "Did you experience any behaviors such as being insulted, sworn at, or belittled by a parent or caregiver?",
    options: [
      { text: "Never", score: 3 },
      { text: "Rarely", score: 2 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 0 },
    ],
  },
  {
    question:
      "Have you ever felt a lack of love or support from a parent or caregiver? Did you ever feel like a burden as a child?",
    options: [
      { text: "Never", score: 3 },
      {
        text: "Rarely",
        score: 2,
      },
      {
        text: "Occasionally",
        score: 1,
      },
      { text: "Frequently", score: 0 },
    ],
  },
  {
    question:
      "Were your basic needs met such as having enough food, clean clothes, or a safe place to sleep as a child?",
    options: [
      { text: "Never", score: 3 },
      { text: "Rarely", score: 2 },
      { text: "Occasionally", score: 1 },
      { text: "Frequently", score: 0 },
    ],
  },
  {
    question:
      "How often did you feel emotionally neglected by a parent or caregiver, like they didn’t listen to you or have time for you?",
    options: [
      { text: "Never", score: 3 },
      {
        text: "Rarely",
        score: 2,
      },
      {
        text: "Sometimes",
        score: 1,
      },
      { text: "Often", score: 0 },
    ],
  },
  {
    question:
      "Did you experience any of the following in your house before you turned 18: Divorce or separation of parents, or any other break-up of your guardians?",
    options: [
      { text: "Never", score: 3 },
      { text: "Briefly", score: 2 },
      {
        text: "For some time",
        score: 1,
      },
      { text: "Most of the time", score: 0 },
    ],
  },
  {
    question:
      "How often did you witness violence between your parents, adult siblings, or caregivers?",
    options: [
      { text: "Never", score: 3 },
      { text: "Once or twice", score: 2 },
      { text: "A few times", score: 1 },
      { text: "Many times", score: 0 },
    ],
  },
  {
    question:
      "Did a parent or caregiver in your childhood ever struggle with a substance abuse disorder or an addiction to alcohol or drugs?",
    options: [
      { text: "Never", score: 3 },
      { text: "Briefly", score: 2 },
      {
        text: "For some time",
        score: 1,
      },
      { text: "Most of the time", score: 0 },
    ],
  },
  {
    question:
      "Was a parent, adult sibling, or caregiver in your childhood diagnosed with a mental health disorder or illness?",
    options: [
      { text: "Never", score: 3 },
      { text: "Briefly", score: 2 },
      { text: "For some time", score: 1 },
      { text: "Most of the time", score: 0 },
    ],
  },
  {
    question:
      "Was a parent or caregiver in your childhood ever involved in unlawful activities or went to prison?",
    options: [
      { text: "Never", score: 3 },
      { text: "Briefly", score: 2 },
      { text: "For some time", score: 1 },
      { text: "Most of the time", score: 0 },
    ],
  },
];

const introduction = (
  <>
    <p className="relationship-p">
          Our childhood experiences shape who we are and who we become in the
          future. While some memories bring nothing but joy, others can be
          difficult to process and even traumatic. We’ve all experienced
          challenges growing up, but for some, these challenges can be
          overwhelming and leave lasting scars. <br /> <br />
          Childhood trauma refers to the experience of events that are
          frightening, dangerous, or violent, and that overwhelm a child’s
          ability to cope. These events can happen at any point during your
          childhood – from infancy to adolescence. <br /> <br />
          What kind of trauma you experience can define how your adult life will
          pan out. Some common kinds of childhood trauma you might experience
          can include; <br /> <br />
          <li>Physical, Sexual, Emotional</li>
          <li>
            Household Dysfunction: Divorce, Separation, Domestic Violence,
            Substance Abuse, Mental Illness
          </li>
          <li>
            Trauma: Witnessing Violence, Accidents, or Death of a Loved One
          </li>
          <li>Neglect: Physical, Emotional, Mental</li>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            Childhood trauma can manifest in different ways, but some common
            symptoms of childhood trauma can include;
          </p>
          <li>Experiencing anxiety</li>
          <li>Feeling anger, fear, sadness</li>
          <li>Having low self-esteem</li>
          <li>Trouble with relationships</li>
          <li>Feeling aggressive</li>
          <li>Acting out as a child</li>
          <li>Withdrawing from social life</li>
          <li>Thinking of self-harm</li>
          <li>Using substances such as alcohol and drugs to cope</li>
          <li>Experiencing memory issues</li>
          <br />
          The impact of childhood trauma can be long-lasting. They can impact
          your physical health and increase the risk of chronic disease,
          obesity, and addiction. Adverse childhood experiences can also
          increase the risk for mental health disorders such as anxiety
          disorders, depression, post-traumatic stress disorder (PTSD), and
          substance abuse. If you’ve experienced childhood trauma, then you
          might also find it difficult to form and maintain healthy
          relationships as an adult.
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>
            What Is The ACE Quiz?{" "}
          </p>
          The ACE quiz, or Adverse Childhood Experiences Quiz, is a tool used to
          assess how many childhood traumatic events you may have experienced
          (before age 18). These events can have a significant impact on your
          life and well-being. It is believed that the more your ACE score is,
          the more likely you are to have experienced childhood trauma. <br />
          <br />
          Please note that this quiz is NOT a diagnostic test, but a point for
          self-reflection. There is no right or wrong answer. Be honest with
          yourself. If the questionnaire brings up difficult memories, exit the
          quiz, and seek support. <br />
          <br />
          We also work diligently to provide you with instant results upon
          completing the test. The immediate result can help guide you to your
          next steps in seeking support and moving forward on the path of
          recovery.
          <h4>Resources to Reach Out to…</h4>
          <a href="https://www.nctsn.org/" target="blank" style={{color:"#d56603;",textDecoration:"underline"}}>
            The National Child Traumatic Stress Network
          </a><br />
          <a href="https://www.nami.org/" target="blank" style={{color:"#d56603;",textDecoration:"underline"}}>
            The National Alliance on Mental Illness (NAMI)
          </a><br />
          <a href="https://www.samhsa.gov/" target="blank" style={{color:"#d56603;",textDecoration:"underline"}}>
            The Substance Abuse and Mental Health Services Administration
            (SAMHSA)
          </a>
        </p>
  </>
);

const resultMessages = {
  high: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>"No ACEs"</span>
      <br />
      <br />
      You likely had a relatively stable and supportive childhood. You may also
      have developed strong relationships with your parents, siblings, and other
      family members. You felt safe and secure growing up and were comfortable
      expressing your emotions. You most likely had positive role models who
      instilled a sense of self-worth and confidence in you.
      <br />
      <br />
      hile a no ACE score is good, it doesn’t mean that your childhood was
      perfect. A low ACE score suggests that you had a strong foundation of
      support and stability that continues to contribute to your well-being.
      <br />
      <br />
      • You value undivided attention and meaningful conversations
      <br />
      • You feel most loved when others spend focused time with you
      <br />
      • You appreciate deep discussions and shared activities
      <br />
      • You value presence over presents
      <br />
      • You cherish creating memories together
      <br />
      <br />
      Understanding this can help you communicate your needs better and
      recognize how you naturally express love to others.
    </span>
  ),
  medium: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Low ACEs"
      </span>
      <br />
      <br />
      You might have experienced some challenges growing up, but they were likely not frequent or severe. Your score suggests that you had trouble in the house growing up which can put you at an increased risk of health and social concerns. You might have received support but it wasn’t always frequent and that might’ve affected your ability to believe in yourself.
      <br />
      <br />
      You can always work on regulating your emotions and building resilience. Consider seeking support from a healthcare professional or therapist who can help you develop healthy coping mechanisms.
    </span>
  ),
  low: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "High ACEs"
      </span>
      <br />
      <br />
      A high ACE score suggests that you have experienced extensive childhood trauma or harmful events in your childhood. These events could have been physical, emotional, abusive, or neglect. Repeated exposure to childhood trauma can have an impact on your nervous system and make you more prone to chronic stress.
      <br />
      <br />
      You can cope with childhood trauma as an adult by surrounding yourself with positive and supportive people who can offer emotional encouragement. You can also put more focus on taking care of yourself by prioritizing your mental health. You can also work on developing healthy coping mechanisms such as exercising, journaling, talking to a trusted person, or seeking professional help to deal with stress and difficult emotions.
      <br />
      <br />
      Remember, a high ACE score doesn’t define you. You’re resilient so be strong. Reaching out to a therapist can help you understand the impact of your childhood trauma on your adulthood.
    </span>
  ),
};

const ChildhoodTraum = () => {
  return (
    <QuizTemplate
      questions={questions}
      title="The ACE Quiz: Did You Experience Childhood Trauma?"
      introduction={introduction}
      resultMessages={resultMessages}
      scrollOffset={1400}
    />
  );
};

export default ChildhoodTraum;
