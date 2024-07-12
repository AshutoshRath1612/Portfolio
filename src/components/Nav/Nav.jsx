/* eslint-disable react/prop-types */
import React from 'react';
import './Nav.css';

const Nav = ({ sections, activeSection }) => {
  const handleScroll = (ref, section) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='navContainer'>
      <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className='headerName'>Ashutosh</h1>
        <ul className='navlist'>
          <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleScroll(sections.homeRef, 'home')}>Home</li>
          <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleScroll(sections.aboutRef, 'about')}>About</li>
          <li className={activeSection === 'skill' ? 'active' : ''} onClick={()=>handleScroll(sections.skillRef,'skill')}>Skills</li>
          <li className={activeSection === 'education' ? 'active' : ''} onClick={()=>handleScroll(sections.eduRef,'education')}>Education</li>
          <li className={activeSection === 'project' ? 'active' : ''} onClick={()=>handleScroll(sections.projectRef,'project')}>Project</li>
          <li className={activeSection === 'experience' ? 'active' : ''} onClick={()=>handleScroll(sections.expRef,'experience')}>Experience</li>
          <li className={activeSection === 'contact' ? 'active' : ''} onClick={()=>handleScroll(sections.contactRef,'education')}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
