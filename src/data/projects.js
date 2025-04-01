import { v4 as uuidv4 } from "uuid";

const images = import.meta.glob(
  "../assets/images/projects/*.*",
  {
    eager: true,
  },
);

const projects = [
  {
    id: uuidv4(),
    title: "Карточка товара",
    stack: [{ id: uuidv4(), name: "React" }],
    description: {
      info: "Разработана карточка товара для ограниченной серии кроссовок. Включает описание продукта, галерея фото продукта и цену.",
      opportunities: [
        "Просмотр оптимального макета сайта в зависимости от размера экрана их устройства",
        "Открытие галереи в модальном окне, щелкнув по большому изображению продукта",
        "Переключение большого изображение продукта, кликая по карусели",
        "Добавление товаров в корзину",
        "Просмотр корзины и удаление товаров из нее",
      ],
    },
    repo: "https://github.com/IuliiaSelivanova/e-commerce-product-page",
    website:
      "https://iuliiaselivanova.github.io/e-commerce-product-page/",
    image:
      images["../assets/images/projects/product-page.png"]
        .default,
    backgroundImage:
      images[
        "../assets/images/projects/bg-product-page.png"
      ].default,
  },
  {
    id: uuidv4(),
    title: "Landing page",
    stack: [
      { id: uuidv4(), name: "Pug" },
      { id: uuidv4(), name: "Sass" },
      { id: uuidv4(), name: "JavaScript" },
      { id: uuidv4(), name: "Gulp" },
    ],
    description: {
      info: "Верстка сайта для бренда MNTN, передающий дух приключений и готовности к вызовам.",
      opportunities: [
        "Просмотр контента страницы на любых экранах девайсов",
        "Использование адаптивного меню",
      ],
    },
    repo: "https://github.com/IuliiaSelivanova/MNTN",
    website: "https://iuliiaselivanova.github.io/MNTN/",
    image:
      images["../assets/images/projects/landing-page.png"]
        .default,
    backgroundImage:
      images[
        "../assets/images/projects/bg-landing-page.png"
      ].default,
  },

  {
    id: uuidv4(),
    title: "Музыкальный плеер",
    stack: [
      { id: uuidv4(), name: "HTML" },
      { id: uuidv4(), name: "CSS" },
      { id: uuidv4(), name: "JavaScript" },
      { id: uuidv4(), name: "Axios" },
      { id: uuidv4(), name: "Audio API" },
      { id: uuidv4(), name: "Jamendo Music API" },
      { id: uuidv4(), name: "Vite" },
    ],
    description: {
      info: "Разработан интерфейс музыкального плеера с акцентом на удобство использования Включает список треков и информацию об аудиофайлах.",
      opportunities: [
        "Воспроизведение аудиофайлов",
        "Управление воспроизведением (пауза, перемотка, переключение треков)",
        "Drag-and-Drop для загрузки собственных аудиофайлов",
      ],
    },
    repo: "https://github.com/IuliiaSelivanova/music-player-vite",
    website:
      "https://iuliiaselivanova.github.io/music-player-vite/",
    image:
      images["../assets/images/projects/music-player.png"]
        .default,
    backgroundImage:
      images[
        "../assets/images/projects/bg-music-player.png"
      ].default,
  },
  {
    id: uuidv4(),
    title: "Форма регистрации",
    stack: [
      { id: uuidv4(), name: "HTML" },
      { id: uuidv4(), name: "CSS" },
      { id: uuidv4(), name: "JavaScript" },
    ],
    description: {
      info: "Разработана адаптивная и интуитивно понятная форма входа и регистрации для веб-приложения.",
      opportunities: [
        "Адаптивный дизайн для мобильных и десктопных устройств",
        "Валидация полей в реальном времени",
      ],
    },
    repo: "https://github.com/IuliiaSelivanova/LoginForm",
    website:
      "https://iuliiaselivanova.github.io/LoginForm/",
    image:
      images["../assets/images/projects/login-form.png"]
        .default,
    backgroundImage:
      images["../assets/images/projects/bg-login-form.jpg"]
        .default,
  },
  {
    id: uuidv4(),
    title: "Блог",
    stack: [
      { id: uuidv4(), name: "React" },
      { id: uuidv4(), name: "ContextAPI" },
      { id: uuidv4(), name: "React Router" },
      { id: uuidv4(), name: "useReduser" },
    ],
    description: {
      info: "Создано SPA приложение-блог с возможностью авторизации и аутентификации. Позволяет создавать собственные посты и просматривать полный список постов всех пользователей.",
      opportunities: [
        "Регистрация пользователя",
        "Аутентификация пользователя при помощи логина и пароля",
        "Доступ в личный кабинет пользователя",
        "Получение и вывод постов всех пользователей",
        "Создание нового поста",
        "Редактирование и удаление существующего поста пользователя",
        "Редактирование личных данных (логин, mail, пароль) пользователя",
        "Удаление профиля пользователя",
        "Адаптивная версия приложения под все размеры экранов",
      ],
    },
    repo: "https://github.com/IuliiaSelivanova/blog-on-react",
    website:
      "https://iuliiaselivanova.github.io/blog-on-react/",
    image:
      images["../assets/images/projects/blog-app.png"]
        .default,
    backgroundImage:
      images["../assets/images/projects/bg-blog-app.png"]
        .default,
  },
];

export default projects;
