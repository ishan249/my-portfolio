import { useContext, React } from "react";
import "./Projects.css";
import { DarkModeContext } from "../../DarkModeProvider";

function PlaceCard(props) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      style={{ backgroundColor: darkMode ? "rgb(31 41 55)" : "white" }}
      className="cardDiv rounded-2xl p-4 font-AlbertSans"
    >
      <img
        className="rounded-2xl proImage"
        src={props.image}
        alt="projectImage"
      />
      <div className="mt-5">
        {props.tags.map((tag) => (
          <button
            style={{
              backgroundColor: tag.tagColor,
              boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            }}
            className="m-1 cursor-pointer rounded-full px-3 py-1 transition duration-500 ease-in-out hover:bg-gray-50"
          >
            <h6
              style={{ color: "black", opacity: "0.6" }}
              className="text-xs font-semibold"
            >
              {tag.tagName}
            </h6>
          </button>
        ))}

        <div className="mt-3 flex flex-col items-start space-y-5">
          <h1
            style={{ color: darkMode ? "white" : "black" }}
            className="text-xl text-center font-bold px-1"
          >
            {props.title}
          </h1>
          <p
            style={{
              height: "110px",
              color: darkMode ? "rgb(229 231 235)" : "rgb(31 41 55)",
            }}
            className="text-gray-500 text-base px-1"
          >
            {props.description}
          </p>
        </div>
      </div>
      <div className="text-center mt-8">
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
      </div>
    </div>
  );
}

export default PlaceCard;
