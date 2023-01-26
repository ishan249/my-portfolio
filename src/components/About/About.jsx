import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import "../Homepage/Homepage.css";
import Footer from "../Footer/Footer";
import techData from "./techstackinfo";
import { motion } from "framer-motion";
import { DarkModeContext } from "../../DarkModeProvider";
function About() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className="mainDiv">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
          className="mainBody"
        >
          <div className="content-container">
            <Navbar />
            <div
              style={{ color: darkMode ? "white" : "black" }}
              className="font-AlbertSans text-lg mt-2 px-3 py-2"
            >
              I am Computer Science and Engineering student and I am in 3rd Year
              right now. I love creating full stack websites and creating some
              cool stuff which solve some real world problem so doing the same
              since 1 year. You can check out the projects I have done from
              Navbar.
            </div>
            <div
              style={{ color: darkMode ? "white" : "black" }}
              className="font-AlbertSans text-lg mt-2 p-2 font-bold"
            >
              Languages/Frameworks I use :
            </div>
            <div className="flex flex-wrap techStacks font-AlbertSans font-lg">
              {techData.map((techs, i) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-gray-300"
                  style={{
                    margin: "8px",
                    padding: "4px",
                    alignContent: "center",
                    textAlign: "center",
                    borderRadius: "8px",
                  }}
                >
                  <div className="flex justify-around m-1">
                    <span>
                      <img
                        height="20px"
                        width="20px"
                        src={techs.image}
                        alt=""
                      />
                    </span>
                    <span className="pl-2">{techs.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div
              style={{ color: darkMode ? "white" : "black" }}
              className="font-AlbertSans text-lg mt-2 mb-2 p-2"
            >
              I am also real nerd about TV shows and other pop culture things in
              general. Love to read blogs, books sometimes and scroll reddit all
              day.
            </div>
          </div>
          <div className="footer--pin">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
