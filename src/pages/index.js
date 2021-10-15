import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = () => {
  return (
    <Layout>
      <Seo title="Front-End Developer" />
      <div className="home">
        <div className="bio">
          <label htmlFor="hello">Hello</label>
          <label htmlFor="abolfazl-panbehkar">
            I'm <strong>Abolfazl Panbehkar</strong>
          </label>
          <label htmlFor="frontend-developer">Front-End Developer</label>
        </div>
        <div className="avatar">
          <StaticImage
            src="../assets/images/avatar.png"
            alt="abolfazl panbehkar"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
