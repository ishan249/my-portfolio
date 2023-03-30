import React, { useContext } from "react";
import "./Contact.css";
import "../Homepage/Homepage.css";
import githubLogo from "../../images/github-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import twitterLogo from "../../images/twitter.png";
import gmailImg from "../../images/gmail.png";
import peerlistImg from "../../images/favicon_512.png";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { DarkModeContext } from "../../DarkModeProvider";
function Contact() {
  const { darkMode } = useContext(DarkModeContext);
  const info = [
    
    {
      link: "mailto:249patelishan@gmail.com",
      image: gmailImg,
      name: "249patelishan@gmail.com",
    },
    {
        link: "https://github.com/ishan249",
        image: githubLogo,
        name: "ishan249",
      },
    {
      link: "https://www.linkedin.com/in/ishan-patel-2b7062201/",
      image: linkedinLogo,
      name: "ishan-patel-2b7062201",
    },
    {
      link: "https://twitter.com/Ishanp249",
      image: twitterLogo,
      name: "Ishanp249",
    },
    {
      link: "https://peerlist.io/ishan24/",
      image:  peerlistImg ,
      name: "ishan24",
    },
   
  ];
  return (
    <div className="mainDiv">
      <div className="mainBody">
        <Navbar />
        <div
          style={{ color: darkMode ? "white" : "black" }}
          className="text-center font-AlbertSans text-2xl m-4"
        >
          Connect with me at:
        </div>
        <div className="flex flex-wrap justify-center">
          {info.map((contact, i) => (
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="font-AlbertSans bg-gray-200 hover:bg-gray-100"
                style={{
                  margin: "8px",
                  padding: "6px",
                  borderRadius: "24px",
                  border: "1px black solid",
                }}
              >
                <div
                  style={{ width: "260px" }}
                  className="flex justify-start m-1"
                >
                  <span>
                    <img
                      height="20px"
                      width="20px"
                      src={contact.image}
                      alt=""
                    />
                  </span>
                  <span className="pl-2">{contact.name}</span>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
