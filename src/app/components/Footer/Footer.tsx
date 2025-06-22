import React, { useEffect, useRef } from 'react';
import { animate, utils } from 'animejs';
import styles from './Footer.module.css';

const Footer = () => {
  const footerRef = useRef(null);
  const particlesRef = useRef([]);
  const contentRef = useRef(null);
  const yearRef = useRef(null);

  // Create particle elements
  const particles = Array.from({ length: 30 }).map((_, i) => (
    <div 
      key={i}
      ref={el => particlesRef.current[i] = el}
      className={styles.particle}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${5 + Math.random() * 10}px`,
        height: `${5 + Math.random() * 10}px`,
        opacity: 0
      }}
    />
  ));

  useEffect(() => {
    // Background fade-in
    animate(footerRef.current, {
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeOutExpo'
    });

    // Particle animations
    particlesRef.current.forEach(particle => {
      animate(particle, {
        opacity: [0, 0.6],
        translateX: [utils.random(-100, 100), 0],
        translateY: [utils.random(-100, 100), 0],
        duration: utils.random(1000, 2000),
        delay: utils.random(0, 500),
        easing: 'easeOutExpo'
      });

      // Continuous floating
      animate(particle,{
        translateY: [0, utils.random(-20, 20)],
        duration: utils.random(3000, 6000),
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
    });

    // Content animation
    animate(contentRef.current, {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: 800,
      easing: 'easeOutExpo'
    });

    // Year animation
    animate(yearRef.current, {
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 1000,
      delay: 1200,
      easing: 'easeOutElastic(1, .8)'
    });
  }, []);

  return (
    <footer className={styles.footer} ref={footerRef}>
      {/* Animated background particles */}
      <div className={styles.particlesContainer}>
        {particles}
      </div>

      {/* Content container */}
      <div className={styles.content} ref={contentRef}>
        <h2 className={styles.title}>Let&apos;s Build Something Amazing</h2>
        
        <div className={styles.contactInfo}>
          <a href="mailto:hello@example.com" className={styles.email}>
            hello@example.com
          </a>
          <p className={styles.location}>Based in San Francisco, CA</p>
        </div>

        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>GitHub</a>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
          <a href="#" className={styles.socialLink}>Twitter</a>
          <a href="#" className={styles.socialLink}>Dribbble</a>
        </div>

        <div className={styles.copyright} ref={yearRef}>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;