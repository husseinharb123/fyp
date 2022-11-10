import React from 'react'
import Category from '../../components/Category/Category'
import {Link} from 'react-router-dom'
import './Category.scoped.css'

export default function Categories() {
  return (
    <>
      <div className="container-fluid pt-5 bg-secondary">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </>
  );
}
