import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../css/single-blog.module.css"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const Photos = ({ data }) => {
    const { name, description, images } = data.photo;
    let mainImage = getImage(images[1]);
    return (
        <Layout>
            <section className={styles.blog}>
                <h1 className={styles.center}>{name}</h1>
                <div className={styles.center}>
                    <GatsbyImage image={mainImage} alt="single image" />
                    <h4>{description}</h4>
                    <Link to="/photos" className="btn-primary">all photos</Link>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query getPhoto($slug: String!) {
	photo: contentfulPhotos(slug:{eq:$slug}) {
        name
        description
        images {
            gatsbyImageData(layout: CONSTRAINED)
        }
    }
}
`;

export default Photos