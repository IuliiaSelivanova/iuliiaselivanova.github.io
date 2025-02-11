import React from "react";
import "./skills.scss";
import skills from "../../data/skills";

const Skills = () => {
  const flexStyle = "d-flex align-items-center flex-column";
  return (
    <section className="skills bg-warning fixed-bottom">
      <div className={"container " + flexStyle}>
        <h2 className="skills__title">Навыки</h2>

        <div className="skills__wrapper d-flex flex-row justify-content-between">
          {skills.map((skill) => (
            <div key={skill.id} className={"skills__item " + flexStyle}>
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
