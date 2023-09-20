import React, { useEffect, useRef } from "react";
import "../../componentStyle/ContactHolder.css";
import imagePath from "../../assets/contactilltration.png";
export default function ContactHolder(props) {
  const handelNavigation = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="contact-image-introduction">
      <div className="contact-introduction">
        <div className="contact-word">
          Contact Information <span className="contact-word-span">:-</span>
          <div className="contact-introduction-paragraph">
            {props.data.userContact.contactMessage}
          </div>
        </div>
        <div className="contact-intro-section">
          <div className="contact-item">
            Email <span className="word-color">: </span>
            <a className="link-article" href="mailto:mustafalowisi@gmail.com">
              {props.data.userContact.email}
            </a>
          </div>

          <div className="contact-item">
            Phone number <span className="word-color">: </span>
            <a className="link-article" href="tel:+962782691980">
              {props.data.userContact.phoneNumber}
            </a>
          </div>
        </div>
      </div>
      <img src={imagePath} className="home-image" alt="dev-image" />
    </div>
  );
}
