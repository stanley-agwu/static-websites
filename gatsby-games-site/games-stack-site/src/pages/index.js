import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"


export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
            <h2>Create the Idea</h2>
            <h3>Develop and Deploy</h3>
            <h4>Review feedbacks, Improve and Maintain</h4>
            <p>Developer and Human Experience Enhancer based in Oslo</p>
            <Link to="/games" className={styles.btn}>View Games Portfolio</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
    )
}

export const query = graphql`
  query Image {
    file(relativePath: {eq: "games-banner.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

`
