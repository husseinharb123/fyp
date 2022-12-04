import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './AddProductSection.scoped.css';
import '../../CommonCSS/1.scoped.css'
import { useImmer, useImmerReducer } from "use-immer";
import axios from "axios";
export default function AddProductSection() {

  const parm = useParams()
  const storeid = parm.id;
  const initialstate = {
    title: '',
    price: 0,
    quantity: 0,
    discount: 0,
    category: '',
    sellingtech: '',
    description: '',
    barcode: '',
    imgurl: null,
    submitcount: 0,
    haserror: false

  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case 'title':
        draft.title = action.value
        break;
      case 'price':
        draft.price = action.value
        break;
      case 'quantity':
        draft.quantity = action.value
        break;
      case 'discount':
        draft.discount = action.value
        break;
      case 'sellingtech':
        draft.sellingtech = action.value
        break;
      case 'description':
        draft.description = action.value
        break;
      case 'barcode':
        draft.barcode = action.value
        break;
      case 'imgurl':
        draft.imgurl = action.value
        break;
      case 'category':
        draft.category = action.value
        break;
      case 'submitform':
        if (draft.title && draft.price && draft.quantity && draft.discount && draft.sellingtech && draft.description && draft.barcode && draft.category) {
          draft.haserror = false
          draft.submitcount++

        }
        else {
          console.log('error');
          draft.haserror = true
        }
        break;
      default:
        break;
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialstate)


  function handlepublish(e) {
    dispatch({ type: 'submitform' })
    if (!state.haserror) {
      e.preventDefault();
    }

  }

  useEffect(() => {
    if (state.submitcount) {

      const data = {
        storename: state.s1.storename,
        Email: state.s2.Email,
        FirstName: state.s2.FirstName,
        LastName: state.s2.LastName,
        Address: state.s2.Address,
        Phonenumber: state.s2.Phonenumber,
        Password: state.s2.Password,
        industry: state.s3.industry,
        deliveryopt1: state.s3.deliveryopt1,
        deliveryopt2: state.s3.deliveryopt2,
        deliveryopt3: state.s3.deliveryopt3,

      }


      async function fetchdata() {
        try {
          const url = '/publishproduct'
          const response = await axios.post(url, data)
          if (response.data.responseSuccess) {
            const data = {
              token: response.data.storeinfo.token,
              _id: response.data.storeinfo._id,
              FirstName: response.data.storeinfo.FirstName,
              LastName: response.data.storeinfo.LastName,
              Email: response.data.storeinfo.Email
            }
          }

        } catch (error) {
          console.log(error);
        }
      }

      fetchdata()
    }


  }, [state.submitcount])

  return (
    <>

      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form>
          <div className="content-header">
            <Link className="btn btn-danger text-white" to="products">
              Go to products
            </Link>
            <h2 className="content-title">Add product</h2>
            <div>
              <button type="submit" className="btn btn-primary"
                onClick={handlepublish}
              >
                Publish now
              </button>
            </div>
          </div>
          <div className=" border-danger">
            <div className="w-75">
              <div className="card mb-4 shadow-sm ">
                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Product Title<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control ui-autocomplete-input"
                      id="product_title"
                      required
                      autoComplete="off"
                      onChange={(e) => dispatch({ type: 'title', value: e.target.value })}
                      value={state.title}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Price<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control ui-autocomplete-input"
                      id="product_price"
                      required
                      autoComplete="off"
                      onChange={(e) => dispatch({ type: 'price', value: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Quantity<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control ui-autocomplete-input"
                      id="product_price"
                      required
                      autoComplete="off"
                      onChange={(e) => dispatch({ type: 'quantity', value: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Discount
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control ui-autocomplete-input"
                      id="product_price"
                      required
                      autoComplete="off"
                      onChange={(e) => dispatch({ type: 'discount', value: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price h2" className="form-label">
                      Barcode<span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control ui-autocomplete-input"
                      id="product_price"
                      required
                      autoComplete="off"
                      onChange={(e) => dispatch({ type: 'barcode', value: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Selling Techniques <span style={{ color: 'red' }}>*</span>
                    </label>
                    <select className="form-select"
                      multiple
                      onChange={(e) => dispatch({ type: 'sellingtech', value: e.target.value })}

                    >
                      <option>Status</option>
                      <option>Active</option>
                      <option>Disabled</option>
                      <option>Show all</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Category<span style={{ color: 'red' }}>*</span>
                    </label>
                    <select className="form-select"
                      onChange={(e) => dispatch({ type: 'category', value: e.target.value })}

                    >
                      <option>Status</option>
                      <option>Active</option>
                      <option>Disabled</option>
                      <option>Show all</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Description<span style={{ color: 'red' }}>*</span></label>
                    <textarea
                      placeholder="Type here"
                      className="form-control"
                      rows="7"
                      required
                      onChange={(e) => dispatch({ type: 'description', value: e.target.value })}
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
