"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import Lottie from "lottie-react";
import thankYouAnim from "../../assets/thankyou.json";
import styles from "./footer.module.css";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         const letters = footerRef.current?.querySelectorAll(".letter");
  //         animate(letters, {
  //           translateY: [40, 0],
  //           opacity: [0, 1],
  //           delay: stagger(100),
  //           easing: "easeOutExpo",
  //         });

  //         const icons = footerRef.current?.querySelectorAll(".icon");
  //         animate(icons, {
  //           opacity: [0, 1],
  //           scale: [0.5, 1],
  //           delay: stagger(150, { start: 800 }),
  //           easing: "spring(1, 80, 10, 0)",
  //         });
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );

  //   if (footerRef.current) observer.observe(footerRef.current);
  //   return () => observer.disconnect();
  // }, []);

  return (
    <footer className={`${styles.footer} footerContainerDiv`} ref={footerRef}>
      <div className={styles.lottie}>
        <Lottie animationData={thankYouAnim} loop={true} color={"white"}/>
      </div>
      <h1 className={styles.thankYou}>
        {"THANK YOU".split("").map((char, i) => (
          <span key={i} className="letter">
            {char}
          </span>
        ))}
      </h1>
      <p className={styles.message}>
        Had fun building this? I did too! Let’s connect 🚀
      </p>
      <div className={styles.socials}>
        <a className="icon" href="https://github.com/" target="_blank">GitHub</a>
        <a className="icon" href="https://linkedin.com/" target="_blank">LinkedIn</a>
        <a className="icon" href="mailto:your@email.com">Email</a>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Ashutosh Rath. Let’s build weird things together.
      </p>
    </footer>
  );
}