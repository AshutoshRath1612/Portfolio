import { useState } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from './components/Nav/Nav'
import AnimationBackground from './Animation/AnimationBackground';
import Hero from './components/Hero/Hero';

function App() {

  return (
    <>
     <AnimationBackground />
     <Nav />
     <Hero />
    </>
  )
}

export default App
