import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "../assets/scss/index.scss"

const Layout = ({ children }) => {
  return (
    <main className="main">
      <Header />
      <section className="content">{children}</section>
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
