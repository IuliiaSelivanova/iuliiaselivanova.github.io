import React, { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";
import skills from "../../data/skills.js";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 1110,
  ); //состояние для мобильной версии
  const skillsRef = useRef(null); // Ссылка на элемент skills__items

  //анимация бегущей строки при ширине экрана > 1100px
  useEffect(() => {
    const handleResize = () => {
      if (skillsRef.current) {
        // ширина блока с навыками + 40px padding родительского блока >= ширины окна
        setIsMobile(
          skillsRef.current.offsetWidth + 40 >=
            window.innerWidth,
        );
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="skills bg-warning d-flex flex-column">
      <h2 className="skills__title">Навыки</h2>

      {isMobile ? (
        <Marquee
          gradient={false}
          speed={60}
          loop={0}
          play={true}
          pauseOnHover={true}
        >
          <div className="skills__items d-flex column-gap-3">
            {skills.concat(skills).map((skill, index) => (
              <div
                key={index}
                className="skills__item d-flex flex-column align-items-center"
              >
                <img
                  className="img-fluid"
                  src={skill.source}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </Marquee>
      ) : (
        <div
          ref={skillsRef}
          className="skills__items d-flex column-gap-3"
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="skills__item d-flex flex-column align-items-center"
            >
              <img
                className="img-fluid"
                src={skill.source}
                alt={skill.name}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
