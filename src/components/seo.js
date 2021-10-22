import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImage from "../assets/images/og-image.jpg"

const Seo = ({ title, keywords, description, image, url, lang, meta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaKeywords = keywords || site.siteMetadata.keywords
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || `${site.siteMetadata.siteUrl}${ogImage}`
  const metaUrl = `${site.siteMetadata.siteUrl}${url || ""}`
  const defaultTitle = site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:image`,
          content: metaImage,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:url`,
          content: metaUrl,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: ``,
  description: ``,
  image: ``,
  url: ``,
}

Seo.propTypes = {
  keywords: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
