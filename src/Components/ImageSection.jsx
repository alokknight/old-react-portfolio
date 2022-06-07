import React from "react";
import about from "../img/alok1.jpg";

const ImageSection = () => {
  return (
    <div className="ImageSection">

      <div className="about-info">
        <h4>
          I am<span> Alok Patel</span>
        </h4>
        <p className="about-text">
          I'm a competitive programmer and an enthusiastic Web Developer who
          loves to solve real-life problems. I have an immense interest in
          software development and am eager to contribute to open source.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Name</p>
            <p>College Name</p>
            <p>Nationality</p>
            <p>Languages</p>
          </div>
          <div className="right-section">
            <p>: ALOK PATEL</p>
            <p>: MMMUT, GKP</p>
            <p>: India</p>
            <p>: English, Hindi</p>
          </div>
        </div>
        {/* <button className="btn">Download Cv</button> */}
      </div>
      <div className="img">
        <img src={about} alt="" />
      </div>
    </div>
  );
};

export default ImageSection;
