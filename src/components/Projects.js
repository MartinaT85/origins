import * as React from "react";
import Project from "./Project";

const Projects = ({ projects, title }) => {
  return (
    <section className="section projects">
      <div className="section-title">
        <h2>{title}</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
