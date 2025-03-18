const icons = import.meta.glob(
  "../assets/icons/skills/*.svg",
  {
    eager: true,
  },
);

const skills = [
  {
    id: 1,
    name: "HTML",
    source:
      icons["../assets/icons/skills/html.svg"].default,
  },
  {
    id: 2,
    name: "CSS",
    source: icons["../assets/icons/skills/css.svg"].default,
  },
  {
    id: 3,
    name: "Sass",
    source:
      icons["../assets/icons/skills/sass.svg"].default,
  },
  {
    id: 4,
    name: "BootStrap",
    source:
      icons["../assets/icons/skills/bootstrap.svg"].default,
  },
  {
    id: 5,
    name: "JavaScript",
    source:
      icons["../assets/icons/skills/javascript.svg"]
        .default,
  },
  {
    id: 6,
    name: "React",
    source:
      icons["../assets/icons/skills/react.svg"].default,
  },
  {
    id: 7,
    name: "Git",
    source: icons["../assets/icons/skills/git.svg"].default,
  },
  {
    id: 8,
    name: "GitHub",
    source:
      icons["../assets/icons/skills/github.svg"].default,
  },
  {
    id: 9,
    name: "Gulp",
    source:
      icons["../assets/icons/skills/gulp.svg"].default,
  },
  {
    id: 10,
    name: "Webpack",
    source:
      icons["../assets/icons/skills/webpack.svg"].default,
  },
  {
    id: 11,
    name: "Figma",
    source:
      icons["../assets/icons/skills/figma.svg"].default,
  },
  {
    id: 12,
    name: "VSCode",
    source:
      icons["../assets/icons/skills/vscode.svg"].default,
  },
  {
    id: 13,
    name: "TypeScript",
    source:
      icons["../assets/icons/skills/typescript.svg"]
        .default,
  },
];

export default skills;
