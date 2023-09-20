import React from "react";
import "../../componentStyle/ProjectInformation.css";
import ProjectDescription from "./ProjectDescription";
import ProjectImages from "./ProjectImages";
import ProjectTechnologyCardHolder from "./ProjectTechnologyCardHolder";
import ProjectLinks from "./ProjectLinks";
export default function ProjectInformation(props) {
  const handleCloseProjectBackDrop = () => {
    props.closeBackDrop();
  };

  return props.show ? (
    <div className="project-info-main-holder ">
      <div
        className={`project-info-holder animate__animated ${
          props.exitAnimation
            ? " animate__slideOutDown "
            : " animate__slideInUp "
        }`}
      >
        <div
          className="project-info-name-close"
          onClick={handleCloseProjectBackDrop}
        >
          <div className="project-info-name">
            {props.projectData.projectName}
          </div>
          <div className="project-info-close" />
        </div>
        <div className="data-holder">
          <ProjectImages images={props.projectData.images} />
          <ProjectDescription description={props.projectData.description} />
          <ProjectTechnologyCardHolder
            technology={props.projectData.technologyUsed}
          />
          <ProjectLinks
            projectDemo={props.projectData.projectLink}
            projectSource={props.projectData.projectGithubRepo}
          />
        </div>
      </div>
    </div>
  ) : null;
}
