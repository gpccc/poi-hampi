import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/styled-hero"
import { graphql } from 'gatsby'
import BlogList from '../components/blog/blog-list'

export const query = graphql`
query {
    blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function blog({ data }) {
    return (
        <Layout>
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
            <BlogList />
        </Layout>
    )
}