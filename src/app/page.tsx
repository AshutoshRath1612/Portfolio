"use client";

import { animate, stagger, waapi } from "animejs";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import GiggleButton from "./components/GiggleButton/GiggleButton";
import { faFile } from "@fortawesome/free-solid-svg-icons/faFile";
import ResumeModal from "./components/Resume/ResumeModal";
import AboutCard from "./components/About/AboutCard";
import HeroSection from "./components/Hero/HeroSection";
import Skills from "./components/Skill/Skills";
import Projects from "./components/Projects/Projects";

export default function Home() {
  const imageRef = useRef(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const resumeButtonRef = useRef(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);

  const [scrollHero, setscrollHero] = useState(false);
  const [scrollAbout, setScrollAbout] = useState(false);
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
      const triggerHero = 150;
      const triggerAbout = 800;
      const triggerContact = 1500;
      console.log(scrollY);
      if (scrollY > triggerHero && !scrollHero) {
        setscrollHero(true);
        animateToAbout();
        slideOut();
      } else if (scrollY <= triggerHero && scrollHero) {
        setscrollHero(false);
        animateToHero();
        slideIn();
      }

      if (scrollY > triggerAbout && !scrollAbout) {
      setScrollAbout(true);
      animateToSkills();
    } else if (scrollY <= triggerAbout && scrollAbout) {
      setScrollAbout(false);
      slideSkillOut();
      animateToAbout();
    }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollHero,scrollAbout]);

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

  const slideSkillOut = () => {
    if (!skillRef.current) return;
    animate(skillRef.current, {
      translateX: ["0", "-100vw"],
      opacity: [1, 0],
      position: "static",
      duration: 1000,
      delay: stagger(100),
      ease: "inOut(4)",
    });
  }

  const animateToAbout = () => {
    if (imageRef.current) {
      waapi.animate(imageRef.current, {
        translateX: ["0", "-40vw"],
        translateY: ["0", "-25vh"],
        opacity: [0,1],
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
        onBegin: () => {
          const aboutTextEl = textRef.current?.querySelectorAll(".aboutText");
          if (aboutTextEl) {
            animate(aboutTextEl, {
              translateX: ["100vw", "0px"],
              opacity: [0, 1],
              duration: 2000,
              delay: stagger(200),
              ease: "inOut(4)",
            });
          }
        },
      });
    }
  };

  const animateToHero = () => {
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

  const animateToSkills = () => {
      if (textRef.current) {
      animate(textRef.current, {
        opacity: [1,0],
        translateX: ["0", "100vw"],
        duration: 500,
        delay: stagger(100),
        ease: "inOut(4)",
        onComplete: () => {
          if (skillRef.current) {
          animate(skillRef.current, {
            opacity: [0, 1],
            position: "fixed",
            translateX: ["100vw", "0px"],
            duration: 500,
            delay: stagger(100),
            ease: "inOut(4)",
            onBegin: () => {
              const skillTileEl = skillRef.current?.querySelectorAll(".skillTile");
              if (skillTileEl)
              animate(skillTileEl, {
                opacity: [0, 1],
                scale: [0.5, 1],
                rotateY: ["-180deg", "0deg"],
                duration: 500,
                delay: stagger(100),
                ease: "inOut(3)",
                });
            }
          }
          )
        }
      }
    });
    if(imageRef.current){
      waapi.animate(imageRef.current,{
        opacity: [1, 0],
        duration: 500,
        delay: stagger(100),
        ease: "inOut(4)",
      })
    }
    }
  }

  // Main render
  return (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <NavBar />
      <Header />
      <div ref={resumeButtonRef} onMouseEnter={handleResumeEnter} onMouseLeave={handleResumeLeave} onClick={() => setShowResumeModal(true)}>
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

    <HeroSection imageRef={imageRef} heroTextRef={heroTextRef} />
    <div className={styles.text} ref={textRef}>
      <AboutCard />
       <GiggleButton
            text="Know More"
            overlayname=""
            isIcon={false}
            icon={faFile}
            isIconAnimated={false}
            name="knowMore"
            name2=""
            onClick={{ event: "none", data: "" }}
          />
    </div>
    <div ref={skillRef} className={styles.skillContainer}>
      <Skills />
    </div>
    <div className={styles.projectContainer}>
      <Projects />
    </div>
    {showResumeModal && <ResumeModal onClose={() => setShowResumeModal(false)} />}
  </div>
);
}
