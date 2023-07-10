import React, { useEffect, useRef } from "react";
import "../../componentStyle/ProjectHolder.css";
import ProjectCard from "./ProjectCard";

export default function ProjectHolder() {
  const contentHolderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (contentHolderRef.current) {
        contentHolderRef.current.style.height = `calc(${window.innerHeight}px - 4.2rem )`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="project-holder" ref={contentHolderRef}>
      <div className="project-holder-word">
        Projects <span className="word-color">:-</span>
      </div>
      <div className="project-card-holder">
        <ProjectCard />
        {/* <ProjectCard /> <ProjectCard />
        <ProjectCard />
        <ProjectCard /> <ProjectCard /> <ProjectCard /> <ProjectCard />{" "}
        <ProjectCard /> <ProjectCard /> <ProjectCard /> <ProjectCard />{" "}
        <ProjectCard /> <ProjectCard /> <ProjectCard /> <ProjectCard />{" "}
        <ProjectCard /> <ProjectCard /> <ProjectCard /> <ProjectCard />{" "}
        <ProjectCard /> <ProjectCard /> <ProjectCard /> <ProjectCard /> */}
      </div>
    </div>
  );
}
