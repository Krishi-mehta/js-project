import React from "react";
import QuizTemplate from "./components/QuizTemplate";

const questions = [
  {
    question: "How often do you feel misunderstood by others?",
    options: [
      { text: "I rarely feel misunderstood", score: 3 },
      { text: "I feel loved when my S/O helps me with chores", score: 1 },
      { text: "I feel loved when my S/O or friends give me a thoughtful gift", score: 0 },
      { text: "I feel loved when my S/O cuddles with me or hugs me after a long day", score: 2 },
      { text: "I feel loved when my S/O or friends appreciate me, verbally ", score: 2 },
    ],
  },
  {
    question: "If you have to say \"I love you\" with song lyrics, which one would you pick?",
    options: [
      { text: "\"I'm so in love with you. It just keeps getting better. I want to spend the rest of my life with you by my side.\" - Lonestar", score: 3 },
      { text: "\"I'll be there for you, these five words I swear to you. When you breathe, I want to be the air for you.\" - Bon Jovi", score: 2 },
      { text: "\"There's something about the way you look tonight. Takes my breath away, it's that feeling I get about you deep inside.\" - Elton John", score: 1 },
      { text: '"Oh, my love, my darling, I\'ve hungered for your touch." - The Righteous Brothers', score: 0 },
      { text: '"When I see your face, there\'s not a thing that I would change, \'cause you\'re amazing just the way you are." - Bruno Mars', score: 0 },
    ],
  },
  {
    question: "Your S/O threw a surprise party, what's the best part of your party?",
    options: [
      { text: "Having meaningful conversations and laughing together ", score: 3 },
      { text: "The efforts to make the party fun and that I had a stress-free celebration", score: 2 },
      { text: "The thoughtful gifts I got from everyone who came", score: 1 },
      { text: "The hugs and kisses I got from my long-distance friends", score: 0 },
      { text: "The appreciation I got through heartfelt words and compliments from everyone", score: 0 },
    ],
  },
  {
    question:
      "In a relationship, do you feel inadequate?",
    options: [
      { text: "I rarely feel this way", score: 3 },
      { text: "I occasionally feel inadequate", score: 2 },
      { text: "I often feel this way ", score: 1 },
      { text: "I feel inadequate and worthless", score: 0 },
    ],
  },
  {
    question:
      "In a social gathering, do you feel left out?",
    options: [
      { text: "Rarely do I feel left out in my social circle", score: 3 },
      {
        text: "Occasionally, I do. But not often",
        score: 2,
      },
      {
        text: "I often feel like I'm being left out",
        score: 1,
      },
      { text: "I feel like I don't belong in my community", score: 0 },
    ],
  },
  {
    question:
      "Do you feel happy the way you are right now?",
    options: [
      { text: "Yes, I am happy with myself", score: 3 },
      { text: "I feel content if not happy", score: 2 },
      { text: "I feel like I am sometimes happy", score: 1 },
      { text: "No, I feel sad and empty", score: 0 },
    ],
  },
  {
    question:
      "If you feel sad, do you know where to find support and companionship?",
    options: [
      { text: "Yes, I have a support system  ", score: 3 },
      {
        text: "Not always, but I can always cheer myself up ",
        score: 2,
      },
      {
        text: "No. I lack a solid support system",
        score: 1,
      },
      { text: "No. I have no one I can lean on", score: 0 },
    ],
  },
  {
    question:
      "Do you think sad things or negative outcomes?",
    options: [
      { text: "Rarely. Things are OK in my life", score: 3 },
      { text: "Often. When things are not going my way", score: 2 },
      {
        text: "Sometimes. When things go wrong",
        score: 1,
      },
      { text: "Always. There's nothing happy in my life, it seems ", score: 0 },
    ],
  },
  {
    question:
      "How quickly can you make new connections?",
    options: [
      { text: "I rarely have trouble making new friends", score: 3 },
      { text: "I often find it hard to talk to new people", score: 2 },
      { text: "Making new friends makes me uncomfortable", score: 1 },
      { text: "I am never comfortable talking to new people", score: 0 },
    ],
  },
  {
    question:
      "Do you have a lot in common with people around you?",
    options: [
      { text: "Yes. I do have a few friends who share my interests", score: 3 },
      { text: "I often feel like I have people I can share my interests with", score: 2 },
      {
        text: "I don't have that many people I share common interests with",
        score: 1,
      },
      { text: "No. My loved ones and I don't have common interests ", score: 0 },
    ],
  },
  {
    question:
      "Do you feel lacking or empty, even when you're engaged in things?",
    options: [
      { text: "No. I feel content", score: 3 },
      { text: "Sometimes, I feel this way", score: 2 },
      { text: "I often feel this way", score: 1 },
      { text: "I always feel empty", score: 0 },
    ],
  },
  {
    question:
      "Do you feel that people around you appreciate your presence?",
    options: [
      { text: "I do feel appreciated ", score: 3 },
      { text: "I often feel appreciated in my circle of friends", score: 2 },
      { text: "I feel underappreciated", score: 1 },
      { text: "I always feel ignored or invisible", score: 0 },
    ],
  },
  {
    question:
      "Do you have the confidence to begin new relationships?",
    options: [
      { text: "Yes, I feel comfortable with new relationships", score: 3 },
      { text: "I often feel confident enough", score: 2 },
      { text: "I feel like I'll mess up new relationships", score: 1 },
      { text: "I never have enough confidence in new relationships", score: 0 },
    ],
  },
];

const introduction = (
  <>
    <p className="relationship-p">
      Love is a mysterious thing, isn't it? Many would describe love as a "hit-and-miss" thing, but the truth is that there's a mastery to love. I have a different definition of love, and you might have a different one. This definition can be your "language"; the language of love. Once you know how to read it, the slide of your relationship can go as smoothly as you can imagine.
      <br /><br />
      The concept of love languages was introduced by Gary Chapman in the book, "The Five Love Languages" and our love language quiz is inspired by the book. This unique love language quiz is designed to help you know your way of giving and receiving love among its five languages:
      <br /><br />
      <li>Acts of Service</li>
      <li>Receiving Gifts</li>
      <li>Quality Time</li>
      <li>Words of Affirmation, and</li>
      <li>Physical Touch</li>
      <br />
      Knowing your love language can complement your relationships with your loved ones, as this unique language can give you insights into the various expressions of love that you resonate with the most!
      <br /><br />
      So, don't wait anymore. Grab a pen and notebook, track your answers, and find your love language today. This step of self-discovery will help you figure out your primary expression of love and connect with your loved ones on an emotional level.
      <br /><br />
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        <i>
          Please note that Calm Sage understands the importance of your privacy. Your responses are not shared with any third-party website, so rest assured that your information is safe with us.
        </i>
      </p>
      <br />
      <i>
        This quiz isn't an official test and can only offer a simple understanding of your love language out of the five love languages as presented by Gary Chapman. If you need an in-depth understanding of your love languages, then it is suggested that you speak to a professional for more.
      </i>
      <br /><br />
      <i>Are you ready to express yourself in the language that speaks to your heart?</i>
      <br /><br />
      <i>Let's begin!</i>
      <br />
      <p style={{ fontSize: "35px" }}>What's My Love Language?</p>
      <h4>
        <i>
          Important: It is advised that you don't skip any of the questions in the test. Just choose the answer that applies to you and try to be as honest as you can for the best result!
        </i>
      </h4>
    </p>
  </>
);

const resultMessages = {
  high: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Your Primary Love Language: Quality Time"
      </span>
      <br /><br />
      Your responses indicate that Quality Time is your primary love language. This means:
      <br /><br />
      • You value undivided attention and meaningful conversations<br />
      • You feel most loved when others spend focused time with you<br />
      • You appreciate deep discussions and shared activities<br />
      • You value presence over presents<br />
      • You cherish creating memories together<br />
      <br />
      Understanding this can help you communicate your needs better and recognize how you naturally express love to others.
    </span>
  ),
  medium: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Your Primary Love Language: Acts of Service"
      </span>
      <br /><br />
      Your responses suggest that Acts of Service is your primary love language. This means:
      <br /><br />
      • You feel loved when others help you with tasks<br />
      • You appreciate when people take initiative to assist you<br />
      • Actions speak louder than words for you<br />
      • You value practical support and assistance<br />
      • You show love by doing things for others<br />
      <br />
      This understanding can help you better communicate your needs and recognize how you naturally show love to others.
    </span>
  ),
  low: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Your Primary Love Language: Physical Touch"
      </span>
      <br /><br />
      Your responses indicate that Physical Touch is your primary love language. This means:
      <br /><br />
      • You feel most connected through physical affection<br />
      • You appreciate hugs, holding hands, and other forms of touch<br />
      • Physical presence is important to you<br />
      • You feel loved through physical closeness<br />
      • You express love through physical gestures<br />
      <br />
      Understanding this can help you better communicate your needs and recognize how you naturally express love to others.
    </span>
  )
};

const LovelanguageQuiz = () => {
  return (
    <QuizTemplate
      questions={questions}
      title="What's My Love Language? | 5 Love Languages Quiz"
      introduction={introduction}
      resultMessages={resultMessages}
      scrollOffset={1200}
    />
  );
};

export default LovelanguageQuiz;
