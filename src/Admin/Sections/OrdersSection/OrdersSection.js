import React from "react";
import { Link } from "react-router-dom";
import image from './product-2.jpg';
import './OrdersSection.scoped.css'
import '../../CommonCSS/1.scoped.css'
export default function OrdersSection() {
  return (
    <>

        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Orders</h2>
          </div>
          <div className="card mb-4 shadow-sm">
            <header className="card-header bg-white">
              <div className="row gx-3 py-3">
                <div className="col-lg-4 col-md-6 me-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control p-2"
                  />
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                  <select className="form-select">
                    <option>Status</option>
                    <option>Active</option>
                    <option>Disabled</option>
                    <option>Show all</option>
                  </select>
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                  <select className="form-select">
                    <option>Show 20</option>
                    <option>Show 30</option>
                    <option>Show 40</option>
                  </select>
                </div>
              </div>
            </header>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Total</th>
                      <th scope="col">Paid</th>
                      <th scope="col">Date</th>
                      <th>Status</th>
                      <th scope="col" className="text-end">
                        Action
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Order Title</b>
                      </td>
                      <td>user@example.com</td>
                      <td>$45,789</td>
                      <td>
                      <span className="badge rounded-pill alert-success text-success">
                          Paid At Today 23:56 AM
                        </span>
                      </td>
                      <td>Dec 12 2021</td>
                      <td>
                        <span className="badge btn-success">Delivered</span>
                      </td>
                      <td className="d-flex justify-content-end align-item-center">
                        <Link className="text-success" href="/order">
                          <i className="fas fa-eye" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <b>Order Title</b>
                      </td>
                      <td>user@example.com</td>
                      <td>$45,789</td>
                      <td>
                      <span className="badge rounded-pill alert-danger text-danger">
                          Not paid
                        </span>
                      </td>
                      <td>Dec 12 2021</td>
                      <td>
                        <span className="badge btn-dark">Not Delivered</span>
                      </td>
                      <td className="d-flex justify-content-end align-item-center">
                        <Link className="text-success" href="/order">
                          <i className="fas fa-eye" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
