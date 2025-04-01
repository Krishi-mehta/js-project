import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import WelcomeSection from './components/WelcomeSection';
import QuickSearch from './components/QuickSearch';
import MentalHealth from './components/MentalHealth';
// import Areaofexpertise from './components/Areaofexpertise';
import Steps from './components/Steps';
import Help from './components/Help';
import Carts from './components/Carts';
import Footer from '../footer/Footer';
import axios from 'axios';
import UserList from './UserList'; // Corrected import path

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend API
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <WelcomeSection />
      <QuickSearch/>
      <MentalHealth />
      {/* <Areaofexpertise/> */}
      <Steps/>
      <Help/>
      <Carts/>
      <Footer/>
      {/* Render the UserList component and pass the users data */}
      <UserList users={users} />
    </div>
  );
}

export default Dashboard;
