import React from "react";
import "../../componentStyle/FeedbackForm.css";
export default function FeedbackForm() {
  return (
    <>
      <form className="feedback-form-holder">
        <input placeholder="Name" className="feedback-form-holder-input" />
        <input placeholder="Email" className="feedback-form-holder-input" />
        <textarea
          placeholder="Please write your feedback here..."
          className="feedback-form-holder-textarea"
        />
        <button className="submit-button" type="button">
          Submit <div className="download-icon-submit" />
        </button>
      </form>
    </>
  );
}
