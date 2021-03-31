import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"


export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata 
  return (
    <Layout>
      <section className={styles.header}>
        <div>
            <p>{ title } - { description }</p>
            <h2>Create the Idea</h2>
            <h3>Develop and Deploy</h3>
            <h4>Review feedbacks, Improve and Maintain</h4>
            <p>Developer and Human Experience Enhancer based in Oslo</p>
            <Link to="/games" className={styles.btn}>View Games Portfolio</Link>
        </div>
        <img src="/kyle-nieber.jpg" alt="site cover" style={{ maxWidth: "100%"}}/>
      </section>
      
    </Layout>
    )
}

export const query = graphql`
  query siteInfo {
  site(siteMetadata: {}) {
    siteMetadata {
      description
      title
    }
  }
}
`
