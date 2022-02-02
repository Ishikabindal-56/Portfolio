import React from "react";
import Comments from "./Comments/Comments";
import "./Testimonial.scss";

export default function Home() {
  return (
    <div className="TestContainer" id="Testimonial">
      <h1>Testimonial</h1>
          <h5>What My Client Say About Me?</h5>
          <div className="rule"></div>
      <Comments />
    </div>
  );
}