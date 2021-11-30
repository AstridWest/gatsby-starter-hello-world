import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Web Warrior</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">How to get started with Gatsby</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}
