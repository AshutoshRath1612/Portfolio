import Image from "next/image";
import styles from "./skills.module.css";

interface Props {
  icon: string;
  name: string;
}

export default function SkillTile({ icon, name }: Props) {
  return (
    <div className={`${styles.skillTile} skillTile`}>
      <Image src={icon} alt={name} className={styles.skillIcon} width={20} height={20}/>
      <span className={styles.skillName}>{name}</span>
    </div>
  );
}
