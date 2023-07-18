import React, { useEffect, useRef } from "react";
import "../../componentStyle/FeedbackHolder.css";
import FeedbackForm from "./FeedbackForm";
import FeedbackCard from "./FeedbackCard";

export default function FeedbackHolder() {
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
    <div className="feedback-holder" ref={contentHolderRef}>
      <div className="feedback-holder-word">
        Feedbacks <span className="word-color">:-</span>
      </div>
      <div className="feedback-holder-intro">
        Find feedback on my business! Ambitious Full Stack, I have poured my
        passion into this show. Your contribution is invaluable for improving
        and improving my work. Please take a moment to review and share your
        thoughts. Thank you!
      </div>
      <FeedbackForm />
      <div className="feedback-card-holder">
        <FeedbackCard /> <FeedbackCard /> <FeedbackCard /> <FeedbackCard />
      </div>
    </div>
  );
}
