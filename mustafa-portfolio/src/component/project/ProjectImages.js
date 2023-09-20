import React, { useState } from "react";
import "../../componentStyle/ProjectImages.css";
import ai from "../../assets/ai.png";

export default function ProjectImages({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="project-images-holder">
      <div
        style={{ backgroundImage: `url("${images[activeIndex].fileName}")` }}
        className="info-project-images"
      />
      <div className="arrow-holder">
        <div
          className="left arrow"
          onClick={() => {
            if (activeIndex + 1 === 1) {
              setActiveIndex(images.length - 1);
            } else {
              setActiveIndex(activeIndex - 1);
            }
          }}
        />
        <div className="image-number">
          {activeIndex + 1}/{images.length}
        </div>
        <div
          className="right arrow"
          onClick={() => {
            if (activeIndex === images.length - 1) {
              setActiveIndex(0);
            } else {
              setActiveIndex(activeIndex + 1);
            }
          }}
        />
      </div>
    </div>
  );
}
