import styles from "./Hero.module.css";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { HeroProps } from "@/app/models/hero.model";

const HeroSection = ({ imageRef, heroTextRef }: HeroProps) => (
  <div className={styles.heroSection}>
    <HeroText ref={heroTextRef} />
    <HeroImage ref={imageRef} />
  </div>
);

export default HeroSection;