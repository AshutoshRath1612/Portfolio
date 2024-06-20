import React from 'react'
import './Nav.css';

const Nav = () => {
  return (
    <div className='navContainer'>
      <div style={{width:'80%' , display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
        <h1 className='headerName'>Ashutosh</h1>
        <ul className='navlist'>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Education</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav