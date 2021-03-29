import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
    return (
        <div>
            <h1>5 Stack Games</h1>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}
