import React from 'react';
import './skills.scss';
import html from './../../images/icons/skills/html.svg';
import css from './../../images/icons/skills/css.svg';
import js from './../../images/icons/skills/js.svg';
import sass from './../../images/icons/skills/sass.svg';
import react from './../../images/icons/skills/react.svg';
import git from './../../images/icons/skills/git.svg';
import github from './../../images/icons/skills/github.svg';
import gulp from './../../images/icons/skills/gulp.svg';
import figma from './../../images/icons/skills/figma.svg';
import vscode from './../../images/icons/skills/vscode.svg';

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Навыки</h2>

      <div className="skills__wrapper">
        <div className="skills__item">
          <img src={html} alt="HTML5" />
          <p>HTML5</p>
        </div>
        <div className="skills__item">
          <img src={css} alt="CSS3" />
          <p>CSS3</p>
        </div>
        <div className="skills__item">
          <img src={sass} alt="Sass" />
          <p>Sass</p>
        </div>
        <div className="skills__item">
          <img src={js} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skills__item">
          <img src={react} alt="React" />
          <p>React</p>
        </div>
        <div className="skills__item">
          <img src={git} alt="Git" />
          <p>Git</p>
        </div>
        <div className="skills__item">
          <img src={github} alt="GitHub" />
          <p>GitHub</p>
        </div>
        <div className="skills__item">
          <img src={gulp} alt="Gulp" />
          <p>Gulp</p>
        </div>
        <div className="skills__item">
          <img src={figma} alt="Figma" />
          <p>Figma</p>
        </div>
        <div className="skills__item">
          <img src={vscode} alt="VSCode" />
          <p>VSCode</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;