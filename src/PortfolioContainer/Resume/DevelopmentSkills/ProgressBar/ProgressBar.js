import React from "react";

const ProgressBar = ({ text, progress, height }) => {
  const PHeading = {
    fontFamily: "Poppins SemiBold",
    fontSize: "18px",
    paddingLeft: "10px",
    color: "var(--main-color)",
  };
  const Parentdiv = {
    height: height,
    width: "90%",
    backgroundColor: "var(--main-color)",
    borderRadius: 40,
    margin: 10,
  };
  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "var(--orange)",
    borderRadius: 40,
    textAlign: "right",
  };
  const progresstext = {
    padding: 10,
    color: "var(--main-color)",
    fontWeight: 900,
  };

  return (
    <div className="ProgressBar">
      <h6 style={PHeading}>{`${text}`}</h6>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${progress}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
