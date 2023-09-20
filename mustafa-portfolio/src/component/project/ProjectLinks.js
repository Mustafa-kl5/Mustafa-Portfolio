import React from "react";
import "../../componentStyle/ProjectLinks.css";
import { notify } from "../../Helper/Notify";

export default function ProjectLinks({ projectDemo, projectSource }) {
  const clickHandler = (link) => {
    if (link === "None") {
      notify("Sorry...Project is not hosted yet.");
      return;
    }
  };
  const clickHandlerGithub = (link) => {
    if (link === "None") {
      notify("sorry...the source code is not public.");
      return;
    }
    window.open(link, "_blank");
  };
  return (
    <div className="links-technology-card-holder">
      <div>
        Project Demo :
        <span
          className="info-project-link"
          onClick={() => {
            clickHandler(projectDemo);
          }}
        >
          Click Here..
        </span>
      </div>
      <div>
        Project Source :
        <span
          onClick={() => {
            clickHandlerGithub(projectSource);
          }}
          className="info-project-link"
        >
          Click Here..
        </span>
      </div>
    </div>
  );
}
