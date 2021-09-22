import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="grey black">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Resume</Link>
                        <Link to="/" data-target="side-nav" className="sidenav-trigger">
                                                        <i className="material-icons">
                                                            Menu
                                                        </i>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">
                                    <i className="fas fa-home">Home</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills">
                                    <i className="fas">Skills</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/experience">
                                    <i className="fas">Experience</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/education">
                                    <i className="fas">Education</i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects">
                                    <i className="fas">Projects</i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar