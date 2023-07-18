import React, { useEffect, useRef } from "react";
import "../../componentStyle/ContactHolder.css";
import imagePath from "../../assets/contactilltration.png";
export default function ContactHolder() {
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
  const handelNavigation = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="contact-image-introduction">
      <div className="contact-introduction">
        <div className="contact-word">
          Contact Information <span className="contact-word-span">:-</span>
          <div className="contact-introduction-paragraph">
            <span className="word-color">
              Thank you for visiting my portfolio!{" "}
            </span>
            I would love to hear from you and discuss any potential
            collaboration or opportunity. Please feel free to reach out to me
            using the contact information below .
          </div>
        </div>
        <div className="contact-intro-section">
          <div className="contact-item">
            Email <span className="word-color">: </span>
            <a className="link-article" href="mailto:mustafalowisi@gmail.com">
              mustafaalowisi@gmail.com
            </a>
          </div>

          <div className="contact-item">
            Phone number <span className="word-color">: </span>
            <a className="link-article" href="tel:+962782691980">
              +962782691980
            </a>
          </div>
        </div>
        <div className="contact-icons-holder">
          <div
            className="contact-icon"
            onClick={() => handelNavigation(" https://github.com/Mustafa-kl5")}
          />

          <div
            className="contact-icon"
            onClick={() =>
              handelNavigation(
                " https://www.linkedin.com/in/mustafa-alowisi-5841a7245"
              )
            }
          />
        </div>
      </div>
      <img src={imagePath} className="home-image" alt="dev-image" />
    </div>
  );
}
