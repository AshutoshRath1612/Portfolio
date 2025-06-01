
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";

export const introText =
  "Hi, I am Ashutosh Rath, a designer and full-stack developer.";
export const introTextDescription =
  "As an Application Developer at IBM, I specialize in building seamless, interactive digital experiences.";

export const connectText = "You can connect me with:";
export const email = "ashutoshrath1612@gmail.com";
export const phone = "+91 9348183170";

export const contactFormQuestions = [
  {question: "What's your name?", type: "text", placeholder: "John Doe *", validate:true},
  {question: "What's your email?", type: "email", placeholder: "john@doe.com *", validate:true},
  {question: "What's the name of your organization?", type: "text", placeholder: "John & Doe", validate:false},
  {question: "What services are you looking for?", type: "text", placeholder: "Web Design, Web Development, App devlopment...", validate:false},
  {question: "Your message", type: "text", placeholder: "Hey Ashutosh, can you help me with... *", validate:true},
];

  export const socials = [
     { name: "Linkedin", icon: faLinkedin , link: 'https://www.linkedin.com/in/ashutosh-rath-52370621a/' },
     { name: "Github", icon: faGithub, link: 'https://github.com/AshutoshRath1612' },
     { name: "Twitter", icon: faTwitter, link: 'https://x.com/iam_doomaf' },
     { name: "Instagram", icon: faInstagram, link: 'https://www.instagram.com/_i.am_doomaf_/' },
   ];
  
   export const skills = [
    {name: "ReactJs" , icon: faReact},
    {name: "NodeJs" , icon: faReact},
    {name: "ExpressJs" , icon: faReact},
    {name: "MongoDB" , icon: faReact},
    {name: "NextJs" , icon: faReact},
   ]
// "Hi, I am Ashutosh Rath,
// a passionate software engineer with a knack for creating innovative solutions.
// I thrive on challenges and love to push the boundaries of technology. ]
// My journey in the tech world has been fueled by curiosity and a desire to make a difference.
// Let's connect and explore the endless possibilities together!"
