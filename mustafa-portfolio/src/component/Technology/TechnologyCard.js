import React from "react";
import "../../componentStyle/TechnologyCard.css";
import ai from "../../assets/ai.png";
export default function TechnologyCard() {
  return (
    <div className="technology-card">
      {/* <div className="technology-card-image-holder"> */}
      <div className="technology-card-image" />
      {/* </div> */}

      <div className="technology-card-name-proficiency-level">
        <div className="technology-name">
          Technology Name :<span className="word-color"> React</span>
        </div>
        <div className="technology-proficiency-level">
          Proficiency level :<span className="word-color"> Expert</span>
        </div>
        <div className="technology-years-of-experience">
          <span className="word-color">5 </span> years of experience
        </div>
      </div>
    </div>
  );
}
