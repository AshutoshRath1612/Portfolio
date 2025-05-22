import React, { useEffect, useRef, useState } from "react";
import style from "./navbar.module.css";
import { waapi } from "animejs";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GiggleButton from "../GiggleButton/GiggleButton";
import { getRandomColour, navItems } from "../constants/Functions";
import Socials from "../Socials/Socials";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [showCircleNav, setShowCircleNav] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [randomColour, setRandomColour] = useState("#455ce9");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [positionTop, setPositionTop] = useState(0);
  const [activeColour, setActiveColour] = useState("#455ce9");

  useEffect(() => {
    if (sidebarOpen) {
      // Capture scroll position when sidebar is opened
      setPositionTop(window.scrollY);
    }
  }, [sidebarOpen]);

  useEffect(() => {
    setRandomColour(getRandomColour());
  }, []);

  const setRandomColourForHover = (index: number) => {
    const color = getRandomColour();
    setCurrentIndex(index);
    setRandomColour(color);
  };

  const resetColour = () => {
    setRandomColour("#111");
    setCurrentIndex(-1);
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        sidebarOpen &&
        sidebarRef.current &&
        target &&
        !(sidebarRef.current as HTMLElement).contains(target) &&
        !target.closest(".circle-nav")
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
        onComplete: () => {
          el.style.display = "none";
        },
      });
    }
  }, [sidebarOpen]);

    const handleNavigate = (path: string) => {
    setSidebarOpen(false);
    router.push(path);
  };

  // useEffect(() => {
  //   const onScroll = () => setShowCircleNav(window.scrollY > 100);
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    // Change active color when route changes
    setActiveColour(getRandomColour());
  }, [pathname]);

  return (
    <>
      {showCircleNav && (
        <GiggleButton
        text=""
        overlayname=""
          isIcon={true}
          icon={sidebarOpen ? faX : faBars}
          isIconAnimated={true}
          name="circleNav"
          onClick={{
            event: "toggle",
            data: {state: sidebarOpen , setState: setSidebarOpen},
          }}
        />
      )}

      <div
        className={`${style.sidebar} ${sidebarOpen ? style.open : ""}`}
        style={{ top: `${positionTop}px` }}
        ref={sidebarRef}
      >
        <div className={style.content}>
          <div className={style.sidebarHeading}>Navigation</div>
          <div className={style.line}></div>
          <ul className={style.sidebarNavigations}>
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onMouseEnter={() => setRandomColourForHover(index)}
                  onClick={()=>handleNavigate(item.path)}
                  onMouseLeave={resetColour}
                  className={`${style.sidebarButtons} ${
                    location.pathname === item.path ? style.active : ""
                  }`}
                  style={{
                    backgroundColor:
                      location.pathname === item.path
                        ? activeColour
                        : currentIndex === index
                        ? randomColour
                        : "#111",
                    color:
                      location.pathname === item.path || currentIndex === index
                        ? "black"
                        : "white",
                    boxShadow:
                      currentIndex === index ? "0px 0px 8px 1px white" : "",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <span style={{ flex: 1 }}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className={style.sidebarSocialContainer}>
            <Socials isHeader={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
