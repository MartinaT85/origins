import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";

export const query = graphql`
  query SanityProject($id: String!) {
    sanityProject(id: { eq: $id }) {
      title
      description {
        children {
          text
        }
      }
      slug {
        current
      }
      image {
        asset {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default function SanityProject({ data }) {
  const project = data.sanityProject;
  return (
    <>
      <GatsbyImage
        image={project.image.asset.gatsbyImageData}
        alt={project.title}
      />
      <p>{project.description[0].children[0].text}</p>
    </>
  );
}
