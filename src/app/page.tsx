"use client";

import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import NavBar from "./components/Navbar/Navbar";
import Image from "next/image";
import Avatar from "./assets/Avatar.png";
import Header from "./components/Header/Header";

export default function Home() {
  const squareRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("initialLoading", "true");
  }, []);

  // Scroll trigger animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 200;

      if (scrollY > triggerPoint && !scrolledDown) {
        setScrolledDown(true);
        animateForward();
      } else if (scrollY <= triggerPoint && scrolledDown) {
        setScrolledDown(false);
        animateBackward();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDown]);

  const animateForward = () => {
    if (squareRef.current) {
      animate(squareRef.current, {
        translateX: "-40vw",
        translateY: "-20vh",
        position: "fixed",
        width: "25%",
        height: "50%",
        ease: "inOut(4)",
        duration: 800,
      });
    }

    if (textRef.current) {
      animate(textRef.current, {
        opacity: [0, 1],
        translateX: ["20px", "0px"],
        duration: 800,
        delay: 300,
        ease: "inOut(4)",
      });
    }
  };

  const animateBackward = () => {
    if (squareRef.current) {
      animate(squareRef.current, {
        transform: "none", 
        position: "static",
        width: "20%",
        height: "100%",
        ease: "inOut(4)",
        duration: 800,
      });
    }

    if (textRef.current) {
      animate(textRef.current, {
        opacity: [1, 0],
        translateX: ["0px", "20px"],
        duration: 500,
        ease: "inOut(4)",
      });
    }
  };

  // Main render
  return (
    <>
      <NavBar />
      <div ref={contentRef} className={styles.container}>
        <Header />

        <div className={styles.heroSection}>
          <div className={styles.heroText}>
            This is a hero section with some text that will animate
            when you scroll down. The square will move and the text will
          </div>
          <Image
            src={Avatar}
            alt=""
            className={styles.heroImage}
            ref={squareRef}
          />
        </div>
          <div className={styles.text} ref={textRef}>
            Here is some text
          </div>
        {/* <div className={styles.spacer} /> */}
      </div>
    </>
  );
}
