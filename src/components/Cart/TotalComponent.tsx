// import React from 'react'

import Button from "../../Shared/Button";

const TotalComponent = () => {
  return (
    <div className="w-full basis-1/4 flex flex-col py-5 px-4 flex-1 border border-gray-300 shadow">
      <div className="flex justify-between">
        <h1 className="font-bold">Subtotal</h1>
        <h1 className="font-bold">$200.00</h1>
      </div>
      <hr className="mt-5 text-gray-300" />
      <form className="space-y-4">
        <div className="space-y-4">
          <label className="text-xs">Enter Discount Code</label>
          <div className="flex">
            <input
              type="text"
              className="border py-2 px-4 w-full rounded-sm border-[#131118]"
            />
            <Button
              text="Apply"
              BG="bg-[#131118]"
              textColor="text-white"
              borderRadius="rounded-sm"
              padding="py-2 px-5"
            />
          </div>
          <div className="flex text-sm justify-between">
            <h1>Delivery Charge</h1>
            <h1>$5.00</h1>
          </div>
          <hr />
          <div className="flex font-bold justify-between">
            <h1>Grand Total</h1>
            <h1>$205.00</h1>
          </div>
        </div>
        <Button
          text="Proceed to Checkout"
          BG="bg-[#131118]"
          textColor="text-white"
          borderRadius="rounded-sm"
          padding="py-2 px-10"
        />
      </form>
    </div>
  );
};

export default TotalComponent;
