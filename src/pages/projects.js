import * as React from "react";
import { graphql } from "gatsby";
import Projects from "../components/Projects";

const ProjectsPage = ({
  data: {
    allSanityProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <section className="projects-page">
        <Projects title="Naša Ponuka" projects={projects} />
      </section>
    </>
  );
};

export const query = graphql`
  {
    allSanityProject {
      nodes {
        description {
          children {
            text
          }
        }
        image {
          asset {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        slug {
          current
        }
        title
        id
      }
    }
  }
`;

export default ProjectsPage;
