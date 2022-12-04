import React from 'react'
import image from './product-4.jpg'
import './CartElement.scoped.css'
export default function CartElement() {




    
  return (
    <>
    
    
          <tr>
              <td className="align-middle"><img src={image} alt="" style={{ width: "50px" }} /> Product Name</td>
              <td className="align-middle">$150</td>
              <td className="align-middle">
                  <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                      <div className="input-group-btn">
                          <button className="btn btn-sm btn-dark btn-minus rounded" >
                              <i className="fa fa-minus"></i>
                          </button>
                      </div>
                      <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center rounded" value="1" />
                      <div className="input-group-btn rounded">
                          <button className="btn btn-sm btn-dark btn-plus rounded">
                              <i className="fa fa-plus"></i>
                          </button>
                      </div>
                  </div>
              </td>
              <td className="align-middle">$150</td>
              <td className="align-middle"><button className="btn btn-sm  rounded"><i className="fa fa-times"></i></button></td>
              <td><button className="btn btn-block btn-dark font-weight-bold my-3 py-3 rounded">Checkout</button></td>
          </tr>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
