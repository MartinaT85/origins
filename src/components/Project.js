import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Project = ({ title, image, description }) => {
  const projectDescription = description[0]["children"][0]["text"];
  const projectImage = image.asset.gatsbyImageData;
  console.log(title);
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(projectImage)}
        alt={title}
        className="project-img"
      />
      <div className="project-info">
        <Link>
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{projectDescription}</p>
      </div>
    </article>
  );
};

export default Project;
