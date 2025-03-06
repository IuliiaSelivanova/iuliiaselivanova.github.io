import React from "react";
import projects from "../../data/projects.js";
import ProjectItem from "./projectItem/ProjectItem.js";

const ProjectList = () => {
  return (
    <section>
      <h2>Портфолио</h2>
      <div className="projectList d-flex flex-wrap">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
