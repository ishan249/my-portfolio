import React, { useContext } from "react";
import MyImage from "../../images/MyImage.jpeg";
import "./Homepage.css";
import { DarkModeContext } from "../../DarkModeProvider";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectInfo from "../Projects/ProjectInfo";
import blogsData from "../Blogs/MyBlogs";
function Homepage() {
  const { darkMode } = useContext(DarkModeContext);
const navigate = useNavigate();
  
  return (
    <div className="homepage-section">
      <div>
        <img src={MyImage} alt="myImage" className="MyImage" />
      </div>

      <div style={{ color: darkMode ? "white" : "black" }} className="mainName">
        Ishan Patel
        <div
          style={{ color: darkMode ? "white" : "#71717a" }}
          className="about-me"
        >
          Frontend developer with a keen curiosity for full-stack development.
          <br />
          Building for the web and always refining code to mock
          perfection.&#128516;
        </div>
      </div>

      <div className="mt-8 font-AlbertSans home-sections">
        <span className="font-bold ">About me.</span>
        <div style={{ color: darkMode ? "white" : "#71717a" }} className="mt-1">
          I am a Web Developer who loves to create different kind of things for
          the web. Always keen about better state management techniques on
          client side, writing reusable code, increasing speed, optimization and
          much more.
        </div>
        <div style={{ color: darkMode ? "white" : "#71717a" }} className="mt-6">
          Love to Write, Watch TV shows, Sitcoms, Deepdive into Reddit theories and crazy internet stuff on weekends.
        </div>
      </div>

      <div className="mt-8 font-AlbertSans home-sections">
        <span className="font-bold ">Blogs.</span>
        <div className="mt-3">
          {blogsData.map((blog) => (
            <>
              <Link to={`/blogs/${blog.slug}`} className="blog-links">{blog.title}</Link>
              <div
                style={{ color: darkMode ? "white" : "#71717a" }}
                className="blog-description"
              >
                {blog.summary}
              </div>
            </>
          ))}

          <button
            type="button"
            className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-md px-3 py-2 mb-2"
            onClick={()=> navigate("/Blogs")}

          >
            View All
          </button>
        </div>
      </div>


      <div className="mt-8 font-AlbertSans home-sections">
        <span className="font-bold ">Projects.</span>
        <div className="mt-3">
          {projectInfo.slice(0,2).map((project) => (
            <>
              <div role="button" onClick={()=>window.open(project.projectLink, "_blank")} className="blog-links">{project.ProjectTitle}</div>
              <div
                style={{ color: darkMode ? "white" : "#71717a" }}
                className="blog-description"
              >
                {project.projectDescription}
              </div>
            </>
          ))}

          <button
            type="button"
            className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-md px-3 py-2 mb-2"
            onClick={()=> navigate("/Projects")}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
