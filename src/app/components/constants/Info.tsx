import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Project } from "@/app/models/project.model";
import Portfolio from "../../assets/projects/Portfolio.jpeg";
import HungerHub from "../../assets/projects/HungerHub.jpeg";
import Medkit from "../../assets/projects/Medkit.jpeg";
import IOT_APP from "../../assets/projects/IOT_APP.png";
import CarPrice from "../../assets/projects/CarPrice.jpeg";
import ChatApp from "../../assets/projects/ChatApp.gif";
import AWSCertificate from "../../assets/certificate/aws-certified-cloud-practitioner.png";
import MicrosoftAZ900 from "../../assets/certificate/Microsoft-AZ900.png";
import IBMTraining from "../../assets/certificate/IBM Training.jpeg";
import GoogleCloudDigitalLeader from "../../assets/certificate/cloud-digital-leader-certification.png";
import EYGDSCertificate from "../../assets/certificate/EY GDS CERTIFICATE.jpg";
import DataVisualisationTataForage from "../../assets/certificate/Data-Visualisation-Tata-Forage.png";
import GoogleCloudDatascienceAndMachineLearning from "../../assets/certificate/Google Cloud- Datascience and Machine Learning.png";

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
    name: "name",
    placeholder: "John Doe *",
    validate: true,
  },
  {
    question: "What's your email?",
    type: "email",
    name: "email",
    placeholder: "john@doe.com *",
    validate: true,
  },
  {
    question: "What's your Phone Number?",
    type: "tel",
    name: "phone",
    placeholder: "+91 12345 67890",
    validate: true,
  },
  {
    question: "What's the name of your organization?",
    type: "text",
    name: "organization",
    placeholder: "John & Doe",
    validate: false,
  },
  {
    question: "What services are you looking for?",
    type: "text",
    name: "services",
    placeholder: "Web Design, Web Development, App development...",
    validate: false,
  },
  {
    question: "Your message",
    type: "text",
    name: "message",
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
    description:
      "You're looking at it! Built with Next.js after 17 redesigns and 34 cups of coffee. Still fixing that one padding bug.",
    image: Portfolio,
    links: [
      { name: "Live Site", url: "https://google.com" },
      {
        name: "GitHub",
        url: "https://github.com/AshutoshRath1612/Portfolio-Nextjs",
      },
    ],
  },
  {
    name: "Hunger Hub",
    tech: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Twilio",
    ],
    description:
      "A student cafeteria food ordering app allowing users to browse the menu, place orders, and make payments via Razorpay. Includes OTP verification via Twilio.",
    image: HungerHub,
    links: [
      {
        name: "Live Demo",
        url: "https://drive.google.com/drive/folders/17qU7j-gzcn2P8nCNdjzZK2l3AHYhKksd?usp=sharing",
      },
      { name: "GitHub", url: "https://github.com/AshutoshRath1612/Hungry-Hub" },
    ],
  },
  {
    name: "Chat App",
    tech: ["React.js", "Socket.io", "Node.js", "Express", "MongoDB"],
    description:
      "A real-time chat application that allows users to create accounts and chat with others using WebSockets.",
    image: ChatApp,
    links: [
      { name: "GitHub", url: "https://github.com/AshutoshRath1612/Chat-App" },
    ],
  },
  {
    name: "MedKit",
    tech: ["React.js", "Spring Boot", "MySQL"],
    description:
      "A health-tech web app for finding nearby medical stores, buying medicines online, and consulting doctors in emergencies.",
    image: Medkit,
    links: [
      {
        name: "Live Demo",
        url: "https://medkit-lp0uszh0u-ashutoshrath1612.vercel.app/",
      },
      { name: "GitHub", url: "https://github.com/AshutoshRath1612/MedKit" },
    ],
  },
  {
    name: "IoT Car Controller",
    tech: ["Flutter", "Flask", "Dart", "Python", "MicroPython"],
    description:
      "A Flutter-based mobile app to remotely control an IoT car using Flask as the backend and MicroPython on hardware.",
    image: IOT_APP,
    links: [
      { name: "GitHub", url: "https://github.com/AshutoshRath1612/IOT_APP" },
    ],
  },
  {
    name: "Car Price Predictor",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "Machine Learning"],
    description:
      "A web app that predicts the resale value of a car based on user input features using a trained ML model in Flask.",
    image: CarPrice,
    links: [
      {
        name: "GitHub",
        url: "https://github.com/AshutoshRath1612/Car-Price-Predictor",
      },
    ],
  },
];

export const personalInfo = {
  name: "Ashutosh Rath",
  title: "Full Stack Developer",
  location: "Bhubaneswar, India",
  email: "ashutoshrath1612@gmail.com",
  bio: [
    "Full Stack Developer with hands-on experience across multiple tech-stacks such as Java, Angular, React, and Node.js. I work on scalable, cloud-native applications and modern GenAI integrations using LangChain, OpenSearch/Kendra, and RAG pipelines.",
    "I'm passionate about building elegant solutions, from REST/GraphQL APIs to visually engaging frontends. I love clean code, CI/CD pipelines, and solving real-world problems through technology.",
    "Outside of work, I mentor students, occasionally explore UI/UX, and stay curious about everything from DevOps to GenAI.",
  ],
  education: [
    {
      degree: "Bachelor of Technology (CSE)",
      university:
        "Institute of Technical Education and Research, SOA University",
      year: "2020–2024",
      details: ["Major in Computer Science and Engineering", "CGPA: 9.5/10"],
    },
    {
      degree: "Higher Secondary Education",
      university: "Delhi Public School, Dhenkanal",
      year: "2018–2020",
      details: ["Science Stream"],
    },
    {
      degree: "Primary & Secondary Education",
      university: "St. Xavier's High School, Dhenkanal",
      year: "2009–2018",
      details: ["Strong academic foundation in Science and Mathematics"],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2025",
      image: AWSCertificate,
      link: "https://www.credly.com/badges/bc8acf44-dabd-468c-97ee-bddbe65798ba/public_url",
      details: ["Validation of foundational AWS cloud knowledge"],
    },
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      year: "2024",
      image: MicrosoftAZ900,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/AshutoshRath-6412/69FEF9744845F89D?sharingId=78CBEC71D7443BE",
      details: [
        "Validated knowledge of Microsoft Azure services and cloud concepts",
      ],
    },
    {
      name: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      year: "2024",
      image: GoogleCloudDigitalLeader,
      link: "https://www.credly.com/badges/f77a0128-f945-4e39-88e2-41b512ea59c7/public_url",
      details: [
        "Demonstrated understanding of Google Cloud services and applications",
      ],
    },
    {
      name: "Java Full Stack",
      issuer: "IBM",
      year: "2024",
      image: IBMTraining,
      link: "https://drive.google.com/file/d/1uLd-XsOHU2c51S-8JOTq25YXI7ysk5Vd/view?usp=sharing",
      details: ["Completed enterprise-level full stack Java training"],
    },
    {
      name: "Cybersecurity Certification",
      issuer: "EY GDS",
      year: "2023",
      image: EYGDSCertificate,
      link: "https://drive.google.com/file/d/1aYWDbolQA-FoTv_O4VieISzhhBemPcT_/view?usp=sharing",
      details: [
        "Fundamentals of cybersecurity and secure development practices",
      ],
    },
    // {
    //   name: "Android Application Development",
    //   issuer: "Udemy",
    //   year: "2023",
    //   image: AWSCertificate,
    //   details: ["Built native Android apps and explored Android SDK"],
    // },
    {
      name: "Data Visualization Virtual Internship",
      issuer: "TATA (Forage)",
      year: "2022",
      image: DataVisualisationTataForage,
      link:"https://drive.google.com/file/d/1eIcAU0MojD_uV9jd5mCqHy7NeJdcFMat/view?usp=sharing",
      details: ["Built dashboards and practiced real-world data visualization"],
    },
    {
      name: "Data Science & Machine Learning",
      issuer: "Google Cloud",
      year: "2021",
      image: GoogleCloudDatascienceAndMachineLearning,
      link:"https://drive.google.com/file/d/1lFelH5dOnErNNTy7IoL3_gf8swoE9yyP/view?usp=sharing",
      details: ["Introduction to ML workflows, modeling, and cloud deployment"],
    },
  ],
  skills: {
    Frontend: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
    Backend: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express",
      "GraphQL",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "DynamoDB",
    ],
    DevOps: ["AWS", "Docker", "CI/CD", "Kubernetes", "API Gateway", "Lambda"],
    GenAI: ["LangChain", "OpenSearch", "Kendra", "Vector Embeddings", "RAG"],
    Other: [
      "Python",
      "Flask",
      "PostgreSQL",
      "Figma",
      "Git",
      "Jenkins",
      "Postman",
    ],
  },
  experience: [
    {
      role: "Application Developer",
      company: "IBM, India",
      period: "Jul 2024 – Present",
      achievements: [
        "Developing enterprise apps using Java, Angular, React, and Node.js for a leading global tobacco client",
        "Building AWS-native microservices with Lambda, S3, API Gateway, and DynamoDB",
        "Implemented GenAI-based document processing using LangChain, OpenSearch/Kendra, and RAG architecture",
        "Integrated REST/GraphQL APIs with responsive frontend modules",
        "Contributed to CI/CD pipelines and code reviews in Agile sprints",
        "Demonstrated strong adaptability and ownership across modules",
      ],
    },
    {
      role: "Application Developer Intern",
      company: "IBM, India",
      period: "Jan 2024 – Jun 2024",
      achievements: [
        "Trained in cloud full stack development, working on multiple web apps",
        "Built REST APIs to enhance software communication and modularity",
        "Led weekly debugging sessions and presented stakeholder updates",
      ],
    },
    {
      role: "React Developer Intern",
      company: "XcitEducation Foundations (WFH)",
      period: "Feb 2022 – Mar 2022",
      achievements: [
        "Developed UI components reducing load times by 25%",
        "Conducted 40+ code corrections through detailed reviews",
        "Built fully responsive pages with consistent cross-device experience",
      ],
    },
  ],
};

// "Hi, I am Ashutosh Rath,
// a passionate software engineer with a knack for creating innovative solutions.
// I thrive on challenges and love to push the boundaries of technology. ]
// My journey in the tech world has been fueled by curiosity and a desire to make a difference.
// Let's connect and explore the endless possibilities together!"
