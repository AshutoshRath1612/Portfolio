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
import Footer from "./components/Footer/Footer";
import { projects } from "./components/constants/Info";

export default function Home() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const resumeButtonRef = useRef(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);

  const [scrollHero, setscrollHero] = useState(false);
  const [scrollAbout, setScrollAbout] = useState(false);
  const [scrollProject, setScrollProject] = useState(false);
  const [scrollFooter, setScrollFooter] = useState(false);
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
      const projectSection = document.getElementsByClassName('projects-card');
      const scrollY = window.scrollY;
      const triggerHero = 150;
      const triggerAbout = 800;
      const triggerSkills = 1200;
      const projectSectionScrollWidth = projectSection[0]?.scrollWidth ?? 0;
      const triggerProject = projectSectionScrollWidth === 0
        ? 1400 + window.innerHeight * projects.length
        : (projectSection[0].scrollWidth * projects.length + 1400);
      // const triggerProject = projectSection[0].scrollWidth * projects.length + 1400;
      console.log(projectSection[0].scrollWidth)
      
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
        animateToSkills(true);
      } else if (scrollY <= triggerAbout && scrollAbout) {
        setScrollAbout(false);
        slideSkillOut();
        animateToAbout();
      }

      if (scrollY > triggerSkills && !scrollProject) {
        setScrollProject(true);
        animateToProjects(true);
      } else if (scrollY <= triggerSkills && scrollProject) {
        setScrollProject(false);
        slideProjectOut();
        animateToSkills(false);
      }
      if (scrollY > triggerProject && !scrollFooter) {
        setScrollFooter(true);
        animateToFooter();
      } else if (scrollY <= triggerProject && scrollFooter) {
        setScrollFooter(false);
        slideFooterOut();
        animateToProjects(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollHero, scrollAbout, scrollProject, scrollFooter]);

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
      // position: "static",
      // display:"none",
      duration: 1000,
      delay: stagger(100),
      ease: "inOut(4)",
      onComplete: () => {
        skillRef.current?.style.setProperty("display", "none");
      },
    });
  };
  const slideProjectOut = () => {
    if (!projectRef.current) return;
    animate(projectRef.current, {
      translateX: ["0", "-100vw"],
      opacity: [1, 0],
      // position: "static",
      // display:"none",
      duration: 1000,
      delay: stagger(100),
      ease: "inOut(4)",
      onComplete: () => {
        projectRef.current?.style.setProperty("display", "none");
      },
    });
  };
  const slideFooterOut = () => {
    if (!footerRef.current) return;
    animate(footerRef.current, {
      translateX: ["0", "-100vw"],
      opacity: [1, 0],
      // position: "static",
      // display:"none",
      duration: 1000,
      delay: stagger(100),
      ease: "inOut(4)",
      onComplete: () => {
        footerRef.current?.style.setProperty("display", "none");
        const footerContainer = footerRef.current?.querySelector(".footerContainerDiv");
        if (footerContainer && footerContainer instanceof HTMLElement) {
          footerContainer.style.setProperty("border-radius", "50%");
          footerContainer.style.setProperty("height", "20rem");
          footerContainer.style.setProperty("width", "20rem");
          footerContainer.style.setProperty("opacity", "0");
        }
      },
    });
  };

  const animateToAbout = () => {
    if (imageRef.current && window.innerWidth > 468) {
      waapi.animate(imageRef.current, {
        translateX: ["0", window.innerWidth <= 768 ? "-45vw":"-40vw"],
        translateY: ["0", "-25vh"],
        opacity: [0, 1],
        position: "fixed",
        display: "block",
        width: "25%",
        height: window.innerWidth <= 768 ? "25%" : "50%",
        ease: "inOut(4)",
        duration: 2000,
        delay: stagger(100),
      });
    }
    else if(window.innerWidth <= 768 && imageRef.current) {
      imageRef.current.style.setProperty("display", "none");
    }

    if (textRef.current) {
      animate(textRef.current, {
        opacity: [0, 1],
        translateX: ["100vw", window.innerWidth > 768 ? "-30px" : window.innerWidth < 480 ? "10%" : "0px"],
        duration: 2000,
        display: "flex",
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
    const imageWidth = window.innerWidth <= 768 ? "35%" : "20%";
    const imageHeight = window.innerWidth <= 768 ? "45%" : "55%";
    if (imageRef.current) {
      waapi.animate(imageRef.current, {
        translateX: ["-40vw", "-100vw"],
        translateY: ["-20vh", "0"],
        position: "static",
        display: "block",
        width: window.innerWidth > 468 && imageWidth,
        height: window.innerWidth > 468 &&imageHeight,
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

  const animateToSkills = (forwards: boolean) => {
    if (textRef.current && forwards) {
      animate(textRef.current, {
        opacity: [1, 0],
        translateX: ["0", "100vw"],
        duration: 500,
        display: "none",
        delay: stagger(100),
        ease: "inOut(4)",
      });
      if (imageRef.current) {
        waapi.animate(imageRef.current, {
          opacity: [1, 0],
          duration: 500,
          display: "none",
          delay: stagger(100),
          ease: "inOut(4)",
          onComplete: () => {
            imageRef.current?.style.setProperty("display", "none");
          },
        });
      }
    }
    if (skillRef.current) {
      animate(skillRef.current, {
        opacity: [0, 1],
        // position: "fixed",
        display: "block",
        translateX: ["100vw", "0px"],
        duration: 1500,
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
        },
      });
    }
  };

  const animateToProjects = (forwards: boolean) => {
    if (skillRef.current && forwards) {
      animate(skillRef.current, {
        opacity: [1, 0],
        translateX: ["0px", "-100vw"],
        duration: 500,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
    if (projectRef.current) {
      animate(projectRef.current, {
        opacity: [0, 1],
        position: "fixed",
        display: "block",
        translateX: ["-100vw", "0px"],
        duration: 500,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
  };
  const animateToFooter = () => {
    if (projectRef.current) {
      animate(projectRef.current, {
        opacity: [1, 0],
        translateX: ["0px", "-100vw"],
        duration: 500,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
    if (footerRef.current) {
      animate(footerRef.current, {
        opacity: [0, 1],
        position: "fixed",
        display: "block",
        translateX: ["-100vw", "0px"],
        duration: 500,
        delay: stagger(100),
        ease: "inOut(4)",
        onComplete: () => {
          const footerEl = footerRef.current?.querySelector("div");
          if (!footerEl) return;
          animate(footerEl,{
              opacity: 1,
              translateY: ["50vh", "0px"],
              duration: 1000,
              easing: 'easeInOutSine',
              onComplete:() =>{
                  animate(footerEl,{
                      borderRadius: 0,
                      width: "30rem",
                      height: "30rem",
                      duration: 200,
                  })
              }
          })
        },
      });
    }
  };

  // Main render
  return (
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
            text={window.innerWidth > 425 ? "View Resume" : "View CV"}
            overlayname="contactOverlay"
            isIcon={window.innerWidth > 768 ? isResumeBtnNotHover : false}
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
          overlayname="knowMoreOverlay"
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
      <div ref={projectRef} className={styles.projectContainer}>
        <Projects />
      </div>
      <div ref={footerRef} className={styles.footerContainer}>
        <Footer />
      </div>
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </div>
  );
}
