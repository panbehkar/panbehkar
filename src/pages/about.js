import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  {
    allContentfulSkills {
      nodes {
        skills {
          title
        }
      }
    }
    allContentfulExperience {
      nodes {
        experience {
          position
          company
          link
          date
        }
      }
    }
  }
`

const About = ({ data }) => {
  const skills = data.allContentfulSkills.nodes[0].skills
  const experience = data.allContentfulExperience.nodes[0].experience

  return (
    <Layout>
      <Seo title="About" />
      <div className="about">
        <label className="title" htmlFor="skills">
          Skills
        </label>
        <div className="row" style={{ paddingBottom: "20px" }}>
          <div className="column-1">
            {skills.map(skill => (
              <span className="tag" key={skill.title}>
                {skill.title}
              </span>
            ))}
          </div>
        </div>
        <label className="title" htmlFor="work-experience">
          Work Experience
        </label>
        <div className="row">
          {experience.map(exp => (
            <div className="column-2" key={exp.company}>
              <div className="box">
                <span className="position">{exp.position}</span>
                <span className="company">{exp.company}</span>
                <span className="date">{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
        <label className="title" htmlFor="education">
          Education
        </label>
        <div className="row">
          <div className="column-2">
            <div className="box">
              <span className="position">IT Engineering</span>
              <span className="company">University of Mazandaran</span>
              <span className="date">2010 – 2014</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default About
