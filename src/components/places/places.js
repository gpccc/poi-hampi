import React from "react"
import PlaceList from "./place-list"
import { useStaticQuery, graphql } from "gatsby"

const getPlaces = graphql`
query{
    places: allContentfulAmazingHampiData
    {
        edges {
            node {
                name
                timeRequired
                slug
                timings
                contentful_id
                entryFees
                images {
                  gatsbyImageData(layout: CONSTRAINED)
                }
                }
            }
        }
    }
`

const Places = () => {
    const { places } = useStaticQuery(getPlaces)
    return <PlaceList places={places} />
}

export default Places