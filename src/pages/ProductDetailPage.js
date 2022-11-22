import React, { useContext } from 'react'
import Footer from '../main components/Footer/Footer'
import Header from '../main components/Header/Header'
import ProductDetail from '../main components/ProductDetail/ProductDetail'
import ReviewDescribeProduct from '../main components/ReviewDescribeProduct/ReviewDescribeProduct'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductDetailDispatch } from '../Contexts/ProductDetailContextProvider'
import Axios from 'axios'
import { useState } from 'react'

export default function ProductDetailPage() {
  const dispatch = useContext(ProductDetailDispatch);
  let parms = useParams();
  let id = parms.id
  const navigate = useNavigate();
  const [loaded, setloaded] = useState(false)
  useEffect(() => {

    async function fetchdata() {
      setloaded(false);
      const url = `/productdetail/${id}`
      const response = await Axios.get(url)
      if (response.data.responseSuccess) {
        dispatch({ type: 'fetchdata', value: response.data.productdetail })
        setloaded(true);
      }
      else {
        navigate('*')
      }

    }
    fetchdata()
  }

    , [])
  return (


    <>
      {loaded && <>
        <Header />
        <div class="container-fluid pb-5">
          <ProductDetail />
          <ReviewDescribeProduct />
        </div>
        <Footer />

      </>
      }

    </>




  )
}
