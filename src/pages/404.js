import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="not-found">
      <div className="row">
        <div className="column-2 image">
          <StaticImage
            src="../assets/images/not-found.svg"
            alt="page not found"
          />
        </div>
        <div className="column-2 guide">
          <label className="title" htmlFor="not-found">
            Page Not Found
          </label>
          <span>
            Return to
            <b>
              <Link to="/"> Home page</Link>
            </b>
          </span>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
