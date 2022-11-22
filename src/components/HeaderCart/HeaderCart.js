import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderCart.scoped.css'


export default function HeaderCart() {

    return (
        <>


            <Link to='/cart' style={{ textDecoration: "none", color: 'black' }}><div className="cart nav-item">
                <i className="fa fa-lg  badge-pill" value="0" style={{ color: "black" }}>&#xf07a;</i>
                <span>0.00$</span>
            </div>
            </Link>


        </>
    )
}
