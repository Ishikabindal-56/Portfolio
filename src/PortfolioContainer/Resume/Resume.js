import React from "react";
import "./Resume.scss";
import Education from "./Education/Education";
import ProgrammingSkills from "./ProgrammingSkills/ProgrammingSkills";
import DevelopmentSkills from "./DevelopmentSkills/DevelopmentSkills";
import Intrests from "./Intrests/Intrests";

export default function Resume() {
  const scrollResume=(y)=>{
    document.querySelector(".ResumeDetails").scroll(0,document.querySelector(".ResumeDetails").offsetHeight*y);
  }
  return (
    <div className="Resume" id="Resume">
      <h1>Resume</h1>
      <h5>My Formal Bio Details</h5>
      <div className="rule"></div>
      <div className="ResumeContainer">
        <div className="ResumeIcons">
        <i className="fas fa-user-graduate" aria-hidden="true"></i>
          <i className="far fa-chart-bar" aria-hidden="true" ></i>
          <i className="fas fa-laptop-code" aria-hidden="true"></i>
          <i className="fas fa-palette" aria-hidden="true"></i>
        </div>
        <div className="ResumeList">
          <button className="Education" onClick={()=>scrollResume(0)}>
            <div></div>
            <p>Education</p>
          </button>
          <button className="ProgrammingSkills" onClick={()=>scrollResume(1)}>
            <div></div>
            <p>Programming Skills</p>
            {/* <a href="#">Programming Skills</a> */}
          </button>
          <button className="Projects" onClick={()=>scrollResume(2)}>
            <div></div>
            {/* <a href="google.com">Development Skills</a> */}
            <p>Development Skills</p>
          </button>
          <button className="Intrests" onClick={()=>scrollResume(3)}>
            <div></div>
            {/* <a href="google.com" onClick={(e)=>scrollResume(e,1500)}>Intrests</a> */}
            <p>Intrests</p>
          </button>
        </div>
        <div className="ResumeDetails">
          <Education />
          <ProgrammingSkills />
          <DevelopmentSkills />
          <Intrests/>
        </div>
      </div>
    </div>
  );
}
