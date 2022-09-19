import React from 'react'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../../css/place.module.css"
import { Link } from "gatsby"

const Place = ({ place }) => {
    const { name, slug, images } = place;
    let mainImage = getImage(images[0]);
    return (
        <article className={styles.place}>
            <div className={styles.imgContainer}>
                <GatsbyImage image={mainImage} className={styles.img} alt="single place" />
                <Link className={styles.link} to={`/places/${slug}`}>details</Link>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
            </div>
        </article>
    )
}

export default Place