import React from "react";
import QuizTemplate from "./components/QuizTemplate";

const questions = [
  {
    question:
      "How often do you feel misunderstood by others?",
    options: [
      { text: "I rarely feel misunderstood", score: 3 },
      { text: "I feel loved when my S/O helps me with chores", score: 1 },
      { text: "I feel loved when my S/O or friends give me a thoughtful gift", score: 0 },
      { text: "I feel loved when my S/O cuddles with me or hugs me after a long day", score: 2 },
      { text: "I feel loved when my S/O or friends appreciate me, verbally ", score: 2 },
    ],
  },
  {
    question:
      "If you have to say \"I love you\" with song lyrics, which one would you pick?",
    options: [
      { text: "\"I'm so in love with you. It just keeps getting better. I want to spend the rest of my life with you by my side.\" - Lonestar", score: 3 },
      { text: "\"I'll be there for you, these five words I swear to you. When you breathe, I want to be the air for you.\" - Bon Jovi", score: 2 },
      { text: "\"There's something about the way you look tonight. Takes my breath away, it's that feeling I get about you deep inside.\" - Elton John", score: 1 },
      { text: '"Oh, my love, my darling, I\'ve hungered for your touch." - The Righteous Brothers', score: 0 },
      { text: '"When I see your face, there\'s not a thing that I would change, \'cause you\'re amazing just the way you are." - Bruno Mars', score: 0 },
    ],
  },
  {
    question:
      "Your S/O threw a surprise party, what's the best part of your party?",
    options: [
      { text: "Having meaningful conversations and laughing together ", score: 3 },
      {
        text: "The efforts to make the party fun and that I had a stress-free celebration",
        score: 2,
      },
      {
        text: "The thoughtful gifts I got from everyone who came",
        score: 1,
      },
      { text: "The hugs and kisses I got from my long-distance friends", score: 0 },
      { text: "The appreciation I got through heartfelt words and compliments from everyone", score: 0 },
    ],
  },
  {
    question:
      "You're taking a day off and spending the day with yourself. What are you doing?",
    options: [
      { text: "Self-reflecting with meditation or engaging in a hobby I love", score: 3 },
      { text: "Organizing my space and getting the errands done", score: 2 },
      { text: "Treating myself with a dessert, a gift, or that perfume I'd been eying", score: 1 },
      { text: "Going to a spa, getting a massage, or going to a nail salon", score: 0 },
      { text: "Going on a shopping spree and lunch afterward", score: 0 },
    ],
  },
  {
    question:
      "You're on vacation with your family. What are you most likely to do?",
    options: [
      { text: "Playing games with the cousins I see once a year ", score: 3 },
      {
        text: "Organizing fun outings for the family",
        score: 2,
      },
      {
        text: "Buying souvenirs for my friends and coworkers back home ",
        score: 1,
      },
      { text: "Taking care of the little ones in the family", score: 0 },
      { text: "Joining my siblings/cousins for a fun party", score: 0 },
    ],
  },
  {
    question:
      "If you had to give yourself a tagline, what would it be?",
    options: [
      { text: "Creating memories, living life to the fullest", score: 3 },
      { text: "Changing the world, one act of kindness at a time", score: 2 },
      {
        text: "Embracing life's little gifts ",
        score: 1,
      },
      { text: "Strengthening bonds, one hug at a time", score: 0 },
      { text: "Inspiring, Motivating, and Spreading Positivity ", score: 0 },
    ],
  },
  {
    question:
      "You have a date tonight. What kind of date would you prefer?",
    options: [
      { text: "A dinner date where I can get to know my partner", score: 3 },
      { text: "Someplace we can volunteer for a cause ", score: 2 },
      { text: "A surprise, but thoughtful night out ", score: 1 },
      { text: "Getting a couples massage ", score: 0 },
      { text: "A coffee date where we can have fun and talk casually ", score: 0 },
    ],
  },
  {
    question:
      "What's the most meaningful gift you've ever received?",
    options: [
      { text: "A day of undivided attention from my S/O or friends", score: 3 },
      { text: "A relaxing day when I didn't have to worry about anything ", score: 2 },
      {
        text: "A surprisingly thoughtful and expensive gift",
        score: 1,
      },
      { text: "A fun day spent with my S/O lounging and relaxing", score: 0 },
      { text: "A thoughtfully penned letter", score: 0 },
    ],
  },
  {
    question:
      "When you're upset, how do you want to be cheered up?",
    options: [
      { text: "By receiving a compliment", score: 3 },
      { text: "By having someone accompany you for lunch", score: 2 },
      { text: "By someone bringing you a cup of coffee", score: 1 },
      { text: "By having someone hug or kiss you", score: 0 },
      { text: "By having someone praise you", score: 0 },
    ],
  },
  {
    question:
      "If you had to choose a romantic gift, what would you choose?",
    options: [
      { text: "A beach vacation with your S/O", score: 3 },
      { text: "A year of your S/O doing household chores", score: 2 },
      { text: "A massage chair", score: 1 },
      { text: "A practical gift, like a gift coupon, books, etc.", score: 0 },
      { text: "An expensive set of earrings", score: 0 },
    ],
  },
  {
    question:
      "After an unbelievably rough day at work, what are you looking forward to?",
    options: [
      { text: "Catching up on your favorite variety show", score: 3 },
      { text: "Reading a good book", score: 2 },
      { text: "Ordering food from your favorite takeout place", score: 1 },
      { text: "Cuddling on the couch with your pet or S/O", score: 0 },
      { text: "Talking to a friend to vent out ", score: 0 },
    ],
  },
];

const introduction = (
  <>
    <i>"The greatest thing in the world is to know how to belong to oneself." — Michel de Montaigne </i>
    <br /> 
    In the pursuit of finding ourselves, we often isolate ourselves from the outside world. Sometimes, to a point, where it becomes difficult to differentiate between loneliness and solitude. Loneliness, typically concealed behind smiles and social appearances, is an emotion that can impact you and me — equally.
    <br /><br />
    It goes beyond the mere absence of others around us and transcends into the fragile connection we term — emotional connection. Watching out for signs of loneliness is a feat that requires not only inner factors of our hearts and minds but also external ones.
    <br />
    <h2>You can spot loneliness if you're;</h2>
    <li>Feeling disconnected from others</li>
    <li>Lacking meaningful connections and relationships</li>
    <li>Emotionally exhausted, drained, or numb</li>
    <li>Thinking negatively about your worthiness and self-image</li>
    <li>Struggling to maintain social connections</li>
    <li>Struggling to sleep, release stress, and keep up your appetite</li><br />
    <i>This information is just a Professional assessment of loneliness. For a formal assessment and diagnosis of chronic loneliness, it is recommended that you speak to a professional counselor or therapist.</i>
    <p style={{ fontSize: "18px", fontWeight:"bold"}}>Note: Calm Sage understands the importance of privacy. Your responses are not shared with any third-party website, so you can rest assured of your privacy.</p> 
    We also work diligently to provide you with instant results upon completing the test. The immediate result can help guide you to your next steps in seeking support and moving forward on the path of recovery. <br />
    <p style={{ fontSize: "18px", fontWeight: "bold" }}>Please note that this quiz is not an official test or diagnosis and can only offer an indication of your emotional loneliness levels. You should seek a mental health professional for an in-depth diagnosis.</p> 
    <i>Let's start!</i>
    <p style={{ fontSize: "35px"}}>Loneliness Quiz: Are You Feeling Lonely?</p>
    <h4><i>Important: It is advised that you don't skip any of the questions in the test. Just choose the answer that applies to you and try to be as honest as you can for the best result!</i></h4>
  </>
);

const resultMessages = {
  high: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "High Loneliness Score"
      </span>
      <br /><br />
      Your responses indicate that you may be experiencing significant feelings of loneliness. This is a common human experience, but it's important to address these feelings. Here are some suggestions that might help:
      <br /><br />
      • Consider reaching out to friends, family, or a mental health professional for support<br />
      • Join social groups or communities based on your interests<br />
      • Practice self-care and engage in activities you enjoy<br />
      • Consider volunteering or joining community activities<br />
      • Remember that feeling lonely doesn't mean you're alone - many people go through similar experiences<br />
      <br />
      If these feelings persist, speaking with a mental health professional can provide valuable support and strategies for managing loneliness.
    </span>
  ),
  medium: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Moderate Loneliness Score"
      </span>
      <br /><br />
      Your responses suggest that you experience moderate levels of loneliness. While you may have some social connections, you might benefit from strengthening your support network. Here are some suggestions:
      <br /><br />
      • Make an effort to maintain regular contact with friends and family<br />
      • Consider expanding your social circle through new activities or groups<br />
      • Focus on deepening existing relationships<br />
      • Practice open communication about your feelings with trusted people<br />
      • Engage in social activities that align with your interests<br />
      <br />
      Remember, it's normal to feel lonely sometimes, and there are always opportunities to build meaningful connections.
    </span>
  ),
  low: (
    <span>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        "Low Loneliness Score"
      </span>
      <br /><br />
      Your responses indicate that you generally maintain healthy social connections and experience low levels of loneliness. This suggests that:
      <br /><br />
      • You likely have a strong support network<br />
      • You're able to maintain meaningful relationships<br />
      • You feel connected to others in your life<br />
      • You're comfortable with both social interaction and solitude<br />
      • You have effective ways of managing feelings of loneliness when they arise<br />
      <br />
      Continue nurturing your relationships and maintaining the practices that help you stay connected. Remember that it's still normal to experience occasional feelings of loneliness, and that's okay.
    </span>
  )
};

const LonelinessQuiz = () => {
  return (
    <QuizTemplate
      questions={questions}
      title="Am I Lonely? Take Our Loneliness Test to Find Out!"
      introduction={introduction}
      resultMessages={resultMessages}
      scrollOffset={1100}
    />
  );
};

export default LonelinessQuiz;
