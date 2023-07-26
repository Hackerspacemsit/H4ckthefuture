import React from "react";
import aboutImg from "./Assets/about.png";
import "./about.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-head-section">
        <h1 className="heading-tag-line">About</h1>
        <hr className="heading-underline" />
      </div>
      <div className="about-subsection" id="About">
        <div className="about-left-section">
          <h2 className="about-heading">
            Hack the Future - Soar on the wings of innovation.
          </h2>
          <p>
            <span className="colsm">H4ck the Future</span> believes in building
            for the future, igniting a spark of innovation within each
            participant. Regardless of your background or experience, this
            extraordinary platform welcomes you to showcase your skills and
            captivate the world with your creativity.
            <br />
            This electrifying hackerspace provides an offline platform to
            enhance your skills and collaborate on real-life challenges. Unleash
            your potential, showcase your expertise, and be part of a
            groundbreaking revolution. With Hack the Future, you have the chance
            to shape the world. Don't miss this opportunity to ignite your
            creativity and leave a mark on the future! <br />
            <span className="colsm">
              Always remember everything begins with an IDEA
            </span>
          </p>
        </div>
        <div className="about-right-section">
          <img
            src={aboutImg}
            alt="Hackathon-Image"
            className="hackathon-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
