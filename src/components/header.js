import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const handleMenuToggle = e => {
    e.preventDefault()
    setMenuToggle(!menuToggle)
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        <StaticImage src="../assets/images/logo.svg" alt="panbehkar logo" />
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <Link activeClassName="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/about" partiallyActive={true}>
              About
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/contact" partiallyActive={true}>
              Contact
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/blog" partiallyActive={true}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="nav-mobile">
        <a href="#/" className="hamburger-menu" onClick={handleMenuToggle}>
          <i className="icon-menu"></i>
        </a>
        <div className={`overlay${menuToggle ? " open" : ""}`}>
          <a href="#/" className="hamburger-close" onClick={handleMenuToggle}>
            <i className="icon-close"></i>
          </a>
          <ul>
            <li>
              <Link activeClassName="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/about" partiallyActive={true}>
                About
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                to="/contact"
                partiallyActive={true}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/blog" partiallyActive={true}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header
