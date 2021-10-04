module.exports = {
  siteMetadata: {
    siteUrl: "https://unruffled-keller-b194f5.netlify.app",
    title: "Origins",
    description:
      "Sadrokartón, obklady, sádrové omietky a rekonštrukcie v Žiline a okolí",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins"],
          variants: ["100", "200", "400"],
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `ux9qoh2h`,
        dataset: `production`,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
  ],
};
