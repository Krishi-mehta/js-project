import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import WelcomeSection from "./components/WelcomeSection";
import QuickSearch from "./components/QuickSearch";
import MentalHealth from "./components/MentalHealth";
import Steps from "./components/Steps";
import Help from "./components/Help";
import Carts from "./components/Carts";
import Footer from "../footer/Footer";
import axios from "axios";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    const justLoggedIn = sessionStorage.getItem("justLoggedIn");

    if (user) {
      setLoggedInUser(user);

      if (justLoggedIn === "true") {
        alert(`${user} just logged in`);
        sessionStorage.removeItem("justLoggedIn");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("token"); // <-- just in case
    sessionStorage.removeItem("justLoggedIn");
    alert("User logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <Header />

      <div style={{ padding: "1rem", textAlign: "right" }}>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <WelcomeSection />
      <QuickSearch />
      <MentalHealth />
      <Steps />
      <Help />
      <Carts />
      <Footer />
      <UserList users={users} />
    </div>
  );
};

export default Dashboard;
