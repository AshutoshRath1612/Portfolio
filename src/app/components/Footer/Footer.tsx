import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import styles from "./Footer.module.css";
import { socials } from "../constants/Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GiggleButton from "../GiggleButton/GiggleButton";
import { useRouter } from "next/navigation";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons/faAddressBook";

const Footer = () => {
  const router = useRouter();

  const footerRef = useRef(null);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef(null);
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!contentRef.current) return;
    // Background shapes animation
    animate(shapeRefs.current, {
      translateY: [50, 0],
      opacity: [0, 0.15],
      duration: 1500,
      delay: stagger(200),
      easing: "easeOutExpo",
    });

    // Content animation
    animate(contentRef.current, {
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 800,
      easing: "easeOutExpo",
    });

    // Social links animation
    animate(socialRefs.current, {
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600,
      delay: stagger(100, { start: 1000 }),
      easing: "easeOutElastic(1, .6)",
    });
  }, []);

  // Decorative shapes
  const shapes = Array.from({ length: 8 }).map((_, i) => (
    <div
      key={i}
      ref={(el) => {
        shapeRefs.current[i] = el;
      }}
      className={styles.shape}
      style={{
        backgroundColor: `hsl(${200 + i * 15}, 80%, 70%)`,
        width: `${100 + i * 20}px`,
        height: `${100 + i * 20}px`,
        left: `${i * 12}%`,
        top: `${80 - i * 5}%`,
        opacity: 0,
      }}
    />
  ));

  return (
    <footer className={styles.footer} ref={footerRef}>
      {/* Decorative background shapes */}
      <div className={styles.shapesContainer}>{shapes}</div>

      {/* Main content */}
      <div className={styles.content} ref={contentRef}>
        {/* <GiggleButton
          text="Know More"
          name="footerKnowMore"
          name2="footerButtons"
          overlayname="footerOverlay"
          isIcon={false}
          isIconAnimated={false}
          onClick={{ event: "navigate", data: "/about" }}
        /> */}
        <h2 className={styles.title}>
          Let&apos;s create
          <br />
          something wonderful
        </h2>
        {/* <GiggleButton
          text="Contact Me"
          name="footerContactMe"
          name2="footerButtons"
          overlayname="footerOverlay"
          isIcon={false}
          isIconAnimated={false}
          onClick={{ event: "navigate", data: "/contact" }}
        /> */}
        <div className={styles.socialLinks}>
          <button
            onClick={() => router.push("/about")}
            className={styles.socialLink}
            aria-label="About Me"
            onMouseEnter={(e) => {
              animate(e.currentTarget, {
                translateY: -5,
                duration: 300,
                easing: "easeOutExpo",
              });
            }}
            onMouseLeave={(e) => {
              animate(e.currentTarget, {
                translateY: 0,
                duration: 300,
                easing: "easeOutExpo",
              });
            }}
          >
            <FontAwesomeIcon
                className={`${styles.socialIcon}`}
                icon={faAddressCard}
              />
            About Me
          </button>
          <button
            onClick={() => router.push("/contact")}
            className={styles.socialLink}
            aria-label="Contact Me"
            onMouseEnter={(e) => {
              animate(e.currentTarget, {
                translateY: -5,
                duration: 300,
                easing: "easeOutExpo",
              });
            }}
            onMouseLeave={(e) => {
              animate(e.currentTarget, {
                translateY: 0,
                duration: 300,
                easing: "easeOutExpo",
              });
            }}
          >
             <FontAwesomeIcon
                className={`${styles.socialIcon}`}
                icon={faAddressBook}
              />
            Contact Me
          </button>
        </div>
        <div className={styles.socialLinks}>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              ref={(el) => {
                socialRefs.current[index] = el;
              }}
              className={styles.socialLink}
              aria-label={social.name}
              onMouseEnter={(e) => {
                animate(e.currentTarget, {
                  translateY: -5,
                  duration: 300,
                  easing: "easeOutExpo",
                });
              }}
              onMouseLeave={(e) => {
                animate(e.currentTarget, {
                  translateY: 0,
                  duration: 300,
                  easing: "easeOutExpo",
                });
              }}
            >
              <FontAwesomeIcon
                className={`${styles.socialIcon}`}
                icon={social.icon}
              />
              <span className={styles.socialText}>{social.name}</span>
            </a>
          ))}
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Ashutosh Rath. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
