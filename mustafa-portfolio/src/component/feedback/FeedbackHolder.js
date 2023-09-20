import React from "react";
import "../../componentStyle/FeedbackHolder.css";
import FeedbackForm from "./FeedbackForm";
import FeedbackCard from "./FeedbackCard";
import NoDataFound from "../NoDataFound";
import PageHolder from "../../UI/PageHolder";

export default function FeedbackHolder({ data }) {
  return (
    <PageHolder
      pageParagraph="Find feedback on my business! Ambitious Full Stack, I have poured my
      passion into this show. Your contribution is invaluable for improving
      and improving my work. Please take a moment to review and share your
      thoughts. Thank you!"
      pageTitle="FeedBacks"
    >
      <FeedbackForm />
      <div className="feedback-card-holder">
        {data.feedbacks.length === 0 ? (
          <NoDataFound message="No FeedBack Found" />
        ) : (
          data.feedbacks.map((feedback) => {
            return (
              <FeedbackCard
                key={feedback._id}
                name={feedback.name}
                feedBackMessage={feedback.feedBackMessage}
              />
            );
          })
        )}
      </div>
    </PageHolder>
  );
}
