import React from 'react'
import { Link } from 'react-router-dom'
import SearchElement from '../SearchElement/SearchElement'

import './SearchElements.scoped.css'

export default function SearchElements() {
  return (
    <>
      <div className="row px-xl-5">
        <div className="row pb-3">
          <div className="heading-3 mb-30 " >Showing 5 of 20 Products
            <select className="form-select float-end w-25 sortby" aria-label="Default select example">
              <option selected>Sort By</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          
          </div>

          <SearchElement />
          <SearchElement />
          <SearchElement />
          <SearchElement />
          <SearchElement />
          <SearchElement />
          <SearchElement />
          <SearchElement />

        </div>
        <div className='position-relative p-30'>

          <nav aria-label="Page navigation example " className='position-absolute bottom-0 end-50'>
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className="page-item"><Link className="page-link" to="#">1</Link></li>
              <li className="page-item"><Link className="page-link" to="#">2</Link></li>
              <li className="page-item"><Link className="page-link" to="#">3</Link></li>
              <li className="page-item">
                <Link className="page-link" to="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </>
  )


}
