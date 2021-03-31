import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/games.module.css"

export default function Games({ data }) {
    console.log(data)
    const portfolios = data.allMarkdownRemark.nodes
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
                                <h3>{portfolio.frontmatter.title}</h3>
                                <p>{portfolio.frontmatter.stack}</p>
                            </div>
                        </Link>
                        )
                        
                    })}
                    
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query portfolioInfo {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
    }
  }
}

`
