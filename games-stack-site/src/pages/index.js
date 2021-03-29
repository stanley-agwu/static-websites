import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"


export default function Home() {
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
      </section>
    </Layout>
    )
}
