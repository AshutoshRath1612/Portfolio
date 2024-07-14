import React from 'react'
import './Experience.css'

const Experience = ({props,ref}) => {
  return (
    <div className='expContainer' ref={ref}>
        <div className="title">
            <i className="fa-solid fa-laptop-code" style={{ color: 'white' }}></i>
            <h1 style={{ color: 'white' }}>Experience</h1>
        </div>
    </div>
  )
}

export default Experience