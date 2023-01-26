import {React,useContext} from "react";
import "../Homepage/Homepage.css";
import "./Blogs.css";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { DarkModeContext } from "../../DarkModeProvider";
function Blogs() {
  const {darkMode} = useContext(DarkModeContext);

  return (
    <div>
      <div className="mainDiv">
        <div className="mainBody">
          <Navbar />
          <motion.div
           style={{color: darkMode? "white" : "black"}}
           initial={{opacity:0,translateX:-80}}
           animate={{opacity:1,translateX:0}}
           transition={{duration:0.8}}>
          <div className="firstBlog">
            Whenever I complete a project, I write a blog where I explain what
            things I did to create a website and make it work. I try to help by
            sharing useful resources and my github repositary via Hashnode
            blogs.💻
          </div>
          <div className="firstBlog">If you interested give it a read.</div>
          <a href="https://ishanpatel.hashnode.dev" style={{ marginLeft: "18px" }} className="hashnodeBtn" target="_blank"
            rel="noopener noreferrer">
           My Hashnode
          </a>
          </motion.div>
          <br />
          <motion.div
          style={{color: darkMode? "white" : "black"}}
           initial={{opacity:0,translateX:-80}}
           animate={{opacity:1,translateX:0}}
           transition={{duration:1}}>
          <div className="firstBlog">
            Other than that I sometimes write blogs in the form of newsletters,
            It includes my travel stories, Pop Culture, Opinions, Life
            experiences &#128151;
          </div>
          <div className="firstBlog">If you have time give it a read.</div>
          <a
            href="https://ishanpatel.substack.com"
            style={{
              marginLeft: "18px",
              backgroundColor: "rgb(250, 164, 3)",
              color: "white",
            }}
            className="substackBtn"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Substack
          </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
