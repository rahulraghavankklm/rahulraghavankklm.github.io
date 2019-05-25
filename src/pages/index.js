import React from "react"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from "../components/particles-bg"

import { StaticQuery, graphql } from "gatsby"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query PageTitleQuery {
        site {
          siteMetadata {
            name
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title={`${data.site.siteMetadata.name}`}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <Particles />
        <LandingBio />
      </Layout>
    )}
  />
)

export default IndexPage
