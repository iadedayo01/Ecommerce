// import React from 'react'

import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopModal = ({ setOpenModal }: ModalProps) => {
  return (
    <div
      className="  inset-0 bg-transparent bg-opacity-40 absolute flex justify-center items-center h-screen "
      
    >
      <div className="bg-white relative bottom-5 w-120 h-80">
        <div className="flex p-5 justify-between">
          <h1 className="text-xl">SHOP</h1>
          <RxCross2 onClick={() => setOpenModal(false)}/>
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
