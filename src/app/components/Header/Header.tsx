import React, { useEffect, useRef } from "react";
import styles from "./header.module.css"
import { animate, stagger } from "animejs";

const Header = () => {
    const headingRef = useRef<HTMLDivElement | null>(null);
     useEffect(() => {
        const targets = headingRef.current?.querySelectorAll(`.${styles.char}`);
        if (targets) {
          animate(targets, {
            opacity: [0, 1],
            translateX: ["100vw", "0px"],
            delay: stagger(100),
            duration: 1000,
            easing: "easeOutQuad",
          });
        }
      }, [headingRef]);
  return (
    <div className={styles.heading} ref={headingRef}>
      {""}
      {"</> Ashutosh Rath"
        .trim()
        .split("")
        .map((char, i) => (
          <span key={i} className={styles.char}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
    </div>
  );
};

export default Header;
