import React from 'react'
import './CategoryProduct.scoped.css'
export default function CategoryProduct() {
  return (
      <div className="col-md-4">
          <div className="card"> <img src="https://i.imgur.com/SOMPPzU.jpg" className="card-img-top" />
              <div className="card-body">
                  <div className="d-flex justify-content-between"> <span className="font-weight-bold">Product Title</span> <span className="font-weight-bold">$550</span> </div>
                  <p className="card-text mb-1 mt-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="d-flex align-items-center flex-row"> <img src="https://i.imgur.com/e9VnSng.png" width="20" /> <span className="guarantee">50% Discount</span> </div>
              </div>
              <hr />
              <div className="card-body">
                  <div className="text-right buttons"> <button className="btn btn-outline-dark">add to wishlist</button> <button className="btn btn-dark">Add to cart</button> </div>
              </div>
          </div>
      </div>
  )
}
