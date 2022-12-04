import React from 'react'
import { Link } from 'react-router-dom'
import '../../CommonCSS/1.scoped.css'
import ProductCart from '../../components/ProductCart/ProductCart'

export default function ProductsSection() {
  return (
    <>
    
    
    
          <section className="content-main">
              <div className="content-header">
                  <h2 className="content-title">Products</h2>
                  <div>
                      <Link className="btn btn-primary" href="/Linkddproduct">Create new</Link>
                  </div>
              </div>
              <div className="card mb-4 shadow-sm">
                  <header className="card-header bg-white">
                      <div className="row gx-3 py-3">
                          <div className="col-lg-4 col-md-6 me-auto">
                              <input
                                  type="search"
                                  placeholder="Search..."
                                  className="form-control p-2 ui-autocomplete-input"
                                  autocomplete="off"
                              />
                          </div>
                          <div className="col-lg-2 col-6 col-md-3">
                              <select className="form-select">
                                  <option>All category</option>
                                  <option>Electronics</option>
                                  <option>Clothings</option>
                                  <option>Something else</option>
                              </select>
                          </div>
                          <div className="col-lg-2 col-6 col-md-3">
                              <select className="form-select">
                                  <option>Latest added</option>
                                  <option>Cheap first</option>
                                  <option>Most viewed</option>
                              </select>
                          </div>
                      </div>
                  </header>
                  <div className="card-body">
                      <div className="row">
                          <ProductCart />
                          <ProductCart />
                          <ProductCart />
                          <ProductCart />
                          <ProductCart />
                          <ProductCart />
                          <ProductCart />

                      </div>
                      <nav className="float-end mt-4" aria-label="Page navigation">
                          <ul className="pagination">
                              <li className="page-item disabled">
                                  <Link className="page-link" to="products">Previous</Link>
                              </li>
                              <li className="page-item active">
                                  <Link className="page-link" href="/products">1</Link>
                              </li>
                              <li className="page-item">
                                  <Link className="page-link" href="/products">2</Link>
                              </li>
                              <li className="page-item">
                                  <Link className="page-link" href="/products">3</Link>
                              </li>
                              <li className="page-item">
                                  <Link className="page-link" href="/products">Next</Link>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </section>
    
    
    
    
    
    
    
    </>
  )
}
