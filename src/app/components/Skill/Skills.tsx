import styles from "./skills.module.css";
import SkillTile from "./SkillTile";
import { skills } from "../constants/Info";

export default function Skills() {

  return (
    <div className={styles.glassSection}>
      <h2 className={styles.title}>What I Know</h2>
      <div className={styles.tileContainer}>
        {skills.map((skill, idx) => (
          <SkillTile key={idx} icon={skill.img} name={skill.name} />
        ))}
      </div>
    </div>
  );
}
