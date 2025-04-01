import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './modules/dashboard/Dashboard';
import Aboutus from './modules/aboutus/Aboutus';
import Quiz from './modules/quiz/Quiz';
// import ForBusiness from './modules/forbusiness/ForBusiness';
import Blogs from './modules/blogs/Blogs';
import Contactus from './modules/contactus/Contactus';
import Faq from './modules/faqs/Faq';
import Learnmore1 from './modules/dashboard/components/Learnmore1';
import Learnmore2 from './modules/dashboard/components/Learnmore2';
import Learnmore3 from './modules/dashboard/components/Learnmore3';
import Main from './modules/main/Main';
import UserList from './modules/dashboard/UserList';
// import Read from './modules/carespace/Read';
import WriteAStory from './modules/writeastory/writeastory';
import AnxietyResults from './modules/dashboard/components/anxiety';
import StressResults from './modules/dashboard/components/stress';
import ActivityResults from './modules/dashboard/components/Activities';
import Depression from './modules/dashboard/components/Depression';
import MoodSwing from './modules/dashboard/components/MoodSwing';
import ScrollToTop from './modules/dashboard/components/ScrollToTop';
import RelationshipQuiz from './modules/quiz/RelationshipQuiz';
import LovelanguageQuiz from './modules/quiz/LovelanguageQuiz';
import LonelinessQuiz from './modules/quiz/LonelinessQuiz';
import ChildhoodTraum from './modules/quiz/ChildhoodTrauma';
import AnxietyQuiz from './modules/quiz/AnxietyQuiz';
import MentalAgeQuiz from './modules/quiz/MentalAgeQuiz';
import SleepQuiz from './modules/quiz/SleepQuiz';
import MentallyStrongQuiz from './modules/quiz/MentallyStrongQuiz';
import EmotionalTypeQuiz from './modules/quiz/EmotionalTypeQuiz';


const routes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/aboutus" element={<Aboutus />} />
          {/* <Route path="/forbusiness" element={<ForBusiness />} /> */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/learnmore1" element={<Learnmore1 />} />
          <Route path="/learnmore2" element={<Learnmore2 />} />
          <Route path="/learnmore3" element={<Learnmore3 />} />
          <Route path="/main" element={<Main />} />
          <Route path="/userlist" element={<UserList />} />
          {/* <Route path="/read" element={<Read />} /> */}
          <Route path="/writeastory" element={<WriteAStory/>} /> 
          <Route path='/anxiety' element={<AnxietyResults/>}></Route>
          <Route path='/stress' element={<StressResults/>}></Route>
          <Route path='/activities' element={<ActivityResults/>}></Route>
          <Route path='/depression' element={<Depression/>}></Route>
          <Route path='/moodswing' element={<MoodSwing/>}></Route>
          <Route path='/relationshipquiz' element={<RelationshipQuiz/>}></Route>
          <Route path='/lovelanguagequiz' element={<LovelanguageQuiz/>}></Route>
          <Route path='/lonelinessquiz' element={<LonelinessQuiz/>}></Route>
          <Route path='/childhoodtraumaquiz' element={<ChildhoodTraum/>}></Route>
          <Route path='/anxietyquizquiz' element={<AnxietyQuiz/>}></Route>
          <Route path='/mentalagequiz' element={<MentalAgeQuiz/>}></Route>
          <Route path='/sleepquiz' element={<SleepQuiz/>}></Route>
          <Route path='/mentallystrongquiz' element={<MentallyStrongQuiz/>}></Route>
          <Route path='/emotionaltypequiz' element={<EmotionalTypeQuiz/>}></Route>
      </Routes>
    </>
  )
}

export default routes
