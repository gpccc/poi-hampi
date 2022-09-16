import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/styled-hero"
import { graphql } from 'gatsby'
import Contact from '../components/contact/contact'

export const query = graphql`
query {
    connectBcg: file(relativePath: {eq: "connectBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function contact({ data }) {
    return (
        <Layout>
            <StyledHero img={data.connectBcg.childImageSharp.fluid}>
            </StyledHero>
            <Contact />
        </Layout>
    )
}