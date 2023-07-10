import React, { useEffect, useState } from "react";
import "../../componentStyle/ProjectCard.css";
import ai from "../../assets/ai.png";
import ProjectTechnologyCard from "./ProjectTechnologyCard";
import ProjectInformation from "./ProjectInformation";

export default function ProjectCard() {
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);
  const handleOpenProjectInfo = () => {
    setShowProjectInfo(true);
  };
  const closeBackDrop = () => {
    setExitAnimation(true);
    setTimeout(() => {
      setShowProjectInfo(false);
    }, 1000);
  };
  useEffect(() => {
    setTimeout(() => {
      setExitAnimation(false);
    }, 1000);
  }, [exitAnimation]);
  return (
    <>
      <div className="project-card">
        <div className="project-card-mask">
          <button
            className="open-project-backDrop"
            onClick={handleOpenProjectInfo}
          >
            Show more
          </button>
        </div>
        <img src={ai} className="project-card-image" />
        <div className="project-card-name">Project Name : Pet Care</div>
        <div className="project-card-technology-holder">
          <ProjectTechnologyCard technologyName="react" />
          <ProjectTechnologyCard technologyName="HTML" />
          <ProjectTechnologyCard technologyName="CSS" />
          <ProjectTechnologyCard technologyName="JavaScript" />
        </div>
      </div>
      <ProjectInformation
        show={showProjectInfo}
        closeBackDrop={closeBackDrop}
        exitAnimation={exitAnimation}
      />
    </>
  );
}
