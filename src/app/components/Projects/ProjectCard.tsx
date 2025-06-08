import Image from "next/image";
import styles from "./projects.module.css";
import { useEffect, useRef } from "react";
import { animate, waapi } from "animejs";
import { Project } from "@/app/models/project.model";

export default function ProjectCard({ project }: { project: Project }) {
  const projectCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    if(projectCardRef.current)
    waapi.animate(projectCardRef.current,{
      translateY: ["0", "0.5rem"],
      loop: true,
      ease: "inOut(4)",
      alternate: true
    })
  },[]);

  const mouseEnter = () =>{
    if(projectCardRef.current)
    animate(projectCardRef.current,{
      scale: [1,1.1],
      ease: "inOut(4)",
      duration: 500
    })
  }
  const mouseOut = () =>{
    if(projectCardRef.current)
    animate(projectCardRef.current,{
      scale: [1.1,1],
      ease: "inOut(4)",
      duration: 500
    })
  }
  return (
    <div className={styles.card} onMouseEnter={mouseEnter} onMouseLeave={mouseOut} ref={projectCardRef} style={{justifyContent: project.name === "IoT Car Controller" ? "space-around": ""}}>
      <Image src={project.image} alt={project.name} width={250} height={150} className={`${styles.image} ${project.name === "IoT Car Controller" ? styles.potraitImageCard: ""}`} />
      <div className={styles.projectInfo}>
        <div className={styles.projectName}>
          {project.name}
        </div>
        <div className={styles.projectTechs}>
          {project.tech.map((tech,index)=>(
            <div className={styles.techs} key={index}>{tech}</div>
          ))}
        </div>
        <div className={styles.projectDescription}>
          {project.description}
        </div>
        <div className={styles.projectLinks}>
          {project.links.map((link,index) => (
            <div className={styles.links} key={index} onClick={()=> window.open(link.url, "_blank")}>{link.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
