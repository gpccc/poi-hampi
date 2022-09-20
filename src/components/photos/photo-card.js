import React from 'react'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../../css/place.module.css"
import { Link } from "gatsby"

const PhotoCard = ({ photo }) => {
    const { name, slug, images } = photo;
    let mainImage = getImage(images[0]);
    return (
        <article className={styles.place}>
            <div className={styles.imgContainer}>
                <GatsbyImage image={mainImage} className={styles.img} alt="single photo" />
                <Link className={styles.link}
                    to={`/photos/${slug}`}>open</Link>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
            </div>
        </article>
    )
}
export default PhotoCard