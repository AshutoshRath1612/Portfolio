"use client";

import { animate, stagger, waapi } from "animejs";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import NavBar from "./components/Navbar/Navbar";
import Image from "next/image";
import Avatar from "./assets/Avatar.png";
import Header from "./components/Header/Header";
import GiggleButton from "./components/GiggleButton/GiggleButton";
import { faFile } from "@fortawesome/free-solid-svg-icons/faFile";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const imageRef = useRef(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const resumeButtonRef = useRef(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);

  const [scrolledDown, setScrolledDown] = useState(false);
  const [isResumeBtnNotHover, setIsResumeBtnNotHover] = useState(true);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const buttonTransition = () => {
    setIsResumeBtnNotHover((prev) => !prev);
  };

  const handleResumeEnter = () => {
    buttonTransition();
    if (resumeButtonRef.current) {
      waapi.animate(resumeButtonRef.current, {
        scale: [1, 1.1],
        duration: 1000,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
  };

  const handleResumeLeave = () => {
    buttonTransition();
    if (resumeButtonRef.current) {
      waapi.animate(resumeButtonRef.current, {
        scale: [1.1, 1],
        duration: 1000,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
  };

  useEffect(() => {
    sessionStorage.setItem("initialLoading", "true");
    slideIn();
  }, []);

  // Scroll trigger animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 150;
      console.log(scrollY);
      if (scrollY > triggerPoint && !scrolledDown) {
        setScrolledDown(true);
        animateForward();
        slideOut();
      } else if (scrollY <= triggerPoint && scrolledDown) {
        setScrolledDown(false);
        animateBackward();
        slideIn();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDown]);

  const slideOut = () => {
    if (!imageRef.current || !textRef.current) return;

    const heroTextEl = heroTextRef.current?.querySelectorAll("div");
    if (heroTextEl) {
      waapi.animate(heroTextEl, {
        translateX: ["0", "-100vw"],
        opacity: [1, 0],
        duration: 1500,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
  };

  const slideIn = () => {
    if (!imageRef.current || !textRef.current) return;
    const heroTextEl = heroTextRef.current?.querySelectorAll("div");
    waapi.animate(imageRef.current, {
      translateX: ["-100vw", "0"],
      opacity: [0, 1],
      duration: 1000,
      delay: stagger(100),
      ease: "inOut(4)",
    });
    if (heroTextEl) {
      waapi.animate(heroTextEl, {
        translateX: ["-100vw", "0"],
        opacity: [0, 1],
        duration: 1500,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
  };

  const animateForward = () => {
    if (imageRef.current) {
      waapi.animate(imageRef.current, {
        translateX: ["0", "-40vw"],
        translateY: ["0", "-20vh"],
        position: "fixed",
        width: "25%",
        height: "50%",
        ease: "inOut(4)",
        duration: 2000,
        delay: stagger(100),
      });
    }

    if (textRef.current) {
      animate(textRef.current, {
        opacity: [0, 1],
        translateX: ["100vw", "0px"],
        duration: 2000,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
  };

  const animateBackward = () => {
    const aboutTextEl = textRef.current?.querySelectorAll(".aboutText");
    if (imageRef.current) {
      waapi.animate(imageRef.current, {
        translateX: ["-40vw", "-100vw"],
        translateY: ["-20vh", "0"],
        position: "static",
        width: "20%",
        height: "55%",
        ease: "inOut(4)",
        duration: 500,
      });
    }

    if (textRef.current) {
      animate(textRef.current, {
        opacity: [1, 0],
        translateX: ["0px", "-100vw"],
        duration: 500,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
    if (aboutTextEl) {
      animate(aboutTextEl, {
        translateX: ["0px", "100vw"],
        opacity: [1, 0],
        duration: 1000,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
  };

  // Main render
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <NavBar />
          <Header />
          <div
            ref={resumeButtonRef}
            onMouseEnter={handleResumeEnter}
            onMouseLeave={handleResumeLeave}
            onClick={() => setShowResumeModal(true)}
          >
            <GiggleButton
              text="View Resume"
              overlayname="contactOverlay"
              isIcon={isResumeBtnNotHover}
              icon={faFile}
              isIconAnimated={isResumeBtnNotHover}
              name="contactDetails"
              name2="resumeBtn"
              onClick={{ event: "none", data: "" }}
            />
          </div>
        </div>

        <div className={styles.heroSection}>
          <div className={styles.heroTextContainer} ref={heroTextRef}>
            <div className={styles.heroTextHeadingIntro}>
              Hey there, I&apos;m
            </div>
            <div className={styles.heroTextHeadingName}>Ashutosh Rath</div>
            <div className={styles.heroTextHeadingIntro}>
              and I&apos;m a Full Stack Developer
            </div>
          </div>
          <Image
            src={Avatar}
            alt=""
            className={styles.heroImage}
            ref={imageRef}
          />
        </div>
        <div className={styles.text} ref={textRef}>
          <div className={styles.aboutCard}>
            <p className={styles.aboutText}>
              Hey there! I&apos;m <strong>Ashutosh Rath</strong> — a Full Stack
              and Mobile App Developer with a curiosity that never sits still. I
              currently work at <strong>IBM</strong> as an Application
              Developer, where I turn complex ideas into functional, scalable
              applications.
            </p>
            <p className={styles.aboutText}>
              I graduated in 2024 from{" "}
              <strong>
                Institute of Technical Education and Research, SOA University,
                Bhubaneswar
              </strong>
              , and have since been diving deeper into{" "}
              <strong>cloud technologies</strong> and my newest fascination —{" "}
              <strong>AI</strong>.
            </p>
            <p className={styles.aboutText}>
              When I&apos;m not building something cool, you&apos;ll probably
              find me playing a strategic game of chess or exploring new tech
              just for the fun of it.
            </p>
            <p className={styles.aboutText}>
              In the short term, I’m focused on sharpening my skills and
              bringing ideas to life. Long term? I aim to collaborate with
              brilliant minds and build things that leave an impact.
            </p>
            <p className={`${styles.aboutText} ${styles.aboutFooter}`}>
              Let’s connect and create something amazing.
            </p>
          </div>
        </div>
        {/* <div className={styles.spacer} /> */}
      </div>
      {showResumeModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <iframe
              src="/Ashutosh_Rath_Resume.pdf"
              title="Resume"
              className={styles.resumeViewer}
            />
            <div
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Ashutosh_Rath_Resume.pdf";
                link.download = "Ashutosh_Rath_Resume.pdf";
                link.click();
              }}
            >
              <GiggleButton
                text="Download PDF"
                overlayname="resumeDownload"
                isIcon={false}
                icon={faFile}
                isIconAnimated={false}
                name="resumeDownloadBtn"
                name2=""
                onClick={{ event: "none", data: "" }}
              />
            </div>
          </div>
          <div
            className={styles.modalClose}
            onClick={() => setShowResumeModal(false)}
          >
            <GiggleButton
              text=""
              overlayname="socialOverlay"
              isIcon={true}
              icon={faClose}
              isIconAnimated={true}
              name="iconButtons"
              name2=""
              onClick={{ event: "none", data: "" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
