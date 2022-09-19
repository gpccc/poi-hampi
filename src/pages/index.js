import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/styled-hero"
import Banner from "../components/banner"
import About from "../components/home/about"
import Tips from "../components/home/tips"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import FeaturedPlaces from "../components/home/featured-places"

export const query = graphql`
query {
  defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="Amazing Hampi" info="Come and Explore Hampi, the city of ruins, which is a UNESCO World Heritage Site.">
        <Link to="/places" className="btn-white">explore places</Link>
      </Banner>
    </StyledHero>
    <About />
    <Tips />
    <FeaturedPlaces />
  </Layout>
)