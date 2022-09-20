import React from 'react'
import Layout from "../components/layout"
import StyledHero from "../components/styled-hero"
import { graphql } from 'gatsby'
import PhotoList from '../components/photos/photo-list'

export const query = graphql`
query {
    blogBcg: file(relativePath: {eq: "alishanPhoto.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
`;

export default function photos({ data }) {
    return (
        <Layout>
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
            <PhotoList />
        </Layout>
    )
}