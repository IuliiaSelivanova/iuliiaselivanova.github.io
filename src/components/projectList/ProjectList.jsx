import React from "react";
import projects from "../../data/projects.js";
import ProjectItem from "../projectItem/ProjectItem.jsx";

const ProjectList = () => {
  return (
    <section className="projectList d-flex flex-wrap justify-content-evenly align-items-center">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
