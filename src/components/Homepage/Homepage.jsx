import React, { useContext } from "react";
import Intro from "../Introduction/Intro";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HomePageBtn from "../Introduction/HomePageBtn";
import "./Homepage.css";
import { DarkModeContext } from "../../DarkModeProvider";
function Homepage() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className="mainDiv">
      <div  className="mainBody">
        <div className="content-container">
          <Navbar />
          <div style={{color: darkMode? "white" : "black"}} className="mainName">
            Hi<span className="wave">👋</span>, I am{" "}
            <span className="name">Ishan</span>.
          </div>
          <Intro />
          <HomePageBtn/>
        </div>
        <footer className="footer--pin">
        <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
