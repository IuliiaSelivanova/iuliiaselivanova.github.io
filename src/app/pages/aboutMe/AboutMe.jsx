import React from "react";
import img from "../../../assets/images/cat1.png";
import Button from "../../components/ui/btn/Button";
import downloadIcon from "../../../assets/icons/download-icon.svg";
import Skills from "../../components/skills/Skills";
import "./aboutMe.scss";

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
    <section className="about mt-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <span className="">Frontend-разработчик</span>
            <h1 className="">Привет, меня зовут Юлия Селиванова</h1>
            <p className="">
              Я начинающий frontend разработчик, который строит новую карьеру на
              том, что мне действительно нравится. В течение года я оттачивала
              свои навыки веб-разработчика, изучая, как создавать веб-приложения
              с использованием HTML, CSS, JavaScript, React.
            </p>
            <Button
              value="Резюме"
              icon={downloadIcon}
              btnClassName={"about__btn"}
              onClick={triggerDownload}
            />
          </div>

          <div className="col d-flex justify-content-center about__img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default AboutMe;
