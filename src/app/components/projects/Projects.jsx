import React from "react";
import projects from "../../data/projects";
import ProjectItem from "./projectItem/ProjectItem";

const Projects = () => {
  return (
    <section>
      <h2>Портфолио</h2>
      {projects.map((project) => (
        <ProjectItem project={project} />
      ))}
    </section>
  );
};

export default Projects;
