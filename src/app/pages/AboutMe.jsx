import React from "react";
import img from "../../assets/images/cat1.png";

const AboutMe = () => {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="about__content">
          <div class="about__info">
            <span class="about__subtitle">
              Frontend-разработчик
            </span>
            <h1 class="title about__title">
              Привет, меня зовут Юлия Селиванова
            </h1>
            <p class="about__text">
              {" "}
              Я начинающий frontend разработчик, который
              строит новую карьеру на том, что мне
              действительно нравится. В течение года я
              оттачивала свои навыки веб-разработчика,
              изучая, как создавать веб-приложения с
              использованием HTML, CSS, JavaScript, React.
            </p>

            <button
              class="btn about__btn"
              onclick="triggerDownload('./assets/Resume-SelivanovaIA.pdf')"
            >
              {/* <img
                src="./images/icons/download-icon.svg"
                alt="Download-icon"
              /> */}
              Резюме
            </button>
          </div>

          <div class="about__img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      {/* <section class="skills">
        <h2 class="skills__title">Навыки</h2>

        <div class="container">
          <div class="skills__wrapper">
            <div class="skills__item">
              <img
                src="./images/icons/skills/html.svg"
                alt="html"
              />
              <p>HTML5</p>
            </div>
            <div class="skills__item">
              <img
                src="./images/icons/skills/css.svg"
                alt="css"
              />
              <p>CSS3</p>
            </div>
            <div class="skills__item">
              <img
                src="./images/icons/skills/sass.svg"
                alt="sass"
              />
              <p>Sass</p>
            </div>
            <div class="skills__item">
              <img
                src="./images/icons/skills/js.svg"
                alt="javascript"
              />
              <p>JavaScript</p>
            </div>
            <div class="skills__item">
              <img
                src="./images/icons/skills/react.svg"
                alt="react"
              />
              <p>React</p>
            </div>
            <div class="skills__item">
              <img
                src="./images/icons/skills/git.svg"
                alt="git"
              />
              <p>Git</p>
            </div>
            <div class="skills__item">
              <img
                src="./images/icons/skills/github.svg"
                alt="github"
              />
              <p>GitHub</p>
            </div>
            <div class="skills__item">
              <img
                src="./images/icons/skills/gulp.svg"
                alt="gulp"
              />
              <p>Gulp</p>
            </div>
            <div class="skills__item">
              <img
                src="./images/icons/skills/figma.svg"
                alt="figma"
              />
              <p>Figma</p>
            </div>
            <div class="skills__item">
              <img
                src="./images/icons/skills/vscode.svg"
                alt="vscode"
              />
              <p>VSCode</p>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default AboutMe;
