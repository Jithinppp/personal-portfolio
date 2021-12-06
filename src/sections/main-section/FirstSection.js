import React from "react";
import "./firstSection.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faHome,
  faInfoCircle,
  faCog,
  faQuoteLeft,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function FirstSection() {
  return (
    <div className="section-container">
      <div className="nav-container">
        <FontAwesomeIcon icon={faHome} className="icon" />
        <FontAwesomeIcon icon={faCog} className="icon" />
        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
      </div>
      <h1 className="main-headline">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-left" />
        The purpose of our lives is to be happy.
      </h1>
      <h2 className="author-name">Dalai Lama</h2>
      <h3 className="take-a-tour">take a tour</h3>
      <FontAwesomeIcon icon={faCaretDown} className="down-arrow" />
    </div>
  );
}

export default FirstSection;
