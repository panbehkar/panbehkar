import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import SyntaxHighlighter from "react-syntax-highlighter"
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query ($slug: String) {
    contentfulPosts(slug: { eq: $slug }) {
      id
      slug
      title
      excerpt
      createdAt(fromNow: true)
      thumbnail {
        gatsbyImageData
        fluid {
          src
        }
      }
      author {
        name
        description
        avatar {
          gatsbyImageData(width: 100)
        }
      }
      seo {
        keywords
        description
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
      [BLOCKS.PARAGRAPH]: node => {
        return node.content.map((item, index) => {
          const type = item.marks[0]?.type
          switch (type) {
            case "code":
              const lang = item.value.includes(":root") ? "css" : "javascript"
              return (
                <SyntaxHighlighter
                  language={lang}
                  className="body-code"
                  style={arduinoLight}
                  wrapLines
                  wrapLongLines
                  key={index}
                >
                  {item.value}
                </SyntaxHighlighter>
              )
            case "bold":
              return (
                <div className="body-text" key={index}>
                  <b>{item.value}</b>
                </div>
              )
            default:
              return (
                <div className="body-text" key={index}>
                  {item.value}
                </div>
              )
          }
        })
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

  const bodyRaw = JSON.parse(post.body.raw)

  // Bug fix: contentful code render new issue
  const adaptor = rawContent => {
    const newContent = []

    rawContent.forEach(item => {
      const newLength = newContent.length
      const isPrevCode =
        newContent[newLength - 1]?.content[0]?.marks[0]?.type === "code"
      const isCurrentCode = item.content[0]?.marks[0]?.type === "code"

      if (isCurrentCode && isPrevCode) {
        newContent[newLength - 1].content[0].value +=
          "\n" + item.content[0].value
      } else {
        newContent.push(item)
      }
    })

    return newContent
  }
  bodyRaw.content = adaptor(bodyRaw.content)

  return (
    <Layout>
      <Seo
        title={post.title}
        keywords={post.seo.keywords}
        description={post.seo.description}
        image={post.thumbnail.fluid.src}
        url={post.slug}
      />
      <div className="post">
        <div className="row">
          <div className="column-1">
            <div className="box">
              <div className="blog-info">
                <div className="heading">{post.title}</div>
                <div className="thumbnail">
                  <GatsbyImage
                    image={post.thumbnail.gatsbyImageData}
                    alt={post.slug}
                  />
                </div>
                <div className="excerpt">{post.excerpt}</div>
              </div>
              <div className="body">
                {documentToReactComponents(bodyRaw, options)}
              </div>
              <div className="post-info">
                <div className="author">
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
                <span className="create-time">{post.createdAt}</span>
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
