import React from "react";
import DownloadIcon from "../assets/icons/download-icon.svg";
import mainPortret from "../assets/images/cat1.png";

import Skills from "../components/skills/Skills.jsx";

const AboutMe = () => {
  const triggerDownload = (fileName) => {
    const element = document.createElement("a");
    element.setAttribute("href", fileName);
    element.setAttribute("download", fileName);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <main className="about d-flex flex-column justify-content-evenly align-items-center">
      <div className="container">
        <div className="row align-items-center flex-column flex-md-row-reverse">
          <div className="col-12 col-md d-flex justify-content-center about__img">
            <img
              src={mainPortret}
              alt="portret"
              className="img-fluid"
            />
          </div>

          <div className="col-12 col-md">
            <span className="subtitle">
              Frontend-разработчик
            </span>
            <h1 className="title">
              Привет, меня зовут Юлия Селиванова
            </h1>
            <p className="text">
              Я начинающий frontend разработчик, который
              строит новую карьеру на том, что мне
              действительно нравится. В течение года я
              оттачивала свои навыки веб-разработчика,
              изучая, как создавать веб-приложения с
              использованием HTML, CSS, JavaScript, React.
            </p>
            <button
              onClick={() =>
                triggerDownload(
                  "/assets/SelivanovaIA_CV.pdf",
                )
              }
              className="about__btn btn btn-warning gap-2"
            >
              Резюме
              <DownloadIcon />
            </button>
          </div>
        </div>
      </div>
      <Skills />
    </main>
  );
};

export default AboutMe;
