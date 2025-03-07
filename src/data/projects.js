const images = import.meta.glob(
  "../assets/images/projects/*.png",
  {
    eager: true,
  },
);

const projects = [
  {
    id: 1,
    title: "Product page",
    stack: [{ id: 1, name: "React" }],
    repo: "https://github.com/IuliiaSelivanova/e-commerce-product-page",
    website:
      "https://iuliiaselivanova.github.io/e-commerce-product-page/",
    image:
      images["../assets/images/projects/product-page.png"]
        .default,
  },
  {
    id: 2,
    title: "Lading page",
    stack: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "Gulp" },
    ],
    repo: "https://github.com/IuliiaSelivanova/MNTN",
    website: "https://iuliiaselivanova.github.io/MNTN/",
    image:
      images["../assets/images/projects/landing-page.png"]
        .default,
  },

  {
    id: 4,
    title: "Music player",
    stack: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
    repo: "https://github.com/IuliiaSelivanova/Music-player",
    website:
      "https://iuliiaselivanova.github.io/Music-player/",
    image:
      images["../assets/images/projects/music-player.png"]
        .default,
  },
];

export default projects;
// {
//   id: 2,
//   title: "Blog app",
//   stack: ["React", "ContextAPI", "React Router", "useReduser"],
//   repo: "https://github.com/IuliiaSelivanova/blog-on-react",
//   website: "",
//   image: images["../../assets/images/projects/product-page.png"].default,
// },
