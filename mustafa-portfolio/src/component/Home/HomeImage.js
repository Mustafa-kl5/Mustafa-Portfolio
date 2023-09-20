import React from "react";
import "../../componentStyle/HomeImage.css";
import imagePath from "../../assets/Programming-bro.png";

export default function HomeImage(props) {
  const handleDownload = () => {
    const pdfUrl = props.data.userData?.cvLink;
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="home-image-introduction">
      <div className="home-introduction">
        <div className="name">
          <span className="name-span">Hello, my name is</span> <br />
          {props.data.userData?.name}
        </div>
        <div className="intro-section">
          {props.data.userData?.description}
          <div className="github-word-logo">
            <div className="github-logo" />
            <a
              className="github-word"
              href={props.data.userData?.gitHubProfile}
              target="_blank"
            >
              Profile
            </a>
          </div>
        </div>
        <button className="cvDownload-button" onClick={handleDownload}>
          My Resume <div className="download-icon" />
        </button>
      </div>
      <img src={imagePath} className="home-image" alt="dev-image" />
    </div>
  );
}
