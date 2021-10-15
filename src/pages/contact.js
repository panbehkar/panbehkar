import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <div className="contact">
        <div className="row">
          <div className="column-2">
            <StaticImage
              src="../assets/images/contact.svg"
              className="image"
              alt="contact with panbehkar"
            />
          </div>
          <div className="column-2 info">
            <label className="title" htmlFor="contact">
              Let's get in touch
            </label>
            <ul className="personal">
              <li>
                <i className="icon-phone"></i>
                <span>(+98) 936 454 9084</span>
              </li>
              <li>
                <i className="icon-envelope"></i>
                <span>abolfazl.panbehkar@gmail.com</span>
              </li>
            </ul>
            <ul className="social">
              <li>
                <a
                  href="https://www.linkedin.com/in/abolfazl-panbehkar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="skype:live:.cid.b344bb6e5480cbf7?userinfo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-skype"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/panbehkar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/10436219/abolfazl-panbehkar?tab=profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-stackoverflow"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
