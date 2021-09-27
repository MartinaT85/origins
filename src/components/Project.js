import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Project = ({ title, description, slug, image: { localFile } }) => {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(localFile)}
        alt={title}
        className="project-img"
      />
      <div className="project-info">
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{description}</p>
      </div>
    </article>
  );
};

export default Project;
