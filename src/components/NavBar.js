import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav class="navbar navbar-light bg-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        </nav>
    )
}

export default NavBar