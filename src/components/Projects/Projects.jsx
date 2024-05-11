import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

import "./ProjectInfo.js";
import projectInfo from "./ProjectInfo.js";
import PlaceCard from "./PlaceCard";
import Navbar from "../Navbar/Navbar";
import { DarkModeContext } from "../../DarkModeProvider";
function Projects() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="flex flex-wrap justify-around">
      {projectInfo.map((project, i) => (
        <motion.div
          initial={{ opacity: 0, translateX: -80 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.1 * i }}
        >
          <PlaceCard
            key={project.id}
            image={project.imageUrl}
            link={project.projectLink}
            title={project.ProjectTitle}
            description={project.projectDescription}
            bloglink={project.ProjectBlog}
            tags={project.tags}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
