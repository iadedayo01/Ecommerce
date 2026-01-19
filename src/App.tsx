// import React from 'react'

import { Route, Routes } from "react-router-dom";
import LogIn from "./PAGES/LogIn";
import SignUp from "./PAGES/SignUp";
import Layout from "./LAYOUT/Layout";
import ProductList from "./PAGES/ProductList";
import HomePage from "./PAGES/HomePage";
import ProductDetails from "./PAGES/ProductDetails";
import Cart from "./PAGES/Cart";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-white">
      <Toaster />
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="product_list" element={<ProductList />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
