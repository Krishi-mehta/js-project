import React from 'react';
import Footer from '../../footer/Footer';
import Img from '../../../assets/images/mental-health-awareness-concept_23-2148523714.jpg';
import logoImg from '../../../assets/images/logo.png';
import '../css-files/learnmore1.css';

function Learnmore1() {
  return (
    <div>
      <div className="navbar1">
        <img src={logoImg} alt="logo"height="120"
            width="120"
            className="logo" />
        {/* <h4 className="learnmore_h4">Mindful Mosaic</h4> */}
      </div>
      <div className="container_learnmore">
        <div className="img_1">
          <h2 className="learnmore_h2">SIGNS YOU NEED THERAPY</h2>
          <img src={Img} alt="img" />
        </div>
        <div className="content">
          <p classNameName='learnmore_p1'>At some point in your life, you may experience some amount of stress, anxiety, mood swings, and other forms of emotional distress due to various reasons such as financial difficulties, career-related difficulties, rejection, relationships, personal loss, or other difficulties. </p>

          <p classNameName='learnmore_p1'>
            The majority of the time, you are able to recover. However, other times you may require additional support and assistance to cope with these challenges. You may have even considered seeing a therapist at some point in the past. Perhaps you talked yourself out of it or convinced yourself that the problem will go away if you just waited a little longer. Or maybe you're still debating whether or not you should talk to someone, but you're not sure if it's your top priority right now.
          </p>

          <p classNameName='learnmore_p1'>
            Sometimes your experiences may make you feel low or stuck, making it difficult for you to "snap out of it". You may also notice some negative patterns in your lifestyle and approaches that you can't seem to break. Sometimes, the signs of mental or emotional distress are obvious. But other times, they are harder to pinpoint.
          </p>

          <p className="par">
            Some signs that you may need therapy:
          </p>

          <p className="par">
            You feel emotionally overwhelmed
          </p>

          <p classNameName='learnmore_p1'>
            If you feel like your emotions are intense, as if the regulator managing your emotions is at an all-time high - you are most likely overwhelmed. These intense emotional experiences can hinder your ability to think, act rationally, and even hamper your everyday activities.
          </p>

          <p className="par">
            You're experiencing changes in your sleep and appetite
          </p>

          <p classNameName='learnmore_p1'>
            Your physical and mental health go hand in hand. So if you are going through some emotionally sensitive experiences it is very likely that you will notice a change in your sleep and appetite patterns.
          </p>

          <p className="par">
            You start withdrawing from social situations and your relationships are impacted
          </p>

          <p classNameName='learnmore_p1'>
            You prefer withdrawing or being isolated from social situations or loved ones because
          </p>

          <p className="par">
            - You are feeling hopeless or demotivated
          </p>

          <p className="par">
            - You are unable to manage your thoughts and control your emotions
          </p>

          <p className="par">
            - Your performance or effectiveness at work or academics is suffering.
          </p>

          <p className="par">
            - You may find it difficult to concentrate
          </p>

          <p className="par">
            - You find yourself using unhealthy coping mechanisms
          </p>

          <p className="par">
            You are having trouble processing or adapting to any changes in your life
          </p>

          <p className="par">
            - You're experiencing a physical health condition that you need to cope with
          </p>

          <p className="par">
            - You have lost interest in activities that you used to enjoy
          </p>

          <p className="par">
            - You want to invest in your mental health
          </p>

          <p className="par">
            - You are seeking personal growth
          </p>

          <p className="par">
            It is a popular myth that people who are diagnosed with mental health concerns are the only ones who need therapy. However, that is completely untrue. Therapy is not only to provide support for people with diagnosed mental health concerns, but extends beyond the traditional approaches of labelling people into categories.
          </p>

          <p className="par">
            You can reap the possible benefits of psychotherapy even if you just feel that there is something "off" in your life that can be improved by consulting a mental health professional. Research has shown that psychotherapy is an effective form of treatment for some anxiety disorders, mood disorders, and eating disorders as well as grief and trauma.
          </p>

          <p className="par">
            You may be having problems juggling your large list of tasks due to life's challenges. You may be stressed and finding it tough to manage and digest all of your emotions. It's also possible that you're not dealing with them effectively-In all these situations, a therapist may assist you in navigating your emotions and equipping you with techniques to manage them.
          </p>

          <p classNameName='learnmore_p1'>
            Reach out for help when you need it, our mental health therapists are here for you.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Learnmore1;