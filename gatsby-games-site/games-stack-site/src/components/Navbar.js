import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query gamesInfo {
            site(siteMetadata: {}) {
                siteMetadata {
                description
                title
                }
            }
        }
    `)
    const { title } = data.site.siteMetadata 
    return (
        <nav>
            <h1><Link to="/">{ title }</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/games">Portfolio</Link>
            </div>
        </nav>
    )
}
