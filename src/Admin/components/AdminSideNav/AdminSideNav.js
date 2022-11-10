import React from 'react'
import { Link } from 'react-router-dom'
import './AdminSideNav.scoped.css'
export default function AdminSideNav() {
    return (
        <>

            <aside className="navbar-aside" id="offcanvas_aside">
                <nav>
                    <ul className="menu-aside">
                        <li className="menu-item">
                            <Link
                                aria-current="page"
                                className="menu-link active"
                                href="/"
                            >
                                <i className="icon fas fa-home" />
                                <span className="text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" href="/products">
                                <i className="icon fas fa-shopping-bag" />
                                <span className="text">Products</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" href="/Linkddproduct">
                                <i className="icon fas fa-cart-plus" />
                                <span className="text">Add product</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" href="/category">
                                <i className="icon fas fa-list" />
                                <span className="text">Categories</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" href="/orders">
                                <i className="icon fas fa-bags-shopping" />
                                <span className="text">Orders</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" href="/users">
                                <i className="icon fas fa-user" />
                                <span className="text">Users</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link disabled" href="/sellers">
                                <i className="icon fas fa-store-alt" />
                                <span className="text">Sellers</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link disabled" href="/transaction">
                                <i className="icon fas fa-usd-circle" />
                                <span className="text">Transactions</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className="menu-link disabled" href="/transaction">
                                <i className="icon fas fa-truck" />
                                <span className="text">Post jobs</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className="menu-link disabled" href="/transaction">
                                <i className="icon fas fa-usd-circle" />
                                <span className="text">Transactions</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className="menu-link disabled" href="/transaction">
                                <i className="icon fas fa-truck" />
                                <span className="text">Post jobs</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className="menu-link disabled" href="/transaction">
                                <i className="icon fas fa-sign-out" />
                                <span className="text">Logout</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className="menu-link disabled" href="/transaction">
                                <i className="icon fas fa-store" />
                                <span className="text">website page</span>
                            </Link>
                        </li>
                    </ul>
                    <br />
                    <br />
                </nav>
            </aside>











        </>
    )
}
