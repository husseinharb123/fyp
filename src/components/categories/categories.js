import React from 'react'
import {Link} from 'react-router-dom'
import image from './img/cat-1.jpg'
import './categoires.scoped.css'
export default function Category() {
  return (

<>
   <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" href="">
                    <div className="cat-item d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src={image} alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" href="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src={image} alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" href="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src={image} alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" href="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src={image} alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" href="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src={image} alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" href="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src={image} alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </Link>
            </div>


        </div>
    </div>


</>
    )
}
