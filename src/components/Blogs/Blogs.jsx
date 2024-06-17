import { React, useContext } from "react";
import "../Homepage/Homepage.css";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DarkModeContext } from "../../DarkModeProvider";
import blogsData from "./MyBlogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Blogs() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <motion.div
        style={{ color: darkMode ? "white" : "black" }}
        initial={{ opacity: 0, translateX: -80 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="firstBlog text-3xl font-bold my-4">
          Blogs on tech, life, and learnings
        </div>
        <div className="firstBlog">
        All of my thoughts on programming, building projects, life, and other random stuff. Not structured. Not in order.💻
        </div>
       {/* <a
          href="https://ishanpatel.hashnode.dev"
          style={{ marginLeft: "18px" }}
          className="hashnodeBtn"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Hashnode
        </a> */}
      </motion.div>
      <br />
      <motion.div
        style={{ color: darkMode ? "white" : "black" }}
        initial={{ opacity: 0, translateX: -80 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >
        {blogsData.map((blog) => (
          <div key={blog.id} className="firstBlog">
            <Link to={`/blogs/${blog.slug}`} className="text-lg font-semibold">{blog.title}</Link>
            <div className="text-lg text-zinc-600 font-medium">{blog.summary}</div>
            <Link className="flex content-center  mt-2" to={`/blogs/${blog.slug}`}>
              <div className="mr-2">Read More</div>
              <div>
              <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Blogs;
