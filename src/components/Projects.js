import * as React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="section projects">
      <div className="section-title">
        <h2>Čo Vám ponúkame</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-center">
        <Project
          title="Montaz sadrokartonov"
          description="lorem30"
          img="../images/drywall_mini.jpg"
        />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
