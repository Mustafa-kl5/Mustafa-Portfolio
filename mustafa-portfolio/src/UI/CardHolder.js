import React from "react";
import "../componentStyle/CardHolder.css";

export default function CardHolder({ children }) {
  return (
    <div className="card-container">
      <div className="card-holder">{children}</div>
    </div>
  );
}
