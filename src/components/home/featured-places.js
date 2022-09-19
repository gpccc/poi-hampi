import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Title from "../title"
import * as styles from "../../css/items.module.css"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"
import Place from "../places/place"

const getFeaturedPlaces = graphql`
query{
    featuredPlaces: allContentfulAmazingHampiData(filter:{featured:{eq:true}})
    {
        edges {
            node {
                contentful_id
                name
                slug
                timeRequired
                timings
                entryFees
                featured
                images {
                  gatsbyImageData(layout: CONSTRAINED)
                    }
                }
            }
        }
    }
`;

const FeaturedPlaces = () => {
    const response = useStaticQuery(getFeaturedPlaces)
    const places = response.featuredPlaces.edges
    console.log(places);
    return (
        <section className={styles.places}>
            <Title title="featured" subtitle="places" />
            <div className={styles.center}>
                {places.map(({ node }) => {
                    return <Place key={node.contentful_id} place={node} />
                })}
            </div>
            <Link to="/places" className="btn-primary">
                all places
            </Link>
        </section>
    )
}
export default FeaturedPlaces