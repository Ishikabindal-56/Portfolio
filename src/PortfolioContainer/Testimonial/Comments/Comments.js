import React from "react";
import Footer from "../../Home/Footer/Footer";
import "./Comments.scss";

export default function Comments() {
  const data = [
    {
      id: 1,
      name: "Covid Tracker",
      title: "React",
      image: "female",
      desc: "Developed a Covid-19 Tracker which shows the complete data about covid cases throughout the world. All the data is fetched through api.",
    },
    {
      id: 2,
      name: "Real Estate Website",
      title: "React and Redux",
      image: "kid",
      desc: "Developed a Real Estate Website application with fully functional login system using redux. Application also contains a full functional whislist",
    },
    {
      id: 3,
      name: "Weather App",
      title: "Javascript",
      image: "male",
      desc: "Developed a Web application shows dynamic weather report using javascript and openweather web api",
    },
  ];
  return (
    <div className="Comments" id="Comments">
      <div className="CommentsContainer">
        {data.map((d) => (
          <div className="Card">

          <div className="Bottom">
              <img
                className="User"
                src={require(`../../../assets/Home/${d.image}.png`)}
                alt=""
              />
              <div className="Tittle">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
            <div className="Top">
              <p className="description">
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                {d.desc}
                <i className="fa fa-quote-right" aria-hidden="true"></i>
              </p>
            </div>
            {/* <div className="Middle">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div> */}
            </div>
        ))}
      </div>
      <div className="FooterTest">
        <Footer />
      </div>
    </div>
  );
}
