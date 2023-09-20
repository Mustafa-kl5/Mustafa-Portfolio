import React, { useState } from "react";
import "../../componentStyle/FeedbackForm.css";
import { notify, notifySuccess } from "../../Helper/Notify";
import apiInstance from "../../Service/api";
import { getUserId } from "../../Helper/getUserId";

export default function FeedbackForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [feedBack, setFeedBack] = useState({
    name: "",
    email: "",
    feedBackMessage: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await apiInstance.post(
        `/api/v1/data/addFeedBack/:${getUserId()}`,
        feedBack
      );
      setIsLoading({
        name: "",
        email: "",
        feedBackMessage: "",
      });
      setIsLoading(false);
      notifySuccess(response.data.message);
    } catch (error) {
      notify(error.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <>
      <form className="feedback-form-holder" onSubmit={submitHandler}>
        <input
          placeholder="Name"
          className="feedback-form-holder-input"
          onChange={(e) =>
            setFeedBack((prevData) => ({
              ...prevData,
              name: e.target.value,
            }))
          }
          value={feedBack.name}
          required
        />
        <input
          placeholder="Email"
          type="email"
          className="feedback-form-holder-input"
          onChange={(e) =>
            setFeedBack((prevData) => ({
              ...prevData,
              email: e.target.value,
            }))
          }
          required
          value={feedBack.email}
        />
        <textarea
          placeholder="Please write your feedback here..."
          className="feedback-form-holder-textarea"
          onChange={(e) =>
            setFeedBack((prevData) => ({
              ...prevData,
              feedBackMessage: e.target.value,
            }))
          }
          required
          value={feedBack.feedBackMessage}
        />
        <button className="submit-button" type="submit">
          Submit {isLoading ? <span className="loader"></span> : ""}
        </button>
      </form>
    </>
  );
}
