import React from 'react'
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Services from '../components/services/services'
import Category from '../components/categories/categories.js';
import Slideshow from '../components/Slide show/Slideshow.js';
export default function HomeLayout() {
  return (
    <>
<Header/>
<Slideshow/>
<Category/>
<Services/>


<Footer/>

    </>
  );
}
