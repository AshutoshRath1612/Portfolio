import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import styles from "./Skills.module.css";

interface Props {
  icon: FontAwesomeIconProps["icon"];
  name: string;
}

export default function SkillTile({ icon, name }: Props) {
  return (
    <div className={`${styles.skillTile} skillTile`}>
      <FontAwesomeIcon icon={icon} className={styles.skillIcon} />
      <span className={styles.skillName}>{name}</span>
    </div>
  );
}
