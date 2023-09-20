import React from "react";
import "../../componentStyle/ProjectTechnologyCardHolder.css";

export default function ProjectTechnologyCardHolder({ technology }) {
  const technologySplit = technology.split(",");
  return (
    <div className="info-technology-card-holder">
      {technologySplit.map((item, index) => {
        return (
          <div className="info-technology-card" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
