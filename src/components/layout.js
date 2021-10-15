import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/scss/index.scss"

const Layout = ({ children }) => {
  return (
    <main className="main">
      <div className="bg-top">
        <StaticImage src="../assets/images/bg-top.svg" alt="bg-top" />
      </div>
      <Header />
      <section className="content">{children}</section>
      <Footer />
      <div className="bg-bottom">
        <StaticImage src="../assets/images/bg-bottom.svg" alt="bg-bottom" />
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
