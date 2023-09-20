import React from "react";
import "../../componentStyle/FeedbackCard.css";
export default function FeedbackCard({ feedBackMessage, name }) {
  return (
    <div className="feedback-card-holder-name-content">
      <div className="feedback-card-name">{name}</div>
      <div className="feedback-card-content">{feedBackMessage}</div>
    </div>
  );
}
