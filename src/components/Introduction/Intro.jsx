import React, { useContext } from "react";
import "./Intro.css";
import "../Homepage/Homepage.css";
import { motion } from "framer-motion";
import { DarkModeContext } from "../../DarkModeProvider";
function Intro() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div>
      <div className="mainDiv">
        <div className="mainBody">
          <div className="text-center">
            <div style={{color: darkMode? "rgb(229 231 235)" : "rgb(31 41 55)"}} className="tagLine p-2 font-AlbertSans">
              I build useful websites and cool stuff for the web.
            </div>
            <div className="text-left p-4 font-AlbertSans">
              <motion.li
              style={{color: darkMode? "white" : "black"}}
                initial={{ opacity: 0, translateX: 100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8 }}
                className="introText mx-2 py-2"
              >
                MERN stack developer who can create fast and scalable websites.{" "}
                <a
               style={{color: darkMode? "rgb(94 234 212)" : "rgb(2 132 199)"}}
                  className="underline"
                  href="https://drive.google.com/file/d/1Qq6gR23FewbyzT6OOi2aM-I8IFVBJkTg/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>{" "}
              </motion.li>
              <motion.li
               style={{color: darkMode? "white" : "black"}}
                initial={{ opacity: 0, translateX: 100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration:1.2 }}
                className="mx-2 introText py-2"
              >
                I mostly love to code everything related to
                Frontend structure of the website.{" "}
              </motion.li>
              <motion.li
               style={{color: darkMode? "white" : "black"}}
                initial={{ opacity: 0, translateX: 100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.4 }}
                className="mx-2 introText py-2"
              >
                Learning new frameworks so that I can create better websites.
                Sharing my learnings through my technical blogs on{" "}
                <a
               style={{color: darkMode? "rgb(94 234 212)" : "rgb(2 132 199)"}}

                  className="underline"
                  href="https://ishanpatel.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  hashnode
                </a>
                .{" "}
              </motion.li>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
