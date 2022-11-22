import React,{useEffect} from 'react'
import './ReviewDescribeProduct.scoped.css'
import { useImmerReducer } from 'use-immer'
import { AuthContext } from '../../Contexts/AuthcontextProvider'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function LeaveReview() {
    let parms = useParams();
    let productid = parms.id
    const authstate = useContext(AuthContext)
    const initialState= {
        review:{
            value:'',
        },
        submitcount:0,
        submitmessage:'fill all the required fields',
        submiterror:false,
        submitdone:false,
        btncolor:'btn-primary'


    }
    function OurReducer(draft,action){
        switch (action.type) {
            case 'handlesubmit':
                draft.submiterror = false;
                draft.submitdone = false;
                if (  draft.review.value ) {draft.submitcount++ }
                else { ; draft.submiterror = true 
                    draft.btncolor = 'btn-danger'
                }
                break;  

            case 'changereview':
                draft.review.value = action.value
                break; 
            case 'submitsucess':
                draft.submiterror = false;
                draft.submitdone = true;
                draft.btncolor = 'btn-success'
                draft.review.value = ''
                break;
            case 'returnprimary':
                draft.btncolor = 'btn-primary'
                break
            default:
                break;
        }

    }



  const [state ,dispatch] = useImmerReducer(OurReducer,initialState)

    function handleclick(e){
        e.preventDefault();
        dispatch({ type:'handlesubmit'})
        

    }
    useEffect(() => {
        async function fetchdata(){
        if (state.submitcount) {    
            const url = "/leavereview"
            const body = { review: state.review.value, productid: productid, userid: authstate._id, rating: 1 }
            const response = await axios.post(url,body)
            if (response.data.responseSuccess){
                dispatch({ type:'submitsucess'})
                setTimeout(() => {
                    dispatch({ type:"returnprimary"})
                }, 1500);
            }
        }
        }
     fetchdata()   
     
    }, [state.submitcount])
      

  return (
 <>
          <div className="col-md-6">
              <h4 className="mb-4">Leave a review</h4>
              <div className="d-flex my-3">
                  <p className="mb-0 mr-2">Your Rating <span style={{ color: 'red' }}>*</span> :</p>
                  <div className="text-primary">
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                  </div>
              </div>
              <div>
                  <div className="form-group">
                      <label htmlFor="message">Your Review <span style={{ color: 'red' }}>*</span></label>
                      <textarea
                          id="message"
                          cols="30"
                          rows="5"
                          className="form-control"
                          onChange={(e)=>{dispatch({type:'changereview',value:e.target.value})}}
                          value = {state.review.value}
                      />
                  </div>

                  <div className='mb-2'> {state.submiterror ? <span className='text-danger small'>{state.submitmessage}</span> : <span className='m-1'> </span>} </div>
                  <div className="form-group mb-0">
                      <input
                          type="submit"
                          value="Leave Your Review"
                          className={` btn ${state.btncolor} px-3`}
                          onClick={handleclick}
                          
                      />
                  </div>

              </div>
          </div>
 
 
 
 
 
 </>
  )
}
