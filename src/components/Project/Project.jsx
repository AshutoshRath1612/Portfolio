import React from 'react'
import "./Project.css"
import Medkit from ".././../assets/images/Projects/Medkit.png"
import Portfolio from ".././../assets/images/Projects/Portfolio.png"
import HungerHub from ".././../assets/images/Projects/HungerHub.jpg"
import CarPrice from ".././../assets/images/Projects/CarPrice.png"
import ChatApp from ".././../assets/images/Projects/ChatApp.gif"
import IOT_APP from ".././../assets/images/Projects/IOT_APP.png"

const Project = ({props,ref}) => {
    const projects = [
        {
          img: Medkit,
          title: 'Medkit',
          description: 'An Website where user can find the nearby medical stores or buy medicines online and talk to doctors for emergency help.',
          code : 'https://github.com/AshutoshRath1612/MedKit',
          view: "https://medkit-lp0uszh0u-ashutoshrath1612.vercel.app/"
        },
        {
          img: Portfolio,
          title: 'Portfolio',
          description: 'Personal Portfolio Website. Don\'t Need Much Info About It, Just Scroll Down. You\'re Here Only!',
          code: "https://github.com/AshutoshRath1612/Portfolio",
        },
        {
          img: HungerHub,
          title: 'Hunger Hub',
          description: 'A Student Cafeteria Food Management System. It is a application that allows students to order food from the cafeteria.',
          code: "https://github.com/AshutoshRath1612/Hungry-Hub",
          view: "https://drive.google.com/drive/folders/17qU7j-gzcn2P8nCNdjzZK2l3AHYhKksd?usp=sharing"
        },
        {
          img: CarPrice,
          title: 'Car Price Predictor',
          description: 'An Website which can be used to predict the price of old car based on the features of the car.',
          code: "https://github.com/AshutoshRath1612/Car-Price-Predictor",
        },
        {
          img: IOT_APP,
          title: 'IOT APP',
          description: 'IOT based flutter application which can be used to control the IOT car.',
          code: "https://github.com/AshutoshRath1612/IOT_APP",
        },
        {
          img: ChatApp,
          title: 'Chat App',
          description: 'An website where user can chat with other users.',
          code: "https://github.com/AshutoshRath1612/Chat-App",
        //   view: "https://drive.google.com/drive/folders/17qU7j-gzcn2P8nCNdjzZK2l3AHYhKksd?usp=sharing"
        },
      ];
    return (
        <div ref={ref} className='projectContainer'>
          <div className="title">
            <i className="fa-solid fa-code" style={{ color: 'white' }}></i>
            <h1 style={{ color: 'white' }}>Projects</h1>
          </div>
          <div className="projectBox">
            {projects.map((project, index) => (
              <div key={index} className="project">
                <div className="projectImg">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="projectInfo">
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <div className="buttons">
                    <button className="btn code" onClick={() => window.open(project.code , "_blank")}>Code</button>
                    {project.view &&
                    
                    <button className="btn view" onClick={()=> window.open(project.view , "_blank")}>View</button>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Project