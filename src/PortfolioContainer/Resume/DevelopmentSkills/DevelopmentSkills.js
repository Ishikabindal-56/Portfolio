import React from "react";
import "./DevelopmentSkills.scss";
import Progressbar from "./ProgressBar/ProgressBar";

export default function DevelopmentSkills() {
  return (
    <div className="DSkills">
      <div className="DProgress">
        <div className="DLeft">
          <Progressbar text="HTML" progress="90" height={20} />
          <Progressbar text="CSS" progress="80" height={20} />
          <Progressbar text="Javascript" progress="75" height={20} />
          <Progressbar text="JQuery" progress="80" height={20} />
          <Progressbar text="React" progress="75" height={20} />
        </div>
        <div className="DRight">
          <Progressbar text="Bootstrap" progress="80" height={20} />
          <Progressbar text="NodeJS" progress="65" height={20} />
          <Progressbar text="Express" progress="70" height={20} />
          <Progressbar text="MongoDB" progress="75" height={20} />
        </div>
      </div>
      <div className="DConclusion">
        I have an intermediate exprecience with all these skills. I have
        practised over some projects using Nodejs, Mongo DB and Express. Also I
        have created many projects based on React. I also created a poper
        project using HTML, CSS and JavaScript.
      </div>
    </div>
  );
}
