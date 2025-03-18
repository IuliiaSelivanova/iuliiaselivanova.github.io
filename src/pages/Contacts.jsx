import React, { useState } from "react";
import EmailIcon from "../assets/icons/email.svg";
import GithubIcon from "../assets/icons/github.svg";
import TelegramIcon from "../assets/icons/telegram.svg";
import ModalResponse from "../components/modal/ModalResponse";
import { motion } from "framer-motion";
import LoadingIcon from "../assets/icons/loading-icon.svg";

// Начальные значения инпутов формы
const Initial_State_FormData = {
  name: "",
  email: "",
  message: "",
};

// проверка структуры email (валидация)
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const Contacts = () => {
  const [formData, setFormData] = useState(
    Initial_State_FormData,
  );
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // проверка email и сохранение в formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError(
          "Пожалуйста, введите корректный email",
        );
      } else {
        setEmailError("");
      }
    }
  };

  // отправка сообщения (письма), используется formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(false);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://formspree.io/f/mrbpbynq",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      setMessage(
        response.ok
          ? "Ваше сообщение успешно отправлено."
          : "Ошибка! Попробуйте снова.",
      );
    } catch (error) {
      setMessage("Ошибка сети. Попробуйте позже.");
    } finally {
      setShowModal(true);
      setFormData(Initial_State_FormData);
      setIsLoading(false);
    }
  };
  return (
    <footer className="contacts d-flex flex-column align-items-center justify-content-around">
      <h1>Свяжитесь со мной</h1>
      <form
        onSubmit={handleSubmit}
        className="contacts__form container"
      >
        <div className="mb-3">
          <label
            htmlFor="nameFormControlInput"
            className="form-label"
          >
            Имя
          </label>
          <input
            type="text"
            className="form-control"
            id="nameFormControlInput"
            name="name"
            placeholder="Ваше Имя"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="emailFormControlInput"
            className="form-label"
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailFormControlInput"
            name="email"
            placeholder="Ваш Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {emailError && (
            <div className="text-danger">{emailError}</div>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="messageFormControlTextarea"
            className="form-label"
          >
            Комментарий
          </label>
          <textarea
            className="form-control"
            id="messageFormControlTextarea"
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* При отправке сообщения меняется кнопка */}
        {isLoading ? (
          <button className="contacts__btn loading btn btn-warning d-flex align-items-center">
            Отправляется
            <LoadingIcon />
          </button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
            type="submit"
            className="contacts__btn btn btn-warning"
          >
            Отправить
          </motion.button>
        )}

        {/* после отправки сообщения появляется модальное окно об успешной отправке или ошибке */}
        {showModal && (
          <ModalResponse
            message={message}
            show={showModal}
            handleClose={() => setShowModal(false)}
          />
        )}
      </form>

      <div className="socials d-flex ">
        <a
          className="mail"
          href="mailto:frontend.iselivanova@mail.ru"
        >
          <EmailIcon />
        </a>
        <a
          className="github"
          href="https://github.com/IuliiaSelivanova"
          target="_blank"
        >
          <GithubIcon />
        </a>
        <a
          className="telegram"
          href="https://t.me/JuliiaSelivanova"
          target="_blank"
        >
          <TelegramIcon />
        </a>
      </div>
    </footer>
  );
};

export default Contacts;
