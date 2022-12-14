import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import image from './img/product-1.jpg'
import "./Searchresult.scoped.css";
export default function Searchresult() {
  return (
    <>
      <h1> search result for 'department'</h1>
      <div className="container-fluid bg-secondary">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">
                Filter by price
              </span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    checked
                    id="price-all"
                  />
                  <label
                    className="custom-control-label"
                    for="price-all"
                  >
                    All Price
                  </label>
                  <span className="badge border font-weight-normal">
                    1000
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-1"
                  />
                  <label
                    className="custom-control-label"
                    for="price-1"
                  >
                    $0 - $100
                  </label>
                  <span className="badge border font-weight-normal">
                    150
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-2"
                  />
                  <label
                    className="custom-control-label"
                    for="price-2"
                  >
                    $100 - $200
                  </label>
                  <span className="badge border font-weight-normal">
                    295
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-3"
                  />
                  <label
                    className="custom-control-label"
                    for="price-3"
                  >
                    $200 - $300
                  </label>
                  <span className="badge border font-weight-normal">
                    246
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-4"
                  />
                  <label
                    className="custom-control-label"
                    for="price-4"
                  >
                    $300 - $400
                  </label>
                  <span className="badge border font-weight-normal">
                    145
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-5"
                  />
                  <label
                    className="custom-control-label"
                    for="price-5"
                  >
                    $400 - $500
                  </label>
                  <span className="badge border font-weight-normal">
                    168
                  </span>
                </div>
              </form>
            </div>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">
                Filter by price
              </span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    checked
                    id="price-all"
                  />
                  <label
                    className="custom-control-label"
                    for="price-all"
                  >
                    All Price
                  </label>
                  <span className="badge border font-weight-normal">
                    1000
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-1"
                  />
                  <label
                    className="custom-control-label"
                    for="price-1"
                  >
                    $0 - $100
                  </label>
                  <span className="badge border font-weight-normal">
                    150
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-2"
                  />
                  <label
                    className="custom-control-label"
                    for="price-2"
                  >
                    $100 - $200
                  </label>
                  <span className="badge border font-weight-normal">
                    295
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-3"
                  />
                  <label
                    className="custom-control-label"
                    for="price-3"
                  >
                    $200 - $300
                  </label>
                  <span className="badge border font-weight-normal">
                    246
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-4"
                  />
                  <label
                    className="custom-control-label"
                    for="price-4"
                  >
                    $300 - $400
                  </label>
                  <span className="badge border font-weight-normal">
                    145
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-5"
                  />
                  <label
                    className="custom-control-label"
                    for="price-5"
                  >
                    $400 - $500
                  </label>
                  <span className="badge border font-weight-normal">
                    168
                  </span>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="ml-2">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Sorting
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link
                          className="dropdown-item"
                          to="#"
                        >
                          Latest
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="#"
                        >
                          Popularity
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="#"
                        >
                          Best Rating
                        </Link>
                      </div>
                    </div>
                    <div className="btn-group ml-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Showing
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link
                          className="dropdown-item"
                          to="#"
                        >
                          10
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="#"
                        >
                          20
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="#"
                        >
                          30
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={image}
                      alt=""
                    />
                    <div className="product-action">
                      <Link
                        className="btn btn-outline-dark btn-square"
                        to=""
                      >
                        <i className="fa fa-shopping-cart" />
                      </Link>
                      <Link
                        className="btn btn-outline-dark btn-square"
                        to=""
                      >
                        <i className="far fa-heart" />
                      </Link>
                      <Link
                        className="btn btn-outline-dark btn-square"
                        to=""
                      >
                        <i className="fa fa-sync-alt" />
                      </Link>
                      <Link
                        className="btn btn-outline-dark btn-square"
                        to=""
                      >
                        <i className="fa fa-search" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <Link
                      className="h6 text-decoration-none text-truncate"
                      to=""
                    >
                      Product Name Goes Here
                    </Link>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>$123.00</h5>
                      <h6 className="text-muted ml-2">
                        <del>$123.00</del>
                      </h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small>(99)</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={image}
                      alt=""
                    />
                    <div className="product-action">
                      <Link
                        className="btn btn-outline-dark btn-square"
                        to=""
                      >
                        <i className="fa fa-shopping-cart" />
                      </Link>
                      <Link
                        className="btn btn-outline-dark btn-square"
                        to=""
                      >
                        <i className="far fa-heart" />
                      </Link>
                      <Link
                        className="btn btn-outline-dark btn-square"
                        to=""
                      >
                        <i className="fa fa-sync-alt" />
                      </Link>
                      <Link

                        className="btn btn-outline-dark btn-square"
                        to=""
                      >
                        <i className="fa fa-search" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <Link
                      className="h6 text-decoration-none text-truncate"
                      to=""
                    >
                      Product Name Goes Here
                    </Link>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>$123.00</h5>
                      <h6 className="text-muted ml-2">
                        <del>$123.00</del>
                      </h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star-half-alt text-primary mr-1" />
                      <small>(99)</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <Link
                        className="page-link bg-dark"
                        to="#"
                      >
                        <span>Previous</span>
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link
                        className="page-link "
                        to="#"
                      >
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link"
                        to="#"
                      >
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link"
                        to="#"
                      >
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link bg-dark "
                        to="#"
                      >
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
