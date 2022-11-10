import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomeLayout from './pages/HomeLayout'
import SignIn from './components/sign in/Signin'
import SignUp from './components/sign up/Signup'
import CartPage from './pages/CartPage/CartPage'
import OrderandWishPage from "./pages/OrderandWishPage";
import AdminPageLayout from './Admin/AdminPageLayout/AdminPageLayout'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import Axios from 'axios'
import {AuthcontextProvider} from './Contexts/AuthcontextProvider'
Axios.defaults.baseURL = 'http://localhost:8070'

function Main() {

  return (

    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/OrderWish' element={<OrderandWishPage />} />
          <Route path='/admin' element={<AdminPageLayout />} />
          <Route path='*' element={<p>not found</p>} />
        </Routes>
      </BrowserRouter>

    </>

  );
}














const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(





  <AuthcontextProvider>
    <Main />
    <ScrollToTop />
  </AuthcontextProvider>
);
