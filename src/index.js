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
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import Axios from 'axios'
import { AuthcontextProvider, AuthContext, AuthDispatchContext } from './Contexts/AuthcontextProvider'
import { ProductDetailContextProvider } from "./Contexts/ProductDetailContextProvider";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useContext } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from './pages/SearchPage/SearchPage'
Axios.defaults.baseURL = 'http://localhost:8070'

function Main() {
  const state = useContext(AuthContext)
  return (

    <>

      <BrowserRouter>
        <Routes>
          {state.isloggedin &&
            <>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/signin" element={<HomeLayout />} />
              <Route path="/signup" element={<HomeLayout />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/OrderWish' element={<OrderandWishPage />} />
            </>

          }

          {!state.isloggedin &&
            <>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path='/cart' element={<SignIn />} />
              <Route path='/OrderWish' element={<SignIn />} />
            </>

          }
          <Route path="/productdetail/:id" element={<ProductDetailPage />}></Route>
          <Route path='*' element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}














const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <AuthcontextProvider>
    <ProductDetailContextProvider>
    <Main />
    <ScrollToTop />
    </ProductDetailContextProvider>
  </AuthcontextProvider>
);
