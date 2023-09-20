import React from "react";
import "../componentStyle/Card.css";

export default function Card({ children, cardImage }) {
  return (
    <div className="card">
      <img className="card-image" src={cardImage} />
      {children}
    </div>
  );
}
