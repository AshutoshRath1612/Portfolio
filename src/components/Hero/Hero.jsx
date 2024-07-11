import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Tilt } from "react-tilt";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import MyPhoto from "../../assets/images/MyPhoto.png";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons/faArrowCircleDown";

const Hero = React.forwardRef((props, ref) => {
  console.log(ref.aboutRef);
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
  const domain = ['Full-Stack Development...', 'App Development...', 'Machine Learning...'];

  const scrollToAbout = () => {
    if (ref && ref.aboutRef && ref.aboutRef.current) {
      ref.aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref.homeRef} className="HeroContainer">
      <div className="info">
        <h1 className="Herotext">Hi There,</h1>
        <h1 className="Herotext">I&apos;m <span style={{ color: '#81dbdb' }}>Ashutosh</span> <span style={{ color: 'yellow' }}>Rath</span></h1>
        <h1 className="Herotext" style={{ fontSize: '1.5rem' }}>System Engineer - <span style={{ color: '#bf77f6' }}>IBM</span></h1>
        <h1 className="Herotext" style={{ fontSize: '2.5rem' }}>I am into <ReactTyped strings={domain} style={{ color: '#ea6676' }} loop typeSpeed={50} backSpeed={25} backDelay={500} /></h1>
        <button onClick={scrollToAbout} className="btn">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
            About Me
          </h3>
          <FontAwesomeIcon icon={faArrowCircleDown} color="#1f242d" fontSize="20px" />
        </button>
        <div className="iconContainer">
          <div className="icons"><i className="fa-brands fa-linkedin"></i></div>
          <div className="icons"><i className="fa-brands fa-github"></i></div>
          <div className="icons"><i className="fa-brands fa-instagram"></i></div>
          <div className="icons"><i className="fa-brands fa-twitter"></i></div>
        </div>
      </div>
      <Tilt options={defaultOptions} className="imageContainer">
        <img src={MyPhoto} alt="" className="tiltedImg" />
      </Tilt>
    </div>
  );
});
Hero.displayName = 'Hero';

export default Hero;