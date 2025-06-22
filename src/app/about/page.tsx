import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './about.module.css';
import Avatar from "../assets/Avatar.png"

const About = () => {
  // Sample data - replace with your actual information
  const personalInfo = {
    name: "John Doe",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    bio: "I'm a passionate developer with 5+ years of experience building web applications. I specialize in JavaScript frameworks and have a strong background in both frontend and backend development. When I'm not coding, I enjoy hiking, photography, and contributing to open source projects.",
    education: [
      {
        degree: "Master of Computer Science",
        university: "Stanford University",
        year: "2018-2020"
      },
      {
        degree: "Bachelor of Engineering",
        university: "University of California",
        year: "2014-2018"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        year: "2021"
      },
      {
        name: "Google Professional Data Engineer",
        issuer: "Google Cloud",
        year: "2020"
      }
    ],
    skills: [
      "JavaScript (ES6+)", "React.js", "Node.js", 
      "TypeScript", "GraphQL", "AWS", 
      "Docker", "Python", "UI/UX Design"
    ]
  };

  return (
    <div className={styles.aboutPage}>
      <Head>
        <title>About Me | My Portfolio</title>
        <meta name="description" content="Learn more about my background, skills, and experience" />
      </Head>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Me</h1>
          <p className={styles.heroSubtitle}>Get to know me better</p>
        </div>
      </section>

      <section className={styles.aboutContainer}>
        <div className={styles.profileSection}>
          <div className={styles.profileImage}>
            <Image
              src={Avatar} // Replace with your image path
              alt="Profile picture"
              width={400}
              height={400}
              className={styles.image}
            />
          </div>
          
          <div className={styles.profileInfo}>
            <h2 className={styles.name}>{personalInfo.name}</h2>
            <h3 className={styles.title}>{personalInfo.title}</h3>
            <p className={styles.location}>{personalInfo.location}</p>
            <p className={styles.email}>{personalInfo.email}</p>
            
            <div className={styles.socialLinks}>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bioSection}>
          <h2 className={styles.sectionTitle}>My Story</h2>
          <p className={styles.bioText}>{personalInfo.bio}</p>
        </div>

        <div className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationList}>
            {personalInfo.education.map((edu, index) => (
              <div key={index} className={styles.educationItem}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.university}>{edu.university}</p>
                <p className={styles.year}>{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.certificationsSection}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.certificationsList}>
            {personalInfo.certifications.map((cert, index) => (
              <div key={index} className={styles.certificationItem}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
                <p className={styles.year}>{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <div className={styles.skillsList}>
            {personalInfo.skills.map((skill, index) => (
              <span key={index} className={styles.skillItem}>{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Want to work together?</h2>
          <p className={styles.ctaText}>Feel free to reach out for collaborations or just a friendly hello!</p>
          <button className={styles.contactButton}>Contact Me</button>
        </div>
      </section>
    </div>
  );
};

export default About;