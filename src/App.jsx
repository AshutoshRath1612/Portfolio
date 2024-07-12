import { useRef, useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import AnimationBackground from './Animation/AnimationBackground';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education';
import Project from './components/Project/Project';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const eduRef = useRef(null);
  const projectRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);
  
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillRef.current) observer.observe(skillRef.current);
    if (eduRef.current) observer.observe(eduRef.current);
    if (projectRef.current) observer.observe(projectRef.current);
    if (expRef.current) observer.observe(expRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (skillRef.current) observer.unobserve(skillRef.current);
      if (eduRef.current) observer.unobserve(eduRef.current);
      if (projectRef.current) observer.unobserve(projectRef.current);
      if (expRef.current) observer.unobserve(expRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  const Gap = () => {
    return <div style={{ height: '10vh' }}></div>;
  };

  return (
    <>
      <AnimationBackground />
      <Nav sections={{ homeRef, aboutRef,skillRef,eduRef,projectRef,expRef,contactRef }} activeSection={activeSection} />
      <div id="home" ref={homeRef}><Hero ref={{ homeRef, aboutRef }} /></div>
      <Gap />
      <div id="about" ref={aboutRef}><About ref={aboutRef} /></div>
      <div id="skill" ref={skillRef}><Skill ref={skillRef} /></div>
      <div id="education" ref={eduRef}><Education ref={eduRef} /></div>
      <div id="project" ref={projectRef}><Project ref={projectRef} /></div>
    </>
  );
}

export default App;
