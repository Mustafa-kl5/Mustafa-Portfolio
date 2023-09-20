import React from "react";
import "../../componentStyle/TechnologyInformation.css";
import ai from "../../assets/ai.png";
export default function TechnologyInformation({
  techName,
  techLevel,
  techExperience,
}) {
  return (
    <div className="technology-card-name-proficiency-level">
      <div className="technology-name">
        Technology Name :<span className="word-color"> {techName}</span>
      </div>
      <div className="technology-proficiency-level">
        Proficiency level :<span className="word-color"> {techLevel}</span>
      </div>
      <div className="technology-years-of-experience">
        <span className="word-color">{techExperience} </span> years of
        experience
      </div>
    </div>
  );
}
