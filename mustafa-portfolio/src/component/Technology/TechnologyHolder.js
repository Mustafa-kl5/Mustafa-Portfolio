import React, { useEffect, useRef } from "react";
import "../../componentStyle/TechnologyHolder.css";
import TechnologyCard from "./TechnologyCard";

export default function TechnologyHolder() {
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
    <div className="technology-holder" ref={contentHolderRef}>
      <div className="technology-holder-word">
        Technology <span className="word-color">:-</span>
      </div>
      <div className="technology-holder-paragraph">
        My portfolio reflects a harmonious blend of technology and creativity.
        Through innovative tools, I create captivating designs and interactive
        experiences that resonate with viewers. Continuously evolving, my
        portfolio stays at the forefront of digital trends.
      </div>
      <div className="technology-card-holder">
        <TechnologyCard /> <TechnologyCard /> <TechnologyCard />
        <TechnologyCard /> <TechnologyCard /> <TechnologyCard />{" "}
        <TechnologyCard />
        <TechnologyCard /> <TechnologyCard /> <TechnologyCard />{" "}
        <TechnologyCard />
        <TechnologyCard /> <TechnologyCard /> <TechnologyCard />{" "}
        <TechnologyCard />
        <TechnologyCard />
      </div>
    </div>
  );
}
