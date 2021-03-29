import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
    return (
        <nav>
            <h1><Link to="/">5 Stack Games</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/games">Portfolio</Link>
            </div>
        </nav>
    )
}
