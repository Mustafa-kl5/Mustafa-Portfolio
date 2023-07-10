import React from "react";
import "../../componentStyle/ProjectInformation.css";

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
          <div className="project-info-name">PetCare</div>
          <div className="project-info-close" />
        </div>
      </div>
    </div>
  ) : null;
}
