import React from "react";
import "./skills.scss";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <section className="skills bg-warning">
      <div className="container d-flex align-items-center flex-column">
        <h2 className="skills__title">Навыки</h2>

        <div className="skills__wrapper skills__wrapper--scroll d-flex column-gap-3">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="skills__item d-flex flex-column align-items-center"
            >
              <img src={skill.source} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
