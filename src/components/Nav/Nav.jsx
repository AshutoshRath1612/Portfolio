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
          <li className={activeSection === 'education' ? 'active' : ''}>Education</li>
          <li className={activeSection === 'contact' ? 'active' : ''}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
