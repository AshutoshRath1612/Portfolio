"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import {animate, stagger} from 'animejs';
import styles from './about.module.css';
import Navbar from '../components/Navbar/Navbar';
import Avatar from "../assets/Avatar.png"
import { personalInfo, socials } from '../components/constants/Info';
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const certRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!titleRef.current || !profileRef.current) return;
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
    const educationItems = educationRef.current?.querySelectorAll('.educationItem');
    if (educationItems) {
      animate(educationItems, {
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: stagger(100),
        easing: 'easeOutExpo'
      });
    }

    // Certifications animation
    const certItems = certRef.current?.querySelectorAll('.certificationItem');
    if (certItems) {
      animate(certItems, {
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        delay: stagger(100),
        easing: 'spring(1, 80, 10, 0)'
      });
    }

    // Skills animation
    const skillItems = skillRef.current?.querySelectorAll('.skillCategory');
    if (skillItems) {
      animate(skillItems, {
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 600,
        delay: stagger(100),
        easing: 'easeOutExpo'
      });
    }

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
      <Navbar />
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
              src={Avatar}
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
              {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              ))}
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
                <div className={styles.certImage} onClick={()=> window.open(cert.link, "_blank")}>
                  <Image
                    src={cert.image}
                    alt={`${cert.name} certification`}
                    width={120}
                    height={90}
                    className={styles.certLogo}
                    quality={100}
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
              router.push('/contact');
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