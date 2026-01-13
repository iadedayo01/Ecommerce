// import React from 'react'

import { RxCross2 } from "react-icons/rx";

const ShopModal = () => {
  return (
    <div
      className=" fixed inset-0 bg-[#344054B2] bg-opacity-40 flex justify-center items-center h-screen "
      style={{ backdropFilter: "blur(7.06999969482422px)" }}
    >
      <div className="bg-white size-90 rounded-lg">
        <div className="flex p-5 justify-between">
          <h1 className="text-xl">SHOP</h1>
          <RxCross2 />
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
