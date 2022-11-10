import React from 'react'
import './Cart.scoped.css'
import CartSummary from '../../components/CartSummary/CartSummary'
import CartElement from '../../components/CartElement/CartElement'
import Header from '../../main components/Header/Header'
import Footer from '../../main components/Footer/Footer'
export default function CartPage() {
    return (
        <>

            
            <Header/>
            <div className="container-fluid bg-secondary mt-30">
                <div className="row px-xl-5 ">
                    <div className="col-lg-8 table-responsive mb-5">



                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                    <th>Checkout</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">


                                <CartElement />
                                <CartElement />
                                <CartElement />

                            </tbody>
                        </table>
                    </div>

                    <CartSummary />
                </div>
            </div>




        <Footer/>





        </>

    )
}
