import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import StyledHero from "../components/styled-hero"
import * as styles from "../css/template.module.css"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { FaMoneyBillWave, FaClock, FaTypo3 } from "react-icons/fa"
import { Link } from "gatsby"

const Template = ({ data }) => {
    console.info('data', data)
    const { name, timeRequired, timings, entryFees, description: {
        description }, images } = data.place;
    // const [mainImage, ...placeImages] = images
    const placeImages = images;

    return (
        <Layout>
            {/* <StyledHero img={getImage(mainImage)} /> */}
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {placeImages && placeImages.map((item, index) => {
                            return <GatsbyImage key={index} image={getImage(item)} className={styles.image} alt="single" />
                        })}
                    </div>
                    <h2>{name}</h2>
                    <div className={styles.info}>
                        <p>
                            <FaMoneyBillWave className={styles.icon} />
                            Entry Fees - {entryFees}
                        </p><p>
                            <FaClock className={styles.icon} />Time
                            Required - {timeRequired} hours
                        </p>
                        {timings &&
                            <p>
                                <FaTypo3 className={styles.icon} />
                                Timings - {timings}
                            </p>
                        }
                    </div>
                    <p className={styles.desc}>{description}</p>
                    <Link to="/places" className="btn-primary">back to places</Link>
                </div>
            </section>
        </Layout >
    )
}

export const query = graphql`
query($slug: String!) {
    place: contentfulAmazingHampiData(slug: {eq: $slug}) {
      name
      slug
      timeRequired
      timings
      entryFees
      description {
              description
      }
      images {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
export default Template