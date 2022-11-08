import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'




const Navbar = (props) => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/General">NewsUpdates</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/General">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                    <Link className="nav-link" to="/About">About</Link>
                                </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/General">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
