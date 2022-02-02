import React from "react";
import Footer from "../../Home/Footer/Footer";
import "./Comments.scss";

export default function Comments() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      image: "female",

      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim diam, tempus vel ultricies viverra, luctus in elit.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      image: "kid",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      image: "male",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim diam, tempus vel ultricies viverra, luctus in elit. Aliquam tempus blandit velit.",
    },
  ];
  return (
    <div className="Comments" id="Comments">
      <div className="CommentsContainer">
        {data.map((d) => (
          <div className="Card">
            <div className="Top">
              <p className="description">
                <i class="fa fa-quote-left" aria-hidden="true"></i>
                {d.desc}
                <i class="fa fa-quote-right" aria-hidden="true"></i>
              </p>
            </div>
            <div className="Middle">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
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
          </div>
        ))}
      </div>
      <div className="FooterTest">
        <Footer />
      </div>
    </div>
  );
}
