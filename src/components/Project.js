import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Project = () => {
  return (
    <article className="project">
      <StaticImage
        src="../images/kitchen.jpg"
        alt="kitchen"
        className="project-img"
        placeholder="tracedSVG"
        layout="fullWidth"
      />
      <div className="project-info">
        <h3>Meno Projektu</h3>
        <p className="project-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
          numquam iure accusantium praesentium repellendus molestiae odio.
          Corrupti praesentium dolorem necessitatibus quos ad incidunt
          reiciendis sapiente quidem, molestias mollitia, possimus consequuntur.
        </p>
      </div>
    </article>
  );
};

export default Project;
