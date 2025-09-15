require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Abolfazl Panbehkar`,
    description: `Senior Frontend Engineer with 10+ years of experience in architecting and implementing over 15 maintainable, scalable, and high-performance web applications.`,
    keywords: `abolfazl panbehkar, abolfazl, panbehkar, senior frontend engineer, frontend developer, senior, frontend, engineer`,
    author: `Abolfazl Panbehkar`,
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
          quality: 80,
        },
        defaultQuality: 80,
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
        fonts: [`Nunito`, `Kanit`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abolfazl Panbehkar`,
        short_name: `Panbehkar`,
        description: `Senior Frontend Engineer with 10+ years of experience in architecting and implementing over 15 maintainable, scalable, and high-performance web applications.`,
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
