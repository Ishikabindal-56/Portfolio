import React from "react";
import "./Intrests.scss";

export default function Intrests() {
  const data = [
    {
      title: "Art & craft",
      desc: "I love to make creative cards and some craft items using waste material. Implementing innovative ideas is so much fun",
    },
    {
      title: "Music",
      desc: "Listening to muisc is something I can never compromise with. Music is the best stress reliever that I can get my hands on.",
    },
    {
      title: "Baking",
      desc: "I love to bake new types of cakes.",
    },
  ];
  return (
    <div className="IntrestContainer">
      {data.map((d) => (
        <dl>
          <div className="IHobby">
            <dt className="ITitle">{d.title}</dt>
            <dd className="IDesc">{d.desc}</dd>
          </div>
        </dl>
      ))}
    </div>
  );
}
