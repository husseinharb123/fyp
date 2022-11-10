import React from 'react'
import './OrderandWish.scoped.css'
import { Link } from 'react-router-dom'
import OrderElement from '../../components/OrderElement/OrderElement'
export default function OrderandWish() {
    return (
        <>

            <div className="container bg-secondary">

                <div className="row px-xl-5">
                    <div className="col table-responsive mb-5">

                        <div className="nav nav-tabs ">
                            <Link className="nav-item nav-link text-dark active font-weight-bold" data-toggle="tab" to="#tab-pane-1">Orders</Link>
                            <Link className="nav-item nav-link text-dark font-weight-bold" data-toggle="tab" to="#tab-pane-3">Wishlist</Link>
                            <Link className="nav-item nav-link text-dark font-weight-bold" data-toggle="tab" to="#tab-pane-3">Old Orders</Link>

                            <select class="btn-secondary " aria-label="Default select example" >
                                <option selected>Select the store</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>




                        </div>

                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">


                                <OrderElement />
                                <OrderElement />
                                <OrderElement />
                                <OrderElement />
                                <OrderElement />
                                <OrderElement />

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


        </>

    )
}
