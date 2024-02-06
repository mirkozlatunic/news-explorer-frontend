import "./About.css";
import React from "react";
import AboutPic from "../../Images/AboutPic.png";

const About = () => {
  return (
    <div className="about">
      <div className="about__section">
        <img className="about__image" src={AboutPic} alt="Author Image" />
        <div className="about__text">
          <h2 className="about__title">About the author</h2>
          <div className="about__para">
            <p className="about__para-text">
              Hello there! My name is Mirko Zlatunic, and I am the creator of
              this website. As a full stack software engineer, I am absolutely
              passionate about what I do. I have extensive knowledge of various
              programming languages, but I specialize in building React
              applications and utilizing Express for backend development.
            </p>
            <p className="about__para-text">
              Triple Tens software engineer bootcamp taught me everything I
              know. My success is all thanks to them. Enrolling in their program
              was the best decision I could have made.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
