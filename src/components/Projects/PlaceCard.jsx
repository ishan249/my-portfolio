import { useContext, React } from "react";
import "./Projects.css";
import { DarkModeContext } from "../../DarkModeProvider";
import { useNavigate } from "react-router-dom";

function PlaceCard(props) {
  const { darkMode } = useContext(DarkModeContext);
  const handleNavigateToProject = (projectLink) => {
    window.open(projectLink, "_blank");
  };

  return (
    <div
      onClick={() => handleNavigateToProject(props.link)}
      role="button"
      style={{ backgroundColor: darkMode ? "rgb(31 41 55)" : "white" }}
      className="cardDiv rounded-2xl p-4 font-AlbertSans"
    >
      <img
        className="rounded-2xl proImage"
        src={props.image}
        alt="projectImage"
      />
      <div className="mt-4">


        <div className="mt-3 flex flex-col items-start space-y-2">
          <h1
            onClick={() => handleNavigateToProject(props.link)}
            style={{ color: darkMode ? "white" : "black" }}
            className="text-xl text-center font-bold px-1"
            role="button"
          >
            {props.title}
          </h1>
          <p
            style={{
              minHeight: "110px",
              color: darkMode ? "rgb(229 231 235)" : "rgb(31 41 55)",
            }}
            className="text-gray-500 text-base px-1 pb-2"
          >
            {props.description}
          </p>
        </div>
      </div>
      {/* <div className="text-center mt-8">
        <a
          className="px-6 pt-2 pb-2 mb-2 linkBtn"
          style={{
            color: darkMode ? "black" : "white",
            backgroundColor: darkMode ? "white" : "rgb(23, 23, 23)",
          }}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = darkMode ? "rgb(239, 239, 239)" : "#252525";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = darkMode ? "white" : "rgb(23, 23, 23)";
          }}
        >
          Link
        </a>
        <a
          className="px-6 pt-2 pb-2 mb-2 blogBtn"
          href={props.bloglink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div> */}
    </div>
  );
}

export default PlaceCard;
