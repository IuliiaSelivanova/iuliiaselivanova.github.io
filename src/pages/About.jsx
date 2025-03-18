import React from "react";
import DownloadIcon from "../assets/icons/download-icon.svg";
import mainPortret from "../assets/images/cat1.png";
// import mainPortret from "../assets/images/portret.png";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="col-12 col-md d-flex justify-content-center about__img"
          >
            <img
              src={mainPortret}
              alt="portret"
              className="img-fluid"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
            }}
            className="col-12 col-md"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="about__subtitle"
            >
              Frontend-разработчик
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="about__title"
            >
              Привет, меня зовут Юлия
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="about__text"
            >
              Я frontend-разработчик, который строит карьеру
              на{"\u00A0"}том, что{"\u00A0"}действительно
              нравится. В{"\u00A0"}течение года я оттачивала
              свои навыки в{"\u00A0"}
              веб-разработке, создавая современные и
              {"\u00A0"}удобные интерфейсы.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
              className="about__text"
            >
              Работаю с HTML, CSS, JavaScript, TypeScript и
              {"\u00A0"}
              React, а{"\u00A0"}также осваиваю новые
              технологии и{"\u00A0"}
              инструменты. Стремлюсь делать продукты не
              {"\u00A0"}
              только функциональными, но{"\u00A0"}и
              {"\u00A0"}визуально привлекательными, следуя
              принципам UX/UI-дизайна. Открыта к{"\u00A0"}
              новым возможностям и{"\u00A0"}интересным
              проектам!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 1 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{ duration: 1, delay: 4.5 }}
              onClick={() =>
                triggerDownload(
                  "/assets/SelivanovaIA_CV.pdf",
                )
              }
            >
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="about__btn btn btn-warning gap-2 d-flex justify-content-center align-items-center"
              >
                Резюме
                <DownloadIcon />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Skills />
    </main>
  );
};

export default AboutMe;
