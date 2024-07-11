import React from "react";
import "./Skill.css";

const Skill = React.forwardRef((props, ref) => {
  const languages = [
    {
      name: "Java",
      img: "https://img.icons8.com/?size=100&id=Pd2x9GWu9ovX&format=png&color=000000",
    },
    {
      name: "Python",
      img: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    },
    {
      name: "Javascript",
      img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    },
    {
      name: "Typescript",
      img: "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000",
    },
    {
      name: "Dart",
      img: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
    },
  ];
  const frameworks = [
    {
      name: "React.js",
      img: "https://img.icons8.com/?size=100&id=J79emsSv2QCu&format=png&color=000000",
    },
    {
      name: "Node.js",
      img: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    },
    {
      name: "Express.js",
      img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=ffffff",
    },
    {
      name: "Angular",
      img: "https://img.icons8.com/?size=100&id=71257&format=png&color=000000",
    },
    {
      name: "Tailwind CSS",
      img: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
    },
    {
      name: "Flutter",
      img: "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000",
    },
    {
      name: "React Native",
      img: "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000",
    },
    {
      name: "Flask",
      img: "https://img.icons8.com/?size=100&id=AqYCfGyGXlO7&format=png&color=ffffff",
    },
    {
      name: "Redux",
      img: "https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=ffffff",
    },
  ];
  const databases = [
    {
        name: "MongoDB",
        img: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
      },
      {
        name: "MySQL",
        img: "https://img.icons8.com/?size=100&id=w0gLt4XNjxKm&format=png&color=ffffff",
      },
  ]
  const developerTools = [
    {
        name: "Git",
        img: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
      },
      {
        name: "GitHub",
        img: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=ffffff",
      },
      {
        name: "VSCode",
        img: "https://img.icons8.com/?size=100&id=y7WGoWNuIWac&format=png&color=000000",
      },
      {
        name: "Postman",
        img: "https://img.icons8.com/?size=100&id=QgNBbQj7xep0&format=png&color=FF6C37",
      },
      {
        name: "Expo",
        img: "https://img.icons8.com/?size=100&id=IpN1evivrDWO&format=png&color=ffffff",
      },
      {
        name: "Figma",
        img: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
      },
      {
        name: "Canva",
        img: "https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000",
      },
  ]
  return (
    <div className="skillContainer" ref={ref}>
      <div className="title">
        <i style={{ color: "white" }} className="fa-solid fa-computer"></i>
        <h1 style={{ color: "white" }}>
          Skills{" "}
          <span style={{ color: "rgb(234, 102, 118)" }}>& Tech Stacks</span>
        </h1>
      </div>
      <div className="skills">
        <div className="skillSection">
          <h1>Languages:</h1>
          <div className="skillList">
            {languages.map((language, index) => (
              <div key={index} className="skillItem">
                <img src={language.img} alt={language.name}></img>
                <h2>{language.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="skillSection">
          <h1>Frameworks / Libraries:</h1>
          <div className="skillList">
            {frameworks.map((framework, index) => (
              <div key={index} className="skillItem">
                <img src={framework.img} alt={framework.name}></img>
                <h2>{framework.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="skillSection">
          <h1>Frameworks / Libraries:</h1>
          <div className="skillList">
            {databases.map((database, index) => (
              <div key={index} className="skillItem">
                <img src={database.img} alt={database.name}></img>
                <h2>{database.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="skillSection">
          <h1>Frameworks / Libraries:</h1>
          <div className="skillList">
            {developerTools.map((developerTool, index) => (
              <div key={index} className="skillItem">
                <img src={developerTool.img} alt={developerTool.name}></img>
                <h2>{developerTool.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Skill.displayName = "Skill";

export default Skill;
