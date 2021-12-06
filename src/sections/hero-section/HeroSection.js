import React from "react";
import "./hero-section.style.scss";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="img-container">
        <div alt="jithin" className="hero-image"></div>
      </div>
      <div className="title-container">
        <h2 className="greetings">hey i'am</h2>
        <h1 className="name">Jithin P</h1>
        <h3 className="slogan">i write code for frontend web development</h3>

        <button className="button-primary">browse my portfolio</button>
        <div className="animating-line"></div>
      </div>
    </div>
  );
}

export default HeroSection;
