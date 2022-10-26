import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import image from './img/product-1.jpg'
import './orders.scoped.css'
import { Link } from 'react-router-dom'
export default function CartPage() {
  return (
<>

<Header/>
  
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
                        <tr>
                            <td className="align-middle font-weight-bolder"><img src={image} alt="" style={{width: "50px"}}/> Product Name</td>
                                <td className='align-middle font-weight-bolder'>2016-4-3</td>
                            <td><button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Move to Cart</button></td>
                        </tr>



                    </tbody>
                </table>
            </div>

        </div>
    </div>








<Footer/>

</>

  )
}
