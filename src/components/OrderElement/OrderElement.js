import React from 'react'
import image from'./product-1.jpg'
import './OrderElement.scoped.css'

export default function OrderElement() {
  return (
    <>
    
          <tr>
              <td className="align-middle font-weight-bolder"><img src={image} alt="" style={{ width: "50px" }} /> Product Name</td>
              <td className='align-middle font-weight-bolder'>2016-4-3</td>
              <td><button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Move to Cart</button></td>
          </tr>
    
    </>
  )
}
