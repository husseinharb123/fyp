import React from 'react'
import Category from '../components/categories/categories'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Product from '../components/product/product'
import Productl1 from '../components/productl1/Productl1'
export default function StoreLayout() {
  return (
    <>
    <Header/>
    <Product/>
    <Category/>    
    <Productl1/>
    <Footer/>

    </>
  )
}
