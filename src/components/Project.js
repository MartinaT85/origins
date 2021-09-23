import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Project = ({ title, img }) => {
  return (
    <article className="project">
      <StaticImage
        src="../images/drywall_mini.jpg"
        alt="kitchen"
        className="project-img"
        placeholder="tracedSVG"
        layout="fullWidth"
      />
      <div className="project-info">
        <h3>{title}</h3>
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
