// import React from 'react'

import CheckoutComponent from "../components/Cart/CheckoutComponent";
import TotalComponent from "../components/Cart/TotalComponent";



const Cart = () => {
  return (
    <div className=" px-25 py-9 flex gap-5 flex-col">
      <div>
        <h1 className="text-3xl font-normal py-4">Checkout</h1>
      </div>
      <div className="flex">
        <CheckoutComponent />
        <TotalComponent />
      </div>
    </div>
  );
};

export default Cart;
