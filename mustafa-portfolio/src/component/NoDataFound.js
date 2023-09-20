import React from "react";
import "../componentStyle/NoDataFound.css";
import emptyImage from "../assets/empty.png";

export default function NoDataFound(props) {
  return (
    <div className="no-data-holder">
      <div>
        <img
          className="no-data-image"
          src={emptyImage}
          alt="No data found image"
        />
      </div>

      <div className="no-data-message">{props.message}</div>
    </div>
  );
}
