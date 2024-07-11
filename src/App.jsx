import { useRef, useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import AnimationBackground from './Animation/AnimationBackground';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skill/Skill';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
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

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, []);

  const Gap = () => {
    return <div style={{ height: '10vh' }}></div>;
  };

  return (
    <>
      <AnimationBackground />
      <Nav sections={{ homeRef, aboutRef,skillRef }} activeSection={activeSection} />
      <div id="home" ref={homeRef}><Hero ref={{ homeRef, aboutRef }} /></div>
      <Gap />
      <div id="about" ref={aboutRef}><About ref={aboutRef} /></div>
      <div id="skill" ref={skillRef}><Skill ref={skillRef} /></div>
    </>
  );
}

export default App;
