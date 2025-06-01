import { forwardRef } from "react";
import GiggleButton from "../GiggleButton/GiggleButton";
import Socials from "../Socials/Socials";
import styles from "./Hero.module.css";

const HeroText = forwardRef<HTMLDivElement>((_, ref) => (
  <div className={styles.heroTextContainer} ref={ref}>
    <div className={styles.heroTextHeadingIntro}>Hey there, I&apos;m</div>
    <div className={styles.heroTextHeadingName}>Ashutosh Rath</div>
    <div className={styles.heroTextHeadingIntro}>and I&apos;m a Full Stack Developer</div>
    <div>
      <GiggleButton
        text="Contact Me"
        name="contactDetails"
        name2="homeSocials"
        overlayname="contactOverlay"
        isIcon={false}
        isIconAnimated={false}
        onClick={{ event: "navigate", data: "/contact" }}
      />
      <Socials isHeader={false} isHomePage={true} />
    </div>
  </div>
));

export default HeroText;
HeroText.displayName = "HeroText";