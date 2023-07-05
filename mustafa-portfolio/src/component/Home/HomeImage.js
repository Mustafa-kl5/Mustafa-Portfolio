import React from "react";
import "../../componentStyle/HomeImage.css";
import imagePath from "../../assets/Programming-bro.png";

export default function HomeImage(props) {
  return (
    <div className="home-image-introduction">
      <div className="home-introduction">
        <div className="name">
          <span className="name-span">Hello, my name is</span> <br /> Mustafa
          Mahmood
        </div>
        <div className="intro-section">
          I'm a full-stack developer specialized in frontend and backend
          development for scalable web apps.I have made a variety of Mern Stack
          Applications. Want to know how I may help your project? Check out my
          projects from my GitHub Profile.
          <div className="github-word-logo">
            <div className="github-logo" />
            <div className="github-word">Profile</div>
          </div>
        </div>
        <button className="cvDownload-button">My Resume</button>
      </div>
      <img src={imagePath} className="home-image" alt="sd" />
    </div>
  );
}
