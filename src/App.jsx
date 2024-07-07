import { useRef, useState } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './components/Nav/Nav'
import AnimationBackground from './Animation/AnimationBackground';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const Gap = () => {
    return <div style={{height: '10vh'}}></div>
  }

  return (
    <>
     <AnimationBackground />
     <Nav  sections={{ homeRef , aboutRef}}/>
     <Hero ref={homeRef}/>
     <Gap />
     <About ref={aboutRef}/>
    </>
  )
}

export default App
