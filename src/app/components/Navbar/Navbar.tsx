"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./navbar.module.css";
import { waapi } from "animejs";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GiggleButton from "../GiggleButton/GiggleButton";
import { getRandomColour, navItems } from "../constants/Functions";
import Socials from "../Socials/Socials";
import { usePathname, useRouter } from "next/navigation";
import { SidebarProps } from "@/app/models/sidebar.model";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [randomColour, setRandomColour] = useState("#455ce9");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [positionTop, setPositionTop] = useState(0);
  const [activeColour, setActiveColour] = useState("#455ce9");

  useEffect(() => {
    if (sidebarOpen) {
      setPositionTop(window.scrollY);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    setActiveColour(getRandomColour());
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        !target.closest(".circle-nav")
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;

    if (sidebarOpen) {
      el.style.display = "block";
      waapi.animate(el, {
        opacity: [0, 1],
        translateX: ["-100%", "0%"],
        duration: 700,
        ease: "inOut(2)",
      });
    } else {
      waapi.animate(el, {
        opacity: [1, 0],
        translateX: ["0%", "-100%"],
        duration: 700,
        ease: "inOut(2)",
        onComplete: () => (el.style.display = "none"),
      });
    }
  }, [sidebarOpen]);

  const handleNavigate = (path: string) => {
    setSidebarOpen(false);
    router.push(path);
  };

  const setRandomColourForHover = (index: number) => {
    setCurrentIndex(index);
    setRandomColour(getRandomColour());
  };

  const resetColour = () => {
    setCurrentIndex(-1);
    setRandomColour("#111");
  };

  return (
    <>
    <div onClick={() => setSidebarOpen(prev => !prev)} className={`circle-nav ${style.aboutButton} ${style.circleNav}`}>

      <GiggleButton
        text=""
        overlayname=""
        isIcon
        icon={sidebarOpen ? faX : faBars}
        isIconAnimated
        name="circleNav"
        onClick={{
          event: "none",
          data: "",
        }}
      />
    </div>

      <div
        className={`${style.sidebar} ${sidebarOpen ? style.open : ""}`}
        style={{ top: `${positionTop}px` }}
        ref={sidebarRef}
      >
        <div className={style.content}>
          <div className={style.sidebarHeading}>Navigation</div>
          <div className={style.line}></div>
          <ul className={style.sidebarNavigations}>
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              const isHovered = currentIndex === index;
              const bgColor = isActive ? activeColour : isHovered ? randomColour : "#111";
              const textColor = isActive || isHovered ? "black" : "white";
              const boxShadow = isHovered ? "0px 0px 8px 1px white" : "";

              return (
                <li key={index}>
                  <button
                    onMouseEnter={() => setRandomColourForHover(index)}
                    onMouseLeave={resetColour}
                    onClick={() => handleNavigate(item.path)}
                    className={`${style.sidebarButtons} ${isActive ? style.active : ""}`}
                    style={{ backgroundColor: bgColor, color: textColor, boxShadow }}
                  >
                    <span style={{ width: "24px", display: "flex", justifyContent: "center" }}>
                      <FontAwesomeIcon icon={item.icon} />
                    </span>
                    <span style={{ flex: 1 }}>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className={style.sidebarSocialContainer}>
            <Socials isHeader />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
