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
import ForgotPassword from "./PAGES/ForgotPassword";
import OTP from "./PAGES/OTP";
import ProfileLayout from "./LAYOUT/ProfileLayout";
import Profile from "./PAGES/Profile";
import MyOrder from "./PAGES/MyOrder";
import ManageAddresses from "./PAGES/ManageAddresses";
import MyWishlist from "./PAGES/MyWishlist";
import SavedCards from "./PAGES/SavedCards";
import Notifications from "./PAGES/Notifications";
import Settings from "./PAGES/Settings";

const App = () => {
  return (
    <div className="bg-white">
      <Toaster />
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot_password" element={<ForgotPassword />} />
        <Route path="otp" element={<OTP />} />
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="product_list" element={<ProductList />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route element={<ProfileLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/my_orders" element={<MyOrder />} />
          <Route path="/profile/my_wishlists" element={<MyWishlist />} />
          <Route
            path="/profile/manage_addresses"
            element={<ManageAddresses />}
          />
          <Route path="/profile/saved_cards" element={<SavedCards />} />
          <Route path="/profile/notifications" element={<Notifications />} />
          <Route path="/profile/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
