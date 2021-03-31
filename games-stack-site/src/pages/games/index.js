import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/games.module.css"
import Img from "gatsby-image"

export default function Games({ data }) {
    const portfolios = data.gamesPortfolio.nodes 
    const contactEmail = data.contact.siteMetadata.contact 
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Games Portfolio</h2>
                <h3>These are the games we have available!</h3>
                <div className={styles.markdowns}>
                    {portfolios.map(portfolio => {
                        return (
                            <Link to={`/markdowns/${portfolio.frontmatter.slug}`} key={portfolio.id} >
                            <div className={styles.markdown}>
                                <Img fluid={portfolio.frontmatter.thumb.childImageSharp.fluid} />
                                <h3>{portfolio.frontmatter.title}</h3>
                                <p>{portfolio.frontmatter.stack}</p>
                            </div>
                            </Link>
                        )
                    })}
                </div>
                <p>For more enquires, reach me at: { contactEmail } for more information.</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query portfolioInfo {
        gamesPortfolio: allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            nodes {
            frontmatter {
                slug
                stack
                title
                thumb {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid  
                    }
                }
                }
            }
            id
            }
        }
        contact: site(siteMetadata: {}) {
            siteMetadata {
            contact
            }
        }
    }
`
