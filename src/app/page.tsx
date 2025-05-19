"use client"

import { animate, waapi } from "animejs";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css"
import { usePathname } from "next/navigation";
import Loader from "./components/Loader/Loader";


const getRouteTitle = (path:string) => {
const initialLoaded = sessionStorage.getItem("initialLoading");
if (path === "/") return initialLoaded ? "HOME" : "HELLO";
if (path === "/about") return "ABOUT";
if (path === "/projects") return "PROJECTS";
if (path === "/contact") return "CONTACT";
return "LOADING";
};


export default function Home() {
  const squareRef = useRef(null);
  const textRef = useRef(null);
  const [scrolledDown, setScrolledDown] = useState(false);

    const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState(pathname);
  const [loaderText, setLoaderText] = useState(getRouteTitle(pathname));


  const loadingRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);



  // First loader on app load
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
  if (pathname !== currentPath) {
    setLoaderText(getRouteTitle(pathname));
    setIsLoading(true);
    setPendingPath(pathname);
  }
}, [pathname,currentPath]);

  const handleLoaderComplete = () => {
    if (loadingRef.current) {
      waapi.animate(loadingRef.current, {
        translateY: ["0%", "-100%"],
        opacity: [1, 0],
        duration: 1200,
        ease: "inOut(2)",
        fill: "forwards",
        complete: () => {
          setCurrentPath(pendingPath || pathname);
          setPendingPath(null);
          setIsLoading(false);
        },
      });
    }
  };

  useEffect(() => {
    if (!isLoading && contentRef.current) {
      waapi.animate(contentRef.current, {
        translateY: ["100%", "0%"],
        opacity: [0, 1],
        duration: 1000,
       ease: "inOut(2)",
        fill: "forwards",
      });
    }
  }, [isLoading]);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledDown]);

  const animateForward = () => {
    if (squareRef.current) {
      animate(squareRef.current, {
        translateX: '-40vw',
        width: '200px',
        height: '100px',
        ease: 'inOut(4)',
        duration: 800,
      });
    }

    if (textRef.current) {
      animate(textRef.current, {
        opacity: [0, 1],
        translateX: ['20px', '0px'],
        duration: 800,
        delay: 300,
        ease: 'inOut(4)',
      });
    }
  };

  const animateBackward = () => {
    if (squareRef.current) {
      animate(squareRef.current, {
        translateX: '0',
        width: '150px',
        height: '150px',
        ease: 'inOut(4)',
        duration: 800,
      });
    }

    if (textRef.current) {
      animate(textRef.current, {
        opacity: [1, 0],
        translateX: ['0px', '20px'],
        duration: 500,
        ease: 'inOut(4)',
      });
    }
  };

  return (
    isLoading ? (
      <div ref={loadingRef} className="loader-wrapper">
        <Loader text={loaderText} onComplete={handleLoaderComplete} />
      </div>
    ) : (
      <div className={styles.container}>
        <div className={styles.square} ref={squareRef}></div>
        <div className={styles.text} ref={textRef}>Here is some text</div>
        <div className={styles.spacer} />
      </div>
    )
  );
}
