import React from "react";
import "./expertises.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

function Expertises() {
  return (
    <div className="expertise-container">
      <div className="underline"></div>
      <h1>My Expertise</h1>
      <div className="expertise-wrapper">
        <div className="expertise">
          <div className="title-icon-wrapper">
            <FontAwesomeIcon icon={faReact} className="brand-icon" />
            <h3>React js</h3>
          </div>

          <div>
            React is a free and open-source front-end JavaScript library by
            using jsx we can make powerfull frontend websites, i have a good
            founation in react Js and the new state managing tool called redux
          </div>
        </div>
        <div className="expertise">
          <div className="title-icon-wrapper">
            <FontAwesomeIcon icon={faJs} className="brand-icon" />
            <h3>JavaScript</h3>
          </div>
          <div>
            Javascript is the backbone of the web in-order to make website
            interactive and to make API calls or to acess the database
            javascript is nessary
          </div>
        </div>
        <div className="expertise">
          <div className="title-icon-wrapper">
            <FontAwesomeIcon icon={faCss3Alt} className="brand-icon" />
            <FontAwesomeIcon icon={faSass} className="brand-icon" />
            <h3>CSS/SCSS</h3>
          </div>
          <div>
            CSS stands for cascading style sheet in-order to gain beautiful
            stylings in websites CSS/SCSS is nessary. I belive i have strong
            css/scss knowledge
          </div>
        </div>
        <div className="expertise">
          <div className="title-icon-wrapper">
            <FontAwesomeIcon icon={faHtml5} className="brand-icon" />
            <h3>HTML</h3>
          </div>
          <div>
            To make basic webpage hypertext markups are the building block.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertises;
