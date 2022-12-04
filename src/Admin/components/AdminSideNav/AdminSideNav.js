import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AdminSideNav.scoped.css'
import '../../CommonCSS/1.scoped.css'
import { useContext } from 'react'
import { AuthStoreDispatchContext } from '../../../Contexts/AuthStorecontextProvider'
export default function AdminSideNav() {
    const storeauthdispatch = useContext(AuthStoreDispatchContext)
    const nav = useNavigate()

    function handlelogout(e){
        e.preventDefault();
        storeauthdispatch({ type:'logout'})
        nav('/')


    }






    return (
        <>

            <aside className="navbar-aside" id="offcanvas_aside">
                <nav>
                    <ul className="menu-aside">
                        <li className="menu-item">
                            <Link
                                aria-current="page"
                                className="menu-link active"
                                to=""
                            >
                                <i className="icon fas fa-home" />
                                <span className="text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="products">
                                <i className="icon fas fa-shopping-bag" />
                                <span className="text">Products</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="addproduct">
                                <i className="icon fas fa-cart-plus" />
                                <span className="text">Add product</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="addcategory">
                                <i className="icon fas fa-list" />
                                <span className="text">Categories</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="orders">
                                <i className="icon fas fa-bags-shopping" />
                                <span className="text">Orders</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="users">
                                <i className="icon fas fa-user" />
                                <span className="text">Users</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link disabled" to="/sellers">
                                <i className="icon fas fa-store-alt" />
                                <span className="text">Sellers</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link disabled" to="/transaction">
                                <i className="icon fas fa-usd-circle" />
                                <span className="text">Transactions</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className="menu-link disabled" to="/transaction">
                                <i className="icon fas fa-truck" />
                                <span className="text">Post jobs</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className="menu-link disabled" to="/transaction">
                                <i className="icon fas fa-usd-circle" />
                                <span className="text">Transactions</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className="menu-link disabled" to="/transaction">
                                <i className="icon fas fa-truck" />
                                <span className="text">Post jobs</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className="menu-link"  onClick={handlelogout}>
                                <i className="icon fas fa-sign-out" />
                                <span className="text">Logout</span>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link className="menu-link " to="/store">
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
