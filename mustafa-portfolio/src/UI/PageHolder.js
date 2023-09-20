import React, { useRef, useEffect } from "react";
import useResize from "../hooks/useResize";
import "../componentStyle/PageHolder.css";

export default function PageHolder({ children, pageTitle, pageParagraph }) {
  const { contentHolderRef } = useResize();
  return (
    <div className="page-holder" ref={contentHolderRef}>
      <div className="pageTitle">
        {pageTitle} <span className="word-color">:-</span>
      </div>
      <div className="page-paragraph">{pageParagraph}</div>
      {children}
    </div>
  );
}
