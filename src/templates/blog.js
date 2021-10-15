import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs"
import SyntaxHighlighter from "react-syntax-highlighter"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query ($slug: String) {
    contentfulPosts(slug: { eq: $slug }) {
      id
      slug
      title
      createdAt(fromNow: true)
      thumbnail {
        gatsbyImageData
      }
      author {
        name
        description
        avatar {
          gatsbyImageData(width: 100)
        }
      }
      seo {
        title
      }
      body {
        raw
        references {
          contentful_id
          gatsbyImageData
        }
      }
    }
  }
`
const Blog = ({ data }) => {
  const post = data.contentfulPosts

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (children[0].type === "code")
          return (
            <SyntaxHighlighter
              language="javascript"
              className="body-code"
              style={arduinoLight}
              wrapLines
              wrapLongLines
            >
              {children[0].props.children}
            </SyntaxHighlighter>
          )
        else {
          return children[0] !== "" ? (
            <div className="body-text">{node.content[0].value}</div>
          ) : null
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const nodeId = node.data.target.sys.id
        const image = post.body.references.filter(
          reference => reference.contentful_id === nodeId
        )[0]
        return (
          <div className="body-image">
            <GatsbyImage image={image.gatsbyImageData} alt={post.slug} />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <Seo title={post.title} />
      <div className="post">
        <div className="row">
          <div className="column-1">
            <div className="box">
              <label className="heading">{post.title}</label>
              <div className="body">
                <div className="body-image">
                  <GatsbyImage
                    image={post.thumbnail.gatsbyImageData}
                    alt={post.slug}
                  />
                </div>
                {documentToReactComponents(JSON.parse(post.body.raw), options)}
                <div className="body-info">
                  <div className="post-author">
                    <span className="author-avatar">
                      <GatsbyImage
                        image={post.author.avatar.gatsbyImageData}
                        alt={post.author.name}
                      />
                    </span>
                    <div className="author-name-description">
                      <span className="author-name">{post.author.name}</span>
                      <span className="author-description">
                        {post.author.description}
                      </span>
                    </div>
                  </div>
                  <span className="post-create-time">{post.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column-1">
            <Link to="/blog" className="back-to-archive">
              <i className="icon-left"></i>
              <span>Back to Archive</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Blog
