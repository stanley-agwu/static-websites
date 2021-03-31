import React from 'react'
import Layout from '../components/Layout'
import Img from "gatsby-image"
import * as styles from "../styles/gameDetails.module.css"


export default function gameDetails() {
    return (
        <Layout>
            <div className={styles.details}>
                <h2>title</h2>
                <h3>stack</h3>
                <div className={styles.featured}>
                    {/* <Img fluid={} /> */}
                </div>
                {/* <div dangerouslySetInnerHTML={} /> */}
            </div>   
        </Layout>
    )
}
