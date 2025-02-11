import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div>
      <div>
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <ul>
        {project.stack.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <a href={project.repo} target="_blank">
        Репозиторий
      </a>
      <a href={project.website} target="_blank">
        Web site
      </a>
    </div>
  );
};

export default ProjectItem;
