import { useEffect, useRef } from "react";
import { waapi, stagger } from "animejs";
import styles from "./skills.module.css";
import SkillTile from "./SkillTile";
import { skills } from "../constants/Info";

export default function Skills() {
  const tileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tileRef.current) {
      const tiles = tileRef.current.querySelectorAll(".skillTile");
      waapi.animate(tiles, {
        scale: [0.5, 1],
        opacity: [0, 1],
        duration: 1000,
        delay: stagger(150),
        ease: "inOut(3)",
      });
    }
  }, []);

  return (
    <div className={styles.glassSection}>
      <h2 className={styles.title}>What I Know</h2>
      <div className={styles.tileContainer} ref={tileRef}>
        {skills.map((skill, idx) => (
          <SkillTile key={idx} icon={skill.img} name={skill.name} />
        ))}
      </div>
    </div>
  );
}
