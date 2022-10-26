import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import StoreLayout from "./pages layout/StoreLayout.js";
import Productview from "./pages layout/productview.js";
import HomeLayout from './pages layout/HomeLayout'
import Authpage from './pages layout/Authpage'
import Testing2 from "./components/Detailproduct/testing2.js";
import Testing from './components/Searchresult/testing'
import CartPage from "./components/Cartpage/CartPage.js";
import OrderPage from './components/orders/OrderPage'
import Admin from './components/Admin page/Admin'
import Login from "./src/pages/login/Login.jsx";
function Main() {
  return (
    <BrowserRouter>
    <Login/>
    </BrowserRouter>
  );
}







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
