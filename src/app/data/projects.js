const images = import.meta.glob("../../assets/images/projects/*.png", {
  eager: true,
});

const projects = [
  {
    id: 1,
    title: "Product page",
    stack: ["React"],
    repo: "https://github.com/IuliiaSelivanova/e-commerce-product-page",
    website: "https://iuliiaselivanova.github.io/e-commerce-product-page/",
    image: images["../../assets/images/projects/product-page.png"].default,
  },

  {
    id: 3,
    title: "Music player",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/IuliiaSelivanova/Music-player",
    website: "https://iuliiaselivanova.github.io/Music-player/",
    image: images["../../assets/images/projects/music-player.png"].default,
  },
  {
    id: 4,
    title: "Lading page",
    stack: ["HTML", "CSS", "JavaScript", "Gulp"],
    repo: "https://github.com/IuliiaSelivanova/MNTN",
    website: "iuliiaselivanova.github.io/MNTN/",
    image: images["../../assets/images/projects/landing-page.png"].default,
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
