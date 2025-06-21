import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Project } from "@/app/models/project.model";
import Portfolio from "../../assets/projects/Portfolio.jpeg"
import HungerHub from "../../assets/projects/HungerHub.jpeg"
import Medkit from "../../assets/projects/Medkit.jpeg"
import IOT_APP from "../../assets/projects/IOT_APP.png"
import CarPrice from "../../assets/projects/CarPrice.jpeg"
import ChatApp from "../../assets/projects/ChatApp.gif"


export const introText =
  "Hi, I am Ashutosh Rath, a designer and full-stack developer.";
export const introTextDescription =
  "As an Application Developer at IBM, I specialize in building seamless, interactive digital experiences.";

export const connectText = "You can connect me with:";
export const email = "ashutoshrath1612@gmail.com";
export const phone = "+91 9348183170";

export const contactFormQuestions = [
  {
    question: "What's your name?",
    type: "text",
    placeholder: "John Doe *",
    validate: true,
  },
  {
    question: "What's your email?",
    type: "email",
    placeholder: "john@doe.com *",
    validate: true,
  },
  {
    question: "What's the name of your organization?",
    type: "text",
    placeholder: "John & Doe",
    validate: false,
  },
  {
    question: "What services are you looking for?",
    type: "text",
    placeholder: "Web Design, Web Development, App devlopment...",
    validate: false,
  },
  {
    question: "Your message",
    type: "text",
    placeholder: "Hey Ashutosh, can you help me with... *",
    validate: true,
  },
];

export const socials = [
  {
    name: "Linkedin",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/ashutosh-rath-52370621a/",
  },
  {
    name: "Github",
    icon: faGithub,
    link: "https://github.com/AshutoshRath1612",
  },
  { name: "Twitter", icon: faTwitter, link: "https://x.com/iam_doomaf" },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/_i.am_doomaf_/",
  },
];

export const skills = [
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
  {
    name: "React.js",
    img: "https://img.icons8.com/?size=100&id=J79emsSv2QCu&format=png&color=000000",
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
    name: "Node.js",
    img: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
  },
  {
    name: "Express.js",
    img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
  },
  {
    name: "Flask",
    img: "https://img.icons8.com/?size=100&id=AqYCfGyGXlO7&format=png&color=000000",
  },
  {
    name: "Redux",
    img: "https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=000000",
  },
  {
    name: "MongoDB",
    img: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
  },
  {
    name: "MySQL",
    img: "https://img.icons8.com/?size=100&id=w0gLt4XNjxKm&format=png&color=000000",
  },
  {
    name: "PostgreeSQL",
    img: "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000",
  },
  {
    name: "AWS",
    img: "https://img.icons8.com/color/100/amazon-web-services.png",
  },
  {
    name: "Azure Cloud",
    img: "https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000",
  },
  {
    name: "Google Cloud",
    img: "https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000",
  },
  {
    name: "Docker",
    img: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
  },
  {
    name: "Kubernetes",
    img: "https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000",
  },
  {
    name: "Jenkins",
    img: "https://img.icons8.com/?size=100&id=39292&format=png&color=000000",
  },
  {
    name: "Git",
    img: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  },
  {
    name: "GitHub",
    img: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
  },
  {
    name: "VSCode",
    img: "https://img.icons8.com/?size=100&id=y7WGoWNuIWac&format=png&color=000000",
  },
  {
    name: "Android Studio",
    img: "https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=000000",
  },
  {
    name: "Postman",
    img: "https://img.icons8.com/?size=100&id=QgNBbQj7xep0&format=png&color=FF6C37",
  },
  {
    name: "Expo",
    img: "https://img.icons8.com/?size=100&id=IpN1evivrDWO&format=png&color=000000",
  },
  {
    name: "Figma",
    img: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
  },
  {
    name: "Canva",
    img: "https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000",
  },
];

export const projects: Project[] = [
  {
    name: "My Portfolio",
    tech: ["Next.js"],
    description: "You're looking at it! Built with Next.js after 17 redesigns and 34 cups of coffee. Still fixing that one padding bug.",
    image: Portfolio,
    links: [
      { name: "Live Site", url: "https://google.com" },
      { name: "GitHub", url: "https://github.com/AshutoshRath1612/Portfolio-Nextjs" }
    ]
  },
  {
    name: "Hunger Hub",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "Razorpay", "Twilio"],
    description: "A student cafeteria food ordering app allowing users to browse the menu, place orders, and make payments via Razorpay. Includes OTP verification via Twilio.",
    image: HungerHub,
    links: [
      { name: "Live Demo", url: "https://drive.google.com/drive/folders/17qU7j-gzcn2P8nCNdjzZK2l3AHYhKksd?usp=sharing" },
      { name: "GitHub", url: "https://github.com/AshutoshRath1612/Hungry-Hub" }
    ]
  },
  {
    name: "Chat App",
    tech: ["React.js", "Socket.io", "Node.js", "Express", "MongoDB"],
    description: "A real-time chat application that allows users to create accounts and chat with others using WebSockets.",
    image: ChatApp,
    links: [
      { name: "GitHub", url: "https://github.com/AshutoshRath1612/Chat-App" }
    ]
  },
  {
    name: "MedKit",
    tech: ["React.js", "Spring Boot", "MySQL"],
    description: "A health-tech web app for finding nearby medical stores, buying medicines online, and consulting doctors in emergencies.",
    image: Medkit,
    links: [
      { name: "Live Demo", url: "https://medkit-lp0uszh0u-ashutoshrath1612.vercel.app/" },
      { name: "GitHub", url: "https://github.com/AshutoshRath1612/MedKit" }
    ]
  },
  {
    name: "IoT Car Controller",
    tech: ["Flutter", "Flask", "Dart", "Python", "MicroPython"],
    description: "A Flutter-based mobile app to remotely control an IoT car using Flask as the backend and MicroPython on hardware.",
    image: IOT_APP,
    links: [
      { name: "GitHub", url: "https://github.com/AshutoshRath1612/IOT_APP" }
    ]
  },
  {
    name: "Car Price Predictor",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "Machine Learning"],
    description: "A web app that predicts the resale value of a car based on user input features using a trained ML model in Flask.",
    image: CarPrice,
    links: [
      { name: "GitHub", url: "https://github.com/AshutoshRath1612/Car-Price-Predictor" }
    ]
  }
]

// "Hi, I am Ashutosh Rath,
// a passionate software engineer with a knack for creating innovative solutions.
// I thrive on challenges and love to push the boundaries of technology. ]
// My journey in the tech world has been fueled by curiosity and a desire to make a difference.
// Let's connect and explore the endless possibilities together!"
