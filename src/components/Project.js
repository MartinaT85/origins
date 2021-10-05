import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Project = ({ title, image, description, slug }) => {
  const projectDescription = description[0]["children"][0]["text"];
  const projectImage = image.asset.gatsbyImageData;
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(projectImage)}
        alt={title}
        className="project-img"
      />
      <div className="project-info">
        <Link to={`/projects/${slug.current}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{projectDescription}</p>
      </div>
    </article>
  );
};

export default Project;
