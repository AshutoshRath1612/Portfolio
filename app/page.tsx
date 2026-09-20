import React, { ReactNode } from 'react'
import { getEnabledSectionIds, getPortfolio } from './lib/content'
import SectionRenderer from './components/layout/SectionRenderer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certification from './components/sections/Certification';
import Engineering from './components/sections/Engineering';
import Contact from './components/sections/Contact';

const Home = () => {

  const portfolio = getPortfolio();
  const order = getEnabledSectionIds();

  const registry: Record<string, ReactNode> = {
    hero: <Hero hero={portfolio.hero} profile={portfolio.profile} social={portfolio.social} />,
    about: <About about={portfolio.about} />,
    experience: <Experience experience={portfolio.experience} />,
    skills: <Skills skills={portfolio.skills} />,
    projects: <Projects projects={portfolio.projects} githubUrl={portfolio.social.github} />,
    certifications: <Certification certifications={portfolio.certifications} />,
    engineering: <Engineering engineering={portfolio.engineering} />,
    contact: <Contact contact={portfolio.contact} social={portfolio.social} resumeHref={portfolio.profile.resume} />
  }

  return <SectionRenderer order={order} registry={registry} />
}

export default Home