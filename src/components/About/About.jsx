import "./About.css";
import MyPhoto from "../../assets/images/MyPhoto1.jpg";
import { Tilt } from "react-tilt";
import React from "react";

const About = React.forwardRef((props, ref) => {
  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1MsMm1GDRg_mEa5FJhxdJinPYgt9AnAmx/view", "_blank");
  };

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 5000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div ref={ref} className="container">
      <div className="title">
        <i className="fa-solid fa-user"></i>
        <h1>
          About <span style={{ color: "rgb(234, 102, 118)" }}>Me</span>
        </h1>
      </div>
      <div className="aboutContainer">
        <Tilt options={defaultOptions} className="imgContainer">
          <img src={MyPhoto} alt="" className="img" />
        </Tilt>
        <div className="aboutText">
          <div>
            <h1 className="aboutTitle">
              I&apos;m <span style={{ color: "navy" }}>Ashutosh</span>{" "}
              <span style={{ color: "#ffbf00" }}>Rath</span>
            </h1>
            <h1 className="aboutTitle" style={{ fontSize: "1.3rem" }}>
              Full-Stack Developer | Machine Learning Enthusiastic
            </h1>
          </div>
          <div className="aboutDes">
            <p className="aboutPara">
              - I am a dedicated Full Stack and App Developer.
            </p>
            <p className="aboutPara">
              - My expertise spans a variety of programming languages and
              frameworks.
            </p>
            <p className="aboutPara">
              - Passionate about continuous learning and thrives on tackling
              compelx challanges.
            </p>
            <p className="aboutPara">
              - Exchaling in creating seamless and efficient web application.
            </p>
          </div>
          <div>

          <button onClick={()=>downloadResume()} className="resumeBtn">
            <h3 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>Resume</h3>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
