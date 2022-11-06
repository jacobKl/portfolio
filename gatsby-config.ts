import type { GatsbyConfig } from "gatsby";

require('dotenv').config({
  path: '.env'
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jakub Klimek - Fullstack Developer`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito`,
          `Poppins`,
          `Edu VIC WA NT Beginner`
        ],
        display: 'swap'
      }
    },
  ]
};

export default config;
