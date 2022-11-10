import React from 'react'
import {Link} from 'react-router-dom'
import image from './img/cat-1.jpg'
import './Category.scoped.css'
export default function Category() {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <Link className="text-decoration-none" href="">
          <div className="cat-item d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: "100px", height: "100px" }}
            >
              <img className="img-fluid" src={image} alt="" />
            </div>
            <div className="flex-fill pl-3">
              <h6>Category Name</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
