import React from 'react'
import CategoryProduct from '../../components/CategoryProduct/CategoryProduct'
import './CategoryProducts.scoped.css'
export default function CategoryProducts() {
  return (
    <>
    

      <div className="container-fluid mt-2 mb-5 bg-secondary  bg-gradient">
                  <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center"> <h3 className="font-weight-bold text-uppercase">Top Deals</h3>
                          </div>
                            

                          <div className="row g-4 ">
                         
                              <CategoryProduct/>
                              <CategoryProduct />
                              <CategoryProduct />
                              <CategoryProduct />
                              <CategoryProduct />
                              <CategoryProduct/>

                                  
                              </div>


                          </div>

                      </div>
               
              </div>
    
    
    
    
    
    
    
    
    </>
  )
}
