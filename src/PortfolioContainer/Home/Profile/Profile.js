import React from "react";
import Typical from "react-typical";
import "./Profile.scss";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100009005623592">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/ishika-bindal-b094911aa/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/ishikabindal56/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/Ishikabindal-56">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://wa.me/qr/X35QRTZ65IZVO1">
                <i className="fa fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Ishika</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic dev 🔴 ",
                    2000,
                    "Full Stack developer 💻",
                    2000,
                    "MERN Stack dev 😎",
                    2000,
                    "React/React Native dev 📱",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="ishika.pdf" download="ishika.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
