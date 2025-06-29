
import { useEffect, useState } from "react";
import styles from "./AboutCard.module.css";

const AboutCard = () => {
  const [aboutCardHeight, setAboutCardHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const aboutTextEl = document.querySelectorAll(".aboutText");
      let aboutCardHeight = 50;
      aboutTextEl.forEach((el) => {
        aboutCardHeight += el.scrollHeight;
      });
      // Set the height of the about card based on the scrollHeight of the first aboutText
      if (aboutTextEl[0]) {
        setAboutCardHeight(aboutCardHeight);
        console.log(aboutTextEl[0]);
      }
    };

    handleResize(); // Set initial height
    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);
  return(
    <div className={styles.aboutCard} style={{height: aboutCardHeight}}>
      <p className={`${styles.aboutText} aboutText`}>
        Hey there! I&apos;m <strong>Ashutosh Rath</strong> — a Full Stack and
        Mobile App Developer with a curiosity that never sits still. I currently
        work at <strong>IBM</strong> as an Application Developer, where I turn
        complex ideas into functional, scalable applications.
      </p>
      <p className={`${styles.aboutText} aboutText`}>
        I graduated in 2024 from{" "}
        <strong>
          Institute of Technical Education and Research, SOA University,
          Bhubaneswar
        </strong>
        , and have since been diving deeper into{" "}
        <strong>cloud technologies</strong> and my newest fascination —{" "}
        <strong>AI</strong>.
      </p>
      <p className={`${styles.aboutText} aboutText`}>
        When I&apos;m not building something cool, you&apos;ll probably find me
        playing a strategic game of chess or exploring new tech just for the fun
        of it.
      </p>
      <p className={`${styles.aboutText} aboutText`}>
        In the short term, I’m focused on sharpening my skills and bringing
        ideas to life. Long term? I aim to collaborate with brilliant minds and
        build things that leave an impact.
      </p>
      <p className={`${`${styles.aboutText} aboutText`} ${styles.aboutFooter}`}>
        Let’s connect and create something amazing.
      </p>
    </div>
)};

export default AboutCard;
