"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import {animate, stagger} from 'animejs';
import styles from './About.module.css';

const About = () => {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const profileRef = useRef(null);
  const educationRef = useRef(null);
  const certRef = useRef(null);
  const skillRef = useRef(null);

  // Sample data - replace with your actual information
  const personalInfo = {
    name: "John Doe",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    bio: [
      "I'm a passionate developer with 5+ years of experience building web applications. I specialize in JavaScript frameworks and have a strong background in both frontend and backend development.",
      "My journey in tech began when I built my first website at 15, and I've been hooked ever since. I love solving complex problems with elegant solutions that delight users.",
      "When I'm not coding, I enjoy hiking, photography, and contributing to open source projects. I also mentor aspiring developers through local coding bootcamps."
    ],
    education: [
      {
        degree: "Master of Computer Science",
        university: "Stanford University",
        year: "2018-2020",
        details: [
          "Specialized in Artificial Intelligence",
          "Thesis on 'Neural Networks for Image Recognition'",
          "GPA: 3.9/4.0"
        ]
      },
      {
        degree: "Bachelor of Engineering",
        university: "University of California",
        year: "2014-2018",
        details: [
          "Major in Computer Science",
          "Minor in Mathematics",
          "Dean's List all semesters"
        ]
      }
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        year: "2021",
        image: "/aws-cert.png", // Replace with your image path
        details: [
          "Validation of technical expertise in developing AWS applications",
          "Skills in AWS SDK, CI/CD pipelines, and serverless applications",
          "Certification ID: AWS-123456789"
        ]
      },
      {
        name: "Google Professional Data Engineer",
        issuer: "Google Cloud",
        year: "2020",
        image: "/google-cert.png", // Replace with your image path
        details: [
          "Designing data processing systems",
          "Building and operationalizing ML models",
          "Certification ID: GCP-987654321"
        ]
      }
    ],
    skills: {
      "Frontend": ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      "Backend": ["Node.js", "Express", "GraphQL", "REST APIs", "MongoDB"],
      "DevOps": ["AWS", "Docker", "CI/CD", "Kubernetes", "Terraform"],
      "Other": ["UI/UX Design", "Python", "Machine Learning", "Blockchain"]
    },
    experience: [
      {
        role: "Senior Developer",
        company: "Tech Solutions Inc.",
        period: "2020-Present",
        achievements: [
          "Led team of 5 developers to build enterprise SaaS platform",
          "Reduced API response time by 40% through optimization",
          "Implemented CI/CD pipeline reducing deployment time by 70%"
        ]
      },
      {
        role: "Software Engineer",
        company: "Digital Innovations",
        period: "2018-2020",
        achievements: [
          "Developed customer portal used by 50,000+ users",
          "Created reusable component library saving 300+ dev hours",
          "Mentored 3 junior developers"
        ]
      }
    ]
  };

  useEffect(() => {
    // Title animation
    animate(titleRef.current,{
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo'
    });

    // Profile section animation
    animate(profileRef.current, {
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: 'easeOutExpo'
    });

    // Education section animation
    animate(educationRef.current.querySelectorAll('.educationItem'), {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: stagger(100),
      easing: 'easeOutExpo'
    });

    // Certifications animation
    animate(certRef.current.querySelectorAll('.certificationItem'), {
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 800,
      delay: stagger(100),
      easing: 'spring(1, 80, 10, 0)'
    });

    // Skills animation
    animate(skillRef.current.querySelectorAll('.skillCategory'), {
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 600,
      delay: stagger(100),
      easing: 'easeOutExpo'
    });

    // Experience animation
    animate('.experienceItem', {    
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 700,
      delay: stagger(100),
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <div className={styles.aboutPage} ref={aboutRef}>
      <Head>
        <title>About Me | My Portfolio</title>
        <meta name="description" content="Learn more about my background, skills, and experience" />
      </Head>

      <section className={styles.heroSection}>
        <div className={styles.heroContent} ref={titleRef}>
          <h1 className={styles.heroTitle}>About Me</h1>
          <p className={styles.heroSubtitle}>Get to know me better</p>
        </div>
      </section>

      <section className={styles.aboutContainer}>
        {/* Profile Section */}
        <div className={styles.profileSection} ref={profileRef}>
          <div className={styles.profileImage}>
            <Image
              src="/profile.jpg" // Replace with your image path
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

        {/* Bio Section */}
        <div className={styles.bioSection}>
          <h2 className={styles.sectionTitle}>My Story</h2>
          {personalInfo.bio.map((paragraph, index) => (
            <p key={index} className={styles.bioText}>{paragraph}</p>
          ))}
        </div>

        {/* Experience Section */}
        <div className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <div className={styles.experienceList}>
            {personalInfo.experience.map((exp, index) => (
              <div key={index} className={`${styles.experienceItem} experienceItem`}>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.companyInfo}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className={styles.achievementItem}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={styles.educationSection} ref={educationRef}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationList}>
            {personalInfo.education.map((edu, index) => (
              <div key={index} className={`${styles.educationItem} educationItem`}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.university}>{edu.university}</p>
                <p className={styles.year}>{edu.year}</p>
                <ul className={styles.detailsList}>
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className={styles.detailItem}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className={styles.certificationsSection} ref={certRef}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.certificationsList}>
            {personalInfo.certifications.map((cert, index) => (
              <div key={index} className={`${styles.certificationItem} certificationItem`}>
                <div className={styles.certImage}>
                  <Image
                    src={cert.image}
                    alt={`${cert.name} certification`}
                    width={120}
                    height={90}
                    className={styles.certLogo}
                  />
                </div>
                <div className={styles.certInfo}>
                  <h3 className={styles.certName}>{cert.name}</h3>
                  <p className={styles.issuer}>{cert.issuer}</p>
                  <p className={styles.year}>{cert.year}</p>
                  <ul className={styles.detailsList}>
                    {cert.details.map((detail, idx) => (
                      <li key={idx} className={styles.detailItem}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection} ref={skillRef}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <div className={styles.skillsContainer}>
            {Object.entries(personalInfo.skills).map(([category, skills], index) => (
              <div key={index} className={`${styles.skillCategory} skillCategory`}>
                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                <div className={styles.skillsList}>
                  {skills.map((skill, idx) => (
                    <span key={idx} className={styles.skillItem}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Want to work together?</h2>
          <p className={styles.ctaText}>Feel free to reach out for collaborations or just a friendly hello!</p>
          <button 
            className={styles.contactButton}
            onClick={() => {
              animate(styles.contactButton, {
                scale: [1, 1.1, 1],
                duration: 600,
                easing: 'easeOutElastic(1, .5)'
              });
              // Add your contact logic here
            }}
          >
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;