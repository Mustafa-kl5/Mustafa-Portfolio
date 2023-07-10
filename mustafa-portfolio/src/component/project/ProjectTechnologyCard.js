import React from "react";
import "../../componentStyle/ProjectTechnologyCard.css";

export default function ProjectTechnologyCard(props) {
  return <div className="project-technology-card">{props.technologyName}</div>;
}
