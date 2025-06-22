import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import styles from './Footer.module.css';

const Footer = () => {
  const footerRef = useRef(null);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef(null);
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {

    if(!contentRef.current) return;
    // Background shapes animation
    animate(shapeRefs.current, {
      translateY: [50, 0],
      opacity: [0, 0.15],
      duration: 1500,
      delay: stagger(200),
      easing: 'easeOutExpo'
    });

    // Content animation
    animate(contentRef.current, {
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 800,
      easing: 'easeOutExpo'
    });

    // Social links animation
    animate(socialRefs.current, {
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600,
      delay: stagger(100, {start: 1000}),
      easing: 'easeOutElastic(1, .6)'
    });
  }, []);

  // Decorative shapes
  const shapes = Array.from({ length: 8 }).map((_, i) => (
    <div 
      key={i}
      ref={el => { shapeRefs.current[i] = el; }}
      className={styles.shape}
      style={{
        backgroundColor: `hsl(${200 + i * 15}, 80%, 70%)`,
        width: `${100 + i * 20}px`,
        height: `${100 + i * 20}px`,
        left: `${i * 12}%`,
        top: `${80 - i * 5}%`,
        opacity: 0
      }}
    />
  ));

  const socialLinks = [
    { name: "GitHub", icon: "github", url: "#" },
    { name: "LinkedIn", icon: "linkedin", url: "#" },
    { name: "Twitter", icon: "twitter", url: "#" },
    { name: "Email", icon: "mail", url: "mailto:hello@example.com" }
  ];

  return (
    <footer className={styles.footer} ref={footerRef}>
      {/* Decorative background shapes */}
      <div className={styles.shapesContainer}>
        {shapes}
      </div>

      {/* Main content */}
      <div className={styles.content} ref={contentRef}>
        <h2 className={styles.title}>
          Let&apos;s create<br />something wonderful
        </h2>
        
        <div className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              ref={el => {socialRefs.current[index] = el;}}
              className={styles.socialLink}
              aria-label={link.name}
              onMouseEnter={(e) => {
                animate(e.currentTarget, {
                  translateY: -5,
                  duration: 300,
                  easing: 'easeOutExpo'
                });
              }}
              onMouseLeave={(e) => {
                animate(e.currentTarget, {
                  translateY: 0,
                  duration: 300,
                  easing: 'easeOutExpo'
                });
              }}
            >
              <span className={`${styles.socialIcon} ${styles[link.icon]}`}></span>
              <span className={styles.socialText}>{link.name}</span>
            </a>
          ))}
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;