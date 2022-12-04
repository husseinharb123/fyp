import React from 'react'
import '../../CommonCSS/1.scoped.css'
import image from './product-1.jpg'
import { Link } from 'react-router-dom'

export default function ProductCart() {
    return (
        <>
            <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
                <div className="card card-product-grid shadow-sm">
                    <Link className="img-wrap" href="/products"><img src={image} alt="Product" /></Link>
                    <div className="info-wrap">
                        <Link className="title text-truncate" to="/products"
                        >Product Name
                        </Link>
                        <div className="price mb-2">$89</div>
                        <div className="row">
                            <Link
                                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                                href="/product/1/edit"
                            >
                                <i className="fas fa-pen"></i>
                            </Link>
                            <Link
                                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                                href="/products"
                            >
                                <i className="fas fa-trash-alt"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
