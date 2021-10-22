import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  {
    allContentfulPosts(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        slug
        title
        excerpt
        createdAt(fromNow: true)
        thumbnail {
          gatsbyImageData(height: 300)
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const posts = data.allContentfulPosts.nodes

  return (
    <Layout>
      <Seo title="Blog" />
      <div className="blog">
        <label className="title" htmlFor="blog-archive">
          Blog Archive
        </label>
        <ul className="row">
          {posts.map(post => (
            <li className="column-2" key={post.id}>
              <Link to={`/blog/${post.slug}`} className="box">
                <div className="thumbnail">
                  <GatsbyImage
                    image={post.thumbnail.gatsbyImageData}
                    alt={post.slug}
                  />
                </div>
                <div className="body">
                  <label className="heading">{post.title}</label>
                  <p className="excerpt">{post.excerpt.substring(0, 150)}</p>
                  <span className="date">{post.createdAt}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
export default Blog
