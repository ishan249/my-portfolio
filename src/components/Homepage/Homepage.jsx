import React, { useContext } from "react";
import MyImage from "../../images/MyImage.jpeg"
import "./Homepage.css";
import { DarkModeContext } from "../../DarkModeProvider";
function Homepage() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="homepage-section">
      <div>
        <img src={MyImage} alt="myImage" className="MyImage" />
      </div>

    <div style={{ color: darkMode ? "white" : "black" }} className="mainName">
      Ishan Patel
      <div style={{ color: darkMode ? "white" : "#71717a" }} className="about-me">
      Full Stack Developer
    </div>
    </div>

   
    </div>
  );
}

export default Homepage;
