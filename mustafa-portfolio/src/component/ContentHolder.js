import React, { useEffect, useRef } from "react";
import "../componentStyle/ContentHolder.css";
import "animate.css";

export default function ContentHolder(props) {
  const contentHolderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (contentHolderRef.current) {
        contentHolderRef.current.style.height = `calc(${window.innerHeight}px )`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={contentHolderRef}
      className={`content-holder animate__animated ${
        props.exitsAnimation
          ? "  animate__slideOutLeft"
          : "  animate__slideInLeft"
      }`}
    >
      {props.children}
    </div>
  );
}
