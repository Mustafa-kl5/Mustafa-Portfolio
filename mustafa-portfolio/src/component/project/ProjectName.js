import React, { useEffect, useState } from "react";
import "../../componentStyle/ProjectName.css";
import ProjectInformation from "./ProjectInformation";

export default function ProjectName(props) {
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExitAnimation(false);
    }, 1000);
  }, [exitAnimation]);
  return (
    <>
      <div className="project-card-name">
        <div> Project Name : {props.cardData.projectName}</div>
        <div className="more-container">
          <button
            className="more-button"
            onClick={() => {
              setShowProjectInfo(true);
            }}
          >
            Show more..
          </button>
        </div>
      </div>

      <ProjectInformation
        projectData={props.cardData}
        show={showProjectInfo}
        closeBackDrop={() => {
          setExitAnimation(true);
          setTimeout(() => {
            setShowProjectInfo(false);
          }, 1000);
        }}
        exitAnimation={exitAnimation}
      />
    </>
  );
}
