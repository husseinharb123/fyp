import React from 'react'
import { Link } from 'react-router-dom'
import './NavSections.scoped.css'
export default function NavSections() {
    return (
        <>


            <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom t1">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="aboutus">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contactus">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="topdeals">Top Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Delivery Options</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Foods and Drink</Link></li>
                                    <li><Link className="dropdown-item" to="#">Home interior</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Home interior 2</Link></li>
                                </ul>
                            </li>

                        </ul>

                                       <div className="search-box">
                                    <input className="search-input" type="text" placeholder="Search in Store Name"/>
                                        <button className="search-btn"><i className="fas fa-search"></i></button>
                                </div>

                    </div>
                </div>
            </nav>


        </>
    )
}
