// import React from 'react'

import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopModal = ({ setOpenModal }: ModalProps) => {
  return (
    <div
      className=" fixed top-0 left-0 bg-[#344054B2] inset-0 bg-opacity-40 flex justify-center items-center h-screen "
      style={{ backdropFilter: "blur(7.06999969482422px)" }}
      
    >
      <div className="bg-white w-120 h-80">
        <div className="flex p-5 justify-between">
          <h1 className="text-xl">SHOP</h1>
          <RxCross2 className="cursor-pointer" onClick={() => setOpenModal(false)}/>
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
