import React from "react";
import { useNavigate } from "react-router-dom";

import WelcomeImage from "../../../assets/images/welcome-section.jpg";
import "../css-files/welcome_section.css";

const WelcomeSection = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-section-container">
      <section className="welcome-section">
        <div className="main-content">
          <h2 className="welcome_section_h2">
            Welcome to BetterYou
          </h2>
          <h1 className="welcome_section_h1">
            Be <span className="Bold-span">Kind</span> <br />{" "}
            <span className="span-2">
              To Your <span className="Bold-span">Mind</span>
            </span>
          </h1>
          {/* <div className="btn-one">
            <button className="button1" onClick={() => navigate("/main")}>START NOW</button>
          </div> */}
        </div>
        <div className="main-img">
          <img src={WelcomeImage} alt="picture" />
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
