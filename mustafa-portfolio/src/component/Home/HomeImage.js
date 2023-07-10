import React from "react";
import "../../componentStyle/HomeImage.css";
import imagePath from "../../assets/Programming-bro.png";

export default function HomeImage(props) {
  const handleDownload = () => {
    const pdfUrl =
      "https://drive.google.com/u/0/uc?id=109kqvjLhT0J-hr9XjzovpnN4NOxvYEuX&export=download";
    window.open(pdfUrl, "_blank");
  };
  return (
    <div className="home-image-introduction">
      <div className="home-introduction">
        <div className="name">
          <span className="name-span">Hello, my name is</span> <br /> Mustafa
          Mahmood
        </div>
        <div className="intro-section">
          I'm a full-stack developer specialized in frontend and backend
          development for scalable web apps.I have made a variety of
          <span className="word-color"> Mern Stack </span>
          Applications. Want to know how I may help your project? Check out my
          projects from my GitHub Profile.
          <div className="github-word-logo">
            <div className="github-logo" />
            <a
              className="github-word"
              href="https://github.com/Mustafa-kl5"
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
