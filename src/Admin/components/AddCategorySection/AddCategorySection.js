import React from "react";
import { Link } from "react-router-dom";
import './AddCategorySection.scoped.css';
export default function dashboardpage() {
  return (
    <>

        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Categories</h2>
          </div>
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="product_name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="form-control py-3 ui-autocomplete-input"
                        id="product_name"
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Images</label>
                      <input
                        className="form-control ui-autocomplete-input"
                        type="file"
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Description</label>
                      <textarea
                        placeholder="Type here"
                        className="form-control"
                        rows="4"
                      />
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary py-3">
                        Create category
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-12 col-lg-8">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                          </div>
                        </th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                          </div>
                        </td>
                        <td>1</td>
                        <td>
                          <b>Men clothes</b>
                        </td>
                        <td>Men clothes</td>
                        <td className="text-end">
                          <div className="dropdown">
                            <Link
                              data-bs-toggle="dropdown"
                              className="btn btn-light"
                              to="/category"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-h" />
                            </Link>
                            <div className="dropdown-menu" >
                              <Link className="dropdown-item" to="/category">
                                Edit info
                              </Link>
                              <Link
                                className="dropdown-item text-danger"
                                to="/category"
                              >
                                Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                          </div>
                        </td>
                        <td>2</td>
                        <td>
                          <b>Women fashion</b>
                        </td>
                        <td>Fashions for Women</td>
                        <td className="text-end">
                          <div className="dropdown">
                            <Link
                              data-bs-toggle="dropdown"
                              className="btn btn-light"
                              to="/category"
                            >
                              <i className="fas fa-ellipsis-h" />
                            </Link>
                            <div className="dropdown-menu">
                              <Link className="dropdown-item" to="/category">
                                Edit info
                              </Link>
                              <Link
                                className="dropdown-item text-danger"
                                to="/category"
                              >
                                Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                          </div>
                        </td>
                        <td>3</td>
                        <td>
                          <b>Kids clothes</b>
                        </td>
                        <td>Clothes for kids</td>
                        <td className="text-end">
                          <div className="dropdown">
                            <Link
                              data-bs-toggle="dropdown"
                              className="btn btn-light"
                              to="/category"
                            >
                              <i className="fas fa-ellipsis-h" />
                            </Link>
                            <div className="dropdown-menu">
                              <Link className="dropdown-item" to="/category">
                                Edit info
                              </Link>
                              <Link
                                className="dropdown-item text-danger"
                                to="/category"
                              >
                                Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
