import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Title from "../title"
import * as styles from "../../css/items.module.css"
import PhotoCard from './photo-card'

const getPhotos = graphql`
query {
	photos: allContentfulPhotos {
    edges {
        node {
            id: contentful_id
            name
            slug
            description
            images {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
        }
    }
    }
`;

const PhotoList = () => {
    const { photos } = useStaticQuery(getPhotos);
    return (
        <section className={styles.tours}>
            <Title title="hampi" subtitle="photos" />
            <div className={styles.center}>
                {photos.edges.map(({ node }) => {
                    return <PhotoCard key={node.id} photo={node} />
                })}
            </div>
        </section>)
}

export default PhotoList;