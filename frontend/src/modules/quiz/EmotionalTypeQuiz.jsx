import React from "react";
import QuizTemplate from "./components/QuizTemplate";
import Intellectual from "../../assets/icons/The-Intellectual--300x300.png"
import Empath from "../../assets/icons/The-Empath--300x300.png"
import Gusher from "../../assets/icons/The-Gusher-300x300.png"
import Rock from "../../assets/icons/The-Rock-300x300.png"

const questions = [
  {
    question:
      "Which quality describes you?",
    options: [
        { text: "Logical", score: 3 },
        { text: "Sensitive", score: 2 },
        { text: "Affectionate", score: 1 },
        { text: "Energetic", score: 0 },
    ],
  },
  {
    question:
      "Do you get hurt easily?",
    options: [
      { text: "Not openly", score: 3 },
      { text: "Very easily", score: 2 },
      { text: "I do but when others are hurt", score: 1 },
      { text: "I do but I try not to", score: 0 },
    ],
  },
  {
    question:
      " How would you describe your emotional response to a situation?",
    options: [
      { text: "Calm in emotionally heated situations", score: 3 },
      {
        text: "Emotionally responsive",
        score: 2,
      },
      {
        text: "Emotionally strong",
        score: 1,
      },
      { text: "Very expressive", score: 0 },
    ],
  },
  {
    question:
      " When someone wrongs you, how do you react?",
    options: [
      { text: "You withdraw from them", score: 3 },
      { text: "You try to understand their point of view", score: 2 },
      { text: "You harbor anger and frustration", score: 1 },
      { text: "You react dramatically", score: 0 },
    ],
  },
  {
    question:
      "When in a conflict, what do you do?",
    options: [
      { text: "Obsess about problems", score: 3 },
      {
        text: "Absorb others’ negativity",
        score: 2,
      },
      {
        text: "Avoid conflict than confront it",
        score: 1,
      },
      { text: "React depending on others’ reaction", score: 0 },
    ],
  },
  {
    question:
      " When you work on a project, what role do you prefer to play?",
    options: [
      { text: "Be in charge", score: 3 },
      { text: "Let others be in charge", score: 2 },
      {
        text: "Work alone",
        score: 1,
      },
      { text: "Share responsibility", score: 0 },
    ],
  },
  {
    question:
      "When buying a gift for a friend or S/O, what do you look for the most?",
    options: [
      { text: "Something practical", score: 3 },
      { text: "Something romantic or sensual", score: 2 },
      { text: "Something personal", score: 1 },
      { text: "Something common", score: 0 },
    ],
  },
  {
    question:
      "What do you mostly daydream about?",
    options: [
      { text: "Solutions to problems", score: 3 },
      { text: "Love", score: 2 },
      {
        text: "Family",
        score: 1,
      },
      { text: "Success or fame", score: 0 },
    ],
  },
  {
    question:
      "You enjoy stories that have…",
    options: [
      { text: "A definitive ending", score: 3 },
      { text: "Something happy or romantic", score: 2 },
      { text: "Something you can relate with", score: 1 },
      { text: "Something that makes you come up with ending", score: 0 },
    ],
  },
  {
    question:
      "The idea of being close to someone makes you feel…",
    options: [
      { text: "Uncomfortable", score: 3 },
      { text: "Happy", score: 2 },
      { text: "Indifferent", score: 1 },
      { text: "Reassuring", score: 0 },
    ],
  },
  {
    question:
      "If you could be an animal, which one would you like to be?",
    options: [
      { text: "Owl", score: 3 },
      { text: "Elephant", score: 2 },
      { text: "Cat", score: 1 },
      { text: "Horse", score: 0 },
    ],
  },
  {
    question:
      " If your partner/friend is upset, what do you feel like doing?",
    options: [
      { text: "Helping them find solutions to their problems", score: 3 },
      { text: "Give them a shoulder to cry on", score: 2 },
      { text: "Be there for them and give them the support they ask for", score: 1 },
      { text: "Distract them from their problems", score: 0 },
    ],
  },
  {
    question:
      "Which affects your emotions the most?",
    options: [
      { text: "Watching a movie", score: 3 },
      { text: "Reading a book", score: 2 },
      { text: "Nothing specific", score: 1 },
      { text: "Anything and everything", score: 0 },
    ],
  },
];

const introduction = (
  <>
    <p className="relationship-p">
    One of the best powers we humans have is our emotions. Those emotions blend into us making us express our thoughts in ways we can’t always verbally explain. Learning our feelings and how they react to our situations helps us unravel our personalities and how we interact in the relationships we build. <br /> <br />
    To help you understand how emotions reframe our interactions and every relationship in our lives, here are the four emotional types that you should know about.  <br /><br />
    Don’t forget to scroll down to take our “What Is Your Emotional Type?” Quiz to help you further understand who you are, emotionally and how you can balance your emotional type. 
    <br /><p style={{ fontSize: "25px", fontWeight: "bold" }}>The 4 Emotional Types And How To Manage Them 
    </p><ol type="ordered">
          <li style={{fontWeight:"bold"}}>The Intellectual </li>The intellectual is the emotional type who is bright and articulate and can be described as an analyst. They like to see the world in a rational light and are known to keep a cool mind in tough situations. The intellectual also struggles with emotions and intuition and is slow to open up to others and be playful.<br /><br />
          <li style={{fontWeight:"bold"}}>The Empath </li>Also known as an emotional sponge, The Empaths are extremely sensitive, supportive, caring, and loving. They are finely tuned to their (as well as others’) emotions and feel everything too deeply. Sometimes, the depth of their feelings can be considered extreme and can eventually drain their emotional energy. <br /><br />
          <li style={{fontWeight:"bold"}}>The Rock </li>They are the strong and silent type, dependable, and always there for you. The Rocks’ presence in your life can make others feel assured and free to express their true self without feeling or fearing judgment. However, The Rock emotional type often struggles with expressing their emotions and feelings and might have trouble connecting with others in a relationship. <br /><br />
          <li style={{fontWeight:"bold"}}>The Gusher </li>The Gusher emotional type is the one who is finely attuned to their emotions and are comfortable sharing them with others. They don’t leave anyone wondering what page they are on and can quickly forgive others. One of their faults is that they tend to overshare and seem to depend a lot on external validation instead of their intuition. <br />
          </ol>
          <p>
          Now that you’re aware of the 4 emotional types, let’s take a fun quiz to find out what is your emotional type is. Don’t forget to seek the result and share that with your loved ones to help them better understand you! 
          </p>
          Instructions: Please try to answer each of the questions below as honestly as you can. We ask you to be honest to deliver an accurate result. 
        </p>
  </>
);

const resultMessages = {
  high: (
    <span>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>"The result of your Emotional Type are in." Here they are: <br />
        Emotional Type: The Intellectual</p>
      
      <img src={Intellectual} alt="The Intellectual" />
      <p style={{fontWeight:"bold",fontSize:"20px"}}>Fun Fact About The Intellectual</p>
      You are eloquent, quick-witted, reasonable, and quite analytical in your approach to thinking. You often seek out the logic to understand anything difficult and as your coping mechanism. You are comfortable solving problems with a rational mind and can stay calm and composed even during the toughest circumstances.
      <br /><br />
      <span style={{fontWeight:"bold",fontSize:"20px"}}>What You Have Most Difficulty With</span><br />
      However, you can find it difficult to connect with your emotions as well as those around you. You might even appear cold and unapproachable to others. And you can be quite serious in situations that might demand a little bit of fun.
      <br /><br />
      <span style={{fontSize:"18px", fontWeight:"bold"}}>Next Steps</span><br />
      <li>Spending time learning about yourself – physical, spiritual, and emotional.</li>
      <li>Practicing breathing exercises – simple coherent breathing can help.</li>
      <li>Trying athletic activities such as roller skating, aerobics, jogging, etc.</li>
      <li>Improving your empathy skills.</li>
    </span>
  ),
  moderate: (
    <span>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>"The result of your Emotional Type are in." Here they are: <br />
      Emotional Type: The Empath</p>
      
      <img src={Empath} alt="The Empath" />
      <p style={{fontWeight:"bold",fontSize:"20px"}}>Fun Fact About The Empath</p>
      You are sensitive, giving, emotionally attuned, and a very good listener. You can be described as a helper, a friend, and an intuitive person. You are passionate about everything you do and keep in mind others’ feelings and emotions. You respond with your emotions first and head later. You are also your loved ones’ cheerleader.
      <br /><br />
      <span style={{fontWeight:"bold",fontSize:"20px"}}>What You Have Most Difficulty With</span><br />
      However, because of your penchant to be attuned emotionally to others, you absorb others’ negativity too, are prone to anxious feelings, can easily get tired, and have discerning boundaries with others.
      <br /><br />
      <span style={{fontSize:"18px", fontWeight:"bold"}}>Next Steps</span><br />
      <li>Practicing healthy and positive self-talk (using logic more than emotions to lead).</li>
      <li>Allowing yourself to sit in meditation to understand your emotions first.</li>
      <li>Setting boundaries with others. It is one of the best ways to protect yourself from others taking advantage of your good nature.</li>
    </span>
  ),
  medium: (
    <span>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>"The result of your Emotional Type are in." Here they are: <br />
      Emotional Type: The Gusher</p>
      
      <img src={Gusher} alt="The Gusher" />
      <p style={{fontWeight:"bold",fontSize:"20px"}}>Fun Fact About The Gusher</p>
      You are emotionally comfortable in your skin and feel at ease at sharing them as often as you can with others. You are an adventurous person, direct in your approach, and don’t shy away from being your true self in front of others. You are emotionally communicative, forgive and forget easily, have quite a network of supportive people, value emotionally intimate relationships, and can process tough situations with little to no effort.
      <br /><br />
      <span style={{fontWeight:"bold",fontSize:"20px"}}>What You Have Most Difficulty With</span><br />
      However, you can be quite dramatic and may excessively rely on others for validation. You tend to seek external feedback more often than you tend to rely on your intuition. Sometimes, the comfort you feel with your emotions might make you overshare.
      <br /><br />
      <span style={{fontSize:"18px", fontWeight:"bold"}}>Next Steps</span><br />
      <li>Practicing exercises that help you improve your self-reliance.</li>
      <li>Learning to lean into your intuition and trust your gut.</li>
      <li>TLearning to forgive yourself and emotional reliability.</li>
      <li>Practicing positive self-talk to negate your insecurities.</li>
    </span>
  ),
  low: (
    <span>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>"The result of your Emotional Type are in." Here they are: <br />
      Emotional Type: The Rock</p>
      
      <img src={Rock} alt="The Rock" />
      <p style={{fontWeight:"bold",fontSize:"20px"}}>Fun Fact About The Rock</p>
      You are the rock everyone can lean on – for their emotional as well as other needs. You like to stay strong for yourself and your loved ones while keeping your calm and non-judgmental personality. You like to think about practicality, first and foremost. You are also capable of being loyal, respectful, and cooperative to others.
      <br /><br />
      <span style={{fontWeight:"bold",fontSize:"20px"}}>What You Have Most Difficulty With</span><br />
      However, you can often feel detached from your feelings, feel anger and frustration frequently, and try to stay as non-confronting as possible. The relationships you build might lack a certain depth and you avoid making new ways for challenges.
      <br /><br />
      <span style={{fontSize:"18px", fontWeight:"bold"}}>Next Steps</span><br />
      <li>Being as spontaneous as you can. It’s OK to go on little adventures to stir things up.</li>
      <li>Expressing your feelings one day at a time. Try journaling or similar activity where you can express your feelings.</li>
      <li>Initiating emotional interactions for a change. Maybe it’s time you can express yourself or lean on others.</li>
    </span>
  ),
};

const MentallyStrongQuiz = () => {
  return (
    <QuizTemplate
      questions={questions}
      title="What Is Your Emotional Type? Find Out!"
      introduction={introduction}
      resultMessages={resultMessages}
      scrollOffset={1100}
    />
  );
};

export default MentallyStrongQuiz;
