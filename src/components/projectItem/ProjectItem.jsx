import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="card">
      <img
        src={project.image}
        alt={project.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <ul className="d-flex justify-cotent-between flex-wrap">
          {project.stack.map((item) => (
            <li className="m-1" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="button-container d-flex justify-content-evenly flex-wrap gap-2">
          <a
            className="btn btn-warning"
            href={project.repo}
            target="_blank"
          >
            Репозиторий
          </a>
          <a
            className="btn btn-warning"
            href={project.website}
            target="_blank"
          >
            Web site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
