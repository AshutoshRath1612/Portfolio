import Image from "next/image";
import Avatar from "../../assets/Avatar.png";
import styles from "./Hero.module.css";
import { forwardRef } from "react";

const HeroImage = forwardRef<HTMLImageElement>((_, ref) => (
  <Image src={Avatar} alt="Avatar" className={styles.heroImage} ref={ref} />
));

HeroImage.displayName = "HeroImage";
export default HeroImage;