import React from "react";
import "./Resume.scss";
import Education from "./Education/Education";
import ProgrammingSkills from "./ProgrammingSkills/ProgrammingSkills";

export default function Resume() {
  return (
    <div className="Resume" id="Resume">
      <h1>Resume</h1>
      <h5>My Formal Bio Details</h5>
      <div className="rule"></div>
      <div className="ResumeContainer">
        <div className="ResumeIcons">
          <i className="fa fa-graduation-cap" aria-hidden="true"></i>
          <i className="fa fa-bar-chart" aria-hidden="true"></i>
          <i className="fa fa-laptop" aria-hidden="true"></i>
          <i className="fa fa-tachometer" aria-hidden="true"></i>
        </div>
        <div className="ResumeList">
          <button className="Education">
            <div></div>
            <a href="google.com">Education</a>
          </button>
          <button className="ProgrammingSkills">
            <div></div>
            <a href="google.com">Programming Skills</a>
          </button>
          <button className="Projects">
            <div></div>
            <a href="google.com">Development Skills</a>
          </button>
          <button className="Intrests">
            <div></div>
            <a href="google.com">Intrests</a>
          </button>
        </div>
        <div className="ResumeDetails">
          <ProgrammingSkills/>
        </div>
      </div>
    </div>
  );
}
