import React from "react";
import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div className="AboutMe" id="AboutMe">
      <h1>About Me</h1>
      <h5>Why Choose Me?</h5>
      <div className="rule"></div>
      <div className="AboutContainer">
        <div className="Left">
          <div className="ImgContainer"></div>
        </div>
        <div className="Right">
          <div className="AboutWrapper">
            <div className="Introduction">
              Full stack web developers with background knowledge of MERN stacks
              with redux, along with a knack of building applications with
              utmost efficiency. Strong professional with a BE willing to be an
              asset for an organization.
            </div>
            <div className="List">
              <h6>Here are a Few Higlights:</h6>
              <ul>
                <li>Full Stack web</li>
                <li>Interactive Front End As per the design</li>
                <li>React language</li>
                <li>Building REST API</li>
                <li>Managing database</li>
              </ul>
            </div>
            <div className="ProfileOptions">
              <button className="btn primary-btn"> Hire Me </button>
              <a href="ishika.pdf" download="ishika.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
