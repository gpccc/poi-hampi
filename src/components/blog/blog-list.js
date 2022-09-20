import React from "react"
import BlogCard from "./blog-card"
import Title from "../title"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "../../css/blog.module.css"

const getPosts = graphql`
query {
	posts: allContentfulPost(sort:{fields:published,order:DESC}) {
		edges {
			node {
				title
        slug
        published(formatString:"MMMM, Do, YYYY")
        author
        id: contentful_id
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
}
`

const BlogList = () => {
    const { posts } = useStaticQuery(getPosts)
    return (
        <section className={styles.blog}>
            <Title title="hampi" subtitle="blogs" />
            <div className={styles.center}>
                {posts.edges.map(({ node }) => {
                    return <BlogCard key={node.id} blog={node} />
                })}
            </div>
        </section>
    )
}

export default BlogList