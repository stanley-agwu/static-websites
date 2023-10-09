import React from 'react'
import Layout from '../components/Layout'
import Img from "gatsby-image"
import * as styles from "../styles/gameDetails.module.css"
import { graphql } from 'gatsby'


export default function gameDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    console.log(title)
    console.log(stack)
    console.log(featuredImg)
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <Img fluid={featuredImg.childImageSharp.fluid} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} /> 
            </div>   
        </Layout>
    )
}

export const query = graphql`
    query gameDetailsInfo ($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
            stack
            title
            featuredImg {
                childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            }
        }
    }
`
