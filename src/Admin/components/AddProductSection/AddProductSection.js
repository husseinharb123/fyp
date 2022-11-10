import React from "react";
import { Link } from "react-router-dom";
import './AddProductSection.scoped.css';

export default function AddProductSection() {
  return (
    <>

        <section className="content-main" style={{ maxWidth: "1200px" }}>
          <form>
            <div className="content-header">
              <Link className="btn btn-danger text-white" to="/products">
                Go to products
              </Link>
              <h2 className="content-title">Add product</h2>
              <div>
                <button type="submit" className="btn btn-primary">
                  Publish now
                </button>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-xl-8 col-lg-8">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="mb-4">
                      <label htmlFor="product_title" className="form-label">
                        Product title
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="form-control ui-autocomplete-input"
                        id="product_title"
                        required=""
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="product_price" className="form-label">
                        Price
                      </label>
                      <input
                        type="number"
                        placeholder="Type here"
                        className="form-control ui-autocomplete-input"
                        id="product_price"
                        required=""
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="product_price" className="form-label">
                        Count In Stock
                      </label>
                      <input
                        type="number"
                        placeholder="Type here"
                        className="form-control ui-autocomplete-input"
                        id="product_price"
                        required=""
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Description</label>
                      <textarea
                        placeholder="Type here"
                        className="form-control"
                        rows="7"
                        required=""
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Images</label>
                      <input
                        className="form-control ui-autocomplete-input"
                        type="text"
                        placeholder="Inter Image URL"
                        autoComplete="off"
                      />
                      <input
                        className="form-control mt-3 ui-autocomplete-input"
                        type="file"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
    </>
  );
}
