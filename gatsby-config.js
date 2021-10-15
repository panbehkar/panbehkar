require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Abolfazl Panbehkar`,
    description: `A creative and adaptable Front-End Developer with 4+ years experience in the design and development of more than 10 admin panels within professional teams.`,
    keywords: `abolfazl panbehkar, abolfazl, panbehkar, front-end developer, frontend developer, front-end, frontend, developer`,
    author: `Abolfazl Panbehkar`,
    image: `src/assets/images/avatar.png`,
    siteUrl: `https://panbehkar.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito`, `Vollkorn`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3j18p1obz0t5`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abolfazl Panbehkar`,
        short_name: `Panbehkar`,
        description: `A creative and adaptable Front-End Developer with 4+ years experience in the design and development of more than 10 admin panels within professional teams.`,
        start_url: `/`,
        background_color: `#57f2cc`,
        theme_color: `#4596fb`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
  ],
  flags: {
    DEV_SSR: false,
  },
}
