import { useContext, React } from "react";
import "./Projects.css";
import { DarkModeContext } from "../../DarkModeProvider";

function PlaceCard(props) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div style={{backgroundColor: darkMode? "rgb(31 41 55)" : "white", borderRadius: "16px" }} className="font-AlbertSans mainCard">
      <div style={ {borderRadius: "16px" }}>
        <img className="proImage" src={props.image} alt="" />
        <div className="px-4 py-4">
          <div style={{color: darkMode? "white" : "black"}} className="font-bold text-xl text-center mb-2">
            {props.title}
          </div>
          <p style={{ height: "110px",color: darkMode? "rgb(229 231 235)" : "rgb(31 41 55)" }} className="text-gray-700 text-base">
            {props.description}
          </p>
        </div>
        <div className="text-center mt-4">
          <a
            className="px-6 pt-2 pb-2 mb-2 linkBtn"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
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
    </div>
  );
}

export default PlaceCard;
