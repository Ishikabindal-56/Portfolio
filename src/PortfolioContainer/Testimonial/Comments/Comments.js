import React from "react";
import Footer from "../../Home/Footer/Footer";
import "./Comments.scss";
import CommentsCard from "./CommentsCard/CommentsCard";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 810, itemsToShow: 2 },
  { width: 1400, itemsToShow: 3 },
];

export default function Comments() {
  return (
    <div className="Comments" id="Comments">
      <div className="CommentsContainer">
        <Carousel breakPoints={breakPoints}>
          <CommentsCard
            id="1"
            name="Covid Tracker"
            link="https://covidd19-trackerr.netlify.app"
            title="React"
            image="Covid"
            desc="Developed a Covid-19 Tracker which shows the complete data about covid cases throughout the world."
          />
          <CommentsCard
            id="2"
            name="Real Estate Website"
            link="#"
            title="React and Redux"
            image="RealEstate"
            desc="Developed a Real Estate Website application with fully functional login system using redux. "
          />
          <CommentsCard
            id="3"
            name="Weather App"
            link="https://gifted-meninsky-c08816.netlify.app"
            title="Javascript"
            image="WeatherApp"
            desc="Developed a Web application shows dynamic weather report using javascript and open weather web api."
          />
          <CommentsCard
            id="4"
            name="Portfolio"
            link="#"
            title="React"
            image="AboutMe"
            desc="Developed a fully responsive portfolio website using ReactJS which completely describes about me."
          />
          <CommentsCard
            id="5"
            name="E-commerce Site"
            link="#"
            title="React, NodeJS, Express"
            image="ECommerce"
            desc="Developed a React-based frontend for an e-commerce website with a fully functional shopping cart"
          />
        </Carousel>
      </div>

      <div className="FooterTest">
        <Footer />
      </div>
    </div>
  );
}
