require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Abolfazl Panbehkar`,
    description: `Creative frontend developer with 7+ years of experience in the design and development of over 10 admin panels as a part of cross-functional teams. Proficient in translating UI designs to pixel-perfect codes with a keen eye for details using cutting-edge technologies.`,
    keywords: `abolfazl panbehkar, abolfazl, panbehkar, senior frontend developer, frontend developer, senior, frontend, developer`,
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
        description: `Creative frontend developer with 7+ years of experience in the design and development of over 10 admin panels as a part of cross-functional teams. Proficient in translating UI designs to pixel-perfect codes with a keen eye for details using cutting-edge technologies.`,
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
