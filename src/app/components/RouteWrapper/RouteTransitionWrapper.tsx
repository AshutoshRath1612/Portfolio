"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "../Loader/Loader";
import { waapi } from "animejs";

// Get proper loader title
const getRouteTitle = (path: string, initialLoaded: boolean) => {
  if (path === "/") return initialLoaded ? "HOME" : "HELLO";
  if (path === "/about") return "ABOUT";
  if (path === "/projects") return "PROJECTS";
  if (path === "/contact") return "CONTACT";
  return "LOADING";
};

const RouteTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [initialLoaded, setInitialLoaded] = useState<boolean | null>(null);
  const [loaderText, setLoaderText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState(pathname);

  // Set initialLoaded only once per session
  useEffect(() => {
    const wasLoadedBefore = sessionStorage.getItem("initialLoading") === "true";
  setInitialLoaded(wasLoadedBefore);
  }, []);

  // Once initialLoaded is known, set loader text
  useEffect(() => {
    if (initialLoaded !== null) {
      setLoaderText(getRouteTitle(pathname, initialLoaded));
    }
  }, [initialLoaded, pathname]);

  // Handle route change
  useEffect(() => {
    if (initialLoaded === null) return;

    if (pathname !== currentPath) {
      setLoaderText(getRouteTitle(pathname, true));
      setIsLoading(true);
      setPendingPath(pathname);
    }
  }, [pathname, currentPath, initialLoaded]);

  useEffect(() => {
    if (initialLoaded === null) return;

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [initialLoaded]);

const handleLoaderComplete = () => {
  if (loadingRef.current) {
    waapi.animate(loadingRef.current, {
      opacity: [1, 0],
      duration: 1000,
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
        opacity: [0, 1],
        duration: 800,
        ease: "inOut(2)",
        fill: "forwards",
      });
    }
  }, [isLoading]);

  if (initialLoaded === null || loaderText === null) return null;

  return isLoading ? (
    <div ref={loadingRef} className="loader-wrapper">
      <Loader text={loaderText} onComplete={handleLoaderComplete} />
    </div>
  ) : (
    <div ref={contentRef}>{children}</div>
  );
};

export default RouteTransitionWrapper;
