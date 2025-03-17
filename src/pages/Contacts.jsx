import React from "react";
import EmailIcon from "../assets/icons/email.svg";
import GithubIcon from "../assets/icons/github.svg";
import TelegramIcon from "../assets/icons/telegram.svg";

const Contacts = () => {
  return (
    <footer className="contacts d-flex flex-column align-items-center">
      <h1>Свяжитесь со мной</h1>
      <form className="contacts__form container">
        <div className="mb-3">
          <label
            htmlFor="nameFormControlInput1"
            className="form-label"
          >
            Имя
          </label>
          <input
            type="text"
            className="form-control"
            id="nameFormControlInput1"
            placeholder="Ваше Имя"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="emailFormControlInput1"
            className="form-label"
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailFormControlInput1"
            placeholder="Ваш Email"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="messageFormControlTextarea1"
            className="form-label"
          >
            Комментарий
          </label>
          <textarea
            className="form-control"
            id="messageFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>

        <button
          type="submit"
          className="contacts__btn btn btn-warning"
        >
          Отправить
        </button>
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
