import React, { Ref } from "react";
import { paneStyle } from "../shared-styles";
import { skillsConfig } from "../configs/skills.config";

const Skills = ({ paneSkills }: {paneSkills: Ref<HTMLElement>}) => {
  return (
    <section
      ref={paneSkills}
      className="skills-pane"
      style={{
        ...paneStyle(false),
        paddingTop: "5rem",
        paddingBottom: "5rem",
        gap: "2rem",
        height: "100%",
      }}
    >
      <div className="skills-header">
        <div className="skills-badge font-mono">{skillsConfig.title}</div>
      </div>

      <div className="skills-categories">

        <div className="skills-grid">
          {skillsConfig.skillCategories.map((category, i) => (
            <div key={i} className="skill-category">
              <div
                className="font-mono skill-category-label"
                style={{ color: category.color }}
              >
                <span className="category-dot" style={{ background: category.color }} />
                0{i + 1} / {category.title}
              </div>

              <div className="skill-category-items">
                {category.items.map((skill, j) => (
                  <span
                    key={j}
                    className="skill-item"
                    style={{
                      backgroundColor: `${category.color}14`, // ~8% tint of the category color
                      borderColor: `${category.color}33`, // ~20% tint for the border
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="marquee-container" aria-hidden="true">
        {skillsConfig.skillsRows.map((row, i) => (
          <div key={i} className={`marquee-row ${row.dir}`}>
            {[...row.items, ...row.items].map((item, j) => (
              <div key={j} className="skill-chip">
                <span style={{ color: row.color }}>●</span>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;