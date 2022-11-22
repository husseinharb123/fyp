import React from "react";
import "./ReviewDescribeProduct.scoped.css";
import UserReview from "../../components/UserReview/UserReview";
import LeaveReview from "../../components/LeaveReview/LeaveReview";
import { ProductDetailContext } from "../../Contexts/ProductDetailContextProvider";
import { useContext, useEffect } from "react";
import { useImmer } from "use-immer";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ReviewDescribeProduct() {
  const useparm = useParams()
  let productid = useparm.id
  const initialstate = {
    listofuserreview: [],
    isthere: false
  }

  const [usersstate, updateusersstate] = useImmer(initialstate)

  const state = useContext(ProductDetailContext)

  useEffect(() => {
    updateusersstate(draft=>{draft.isthere = false})

    async function fetchdata(){
      const url = `/usersreview/${productid}`
      const respond = axios.get(url)
      if (respond.data.responseSuccess){
        
        updateusersstate((draft)=>{return (draft.isthere=true,draft.listofuserreview=respond.data.result)})
      }
      console.log(respond.data.responseSuccess); 
    }
    fetchdata()

  }, [])




  return (
    <>
      <div className="row px-xl-5 bg-secondary p-30">
        <div className="col">
          <div className="bg-light p-30">
            <div  >
              <div className="row">
                <LeaveReview />

                <div className='col-md-6 columm'>
                  <div className="nav nav-tabs mb-4">Reviews({state.reviews})</div>
                  {usersstate.isthere 
                  ? 
                  <>
                    <UserReview name={'hussein harb'} review={'tggdsgvvvvvvvvvvvvvvvvvvvvv vvvvvvvvvvvvvvvvv vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv vvvvvvvvvdgdg'} />
                    <UserReview name={'hussein harb'} review={'tggdsgdgdg'} />
                      <UserReview name={'hussein harb'} review={'tggdsgdgdg'} />
                      <UserReview name={'hussein harb'} review={'tggdsgdgdg'} />
                    </>
                    
                  : 
                     <div className="text-center" >   <strong>No comments yet</strong>  </div>}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}