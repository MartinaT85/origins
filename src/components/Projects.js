import * as React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="section projects">
      <div className="section-title">
        <h2>Projekty</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-center">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
