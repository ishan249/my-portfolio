import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import themechange from "../../images/moon.png";
import darkThemeImg from "../../images/night-mode.png";
import { DarkModeContext } from "../../DarkModeProvider";

function Navbar() {
  const {darkMode,setDarkMode} = useContext(DarkModeContext);
  const handleTheme = ()=>{
    setDarkMode(!darkMode);
    if(!darkMode){
      document.body.style.backgroundColor= " rgb(17 24 39)"
    }
    else{
      document.body.style.backgroundColor= "white"

    }
  }
  const styles = {
    color: darkMode? "white" : "black",
    textDecoration: darkMode ? "white" : "black",
  };

  return (
    <div>
      <div
        className="font-AlbertSans navbar text-base flex justify-center"
      >
        <div style={styles} className="navlinks">
          <NavLink to="/">Home</NavLink>
        </div>
        <div style={styles} className="navlinks">
          <NavLink to="/About">About</NavLink>
        </div>
        <div style={styles} className="navlinks">
          <NavLink to="/Projects">Projects</NavLink>
        </div>
        <div className="navlinks">
          <button onClick={handleTheme}>
            {darkMode?<img height="24px" width="24px" style={{color:"white",borderRadius:"50%"}} src={themechange} alt="" />:<img height="24px" width="24px" style={{color:"white",borderRadius:"50%"}} src={darkThemeImg} alt="" />}        
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
