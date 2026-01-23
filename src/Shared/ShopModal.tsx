// import React from 'react'

import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopModal = ({ setOpenModal }: ModalProps) => {
  return (
    <div
      className=" fixed top-0 left-0 bg-[#344054B2] inset-0 bg-opacity-40 flex justify-center items-center h-screen "
      style={{ backdropFilter: "blur(7.06999969482422px)" }}
    >
      <div className="bg-white flex flex-col w-200 h-100">
        <div className="flex p-5 justify-between">
          <h1 className="text-xl">SHOP</h1>
          <RxCross2
            className=" outline cursor-pointer"
            onClick={() => setOpenModal(false)}
          />
        </div>
        <div className="grid px-4 grid-cols-4 gap-2">
          <div className="flex gap-5 border-r flex-col">
            <div className="px-4">
              <h1 className=" text-sm font-bold py-1">Men</h1>
              <Link to="/t-shirt">
                <h1 className=" text-sm py-1">T-Shirts</h1>
              </Link>
              <Link to="/">
                <h1 className=" text-sm py-1">Casual Shirts</h1>
              </Link>
              <Link to="/">
                <h1 className=" text-sm py-1">Formal Shirts</h1>
              </Link>
              <Link to="/">
                <h1 className=" text-sm py-1">Jackets</h1>
              </Link>
              <Link to="/">
                <h1 className=" text-sm py-1">Blazers & Coats</h1>
              </Link>
            </div>
            <div className="px-4">
              <h1 className=" text-sm font-bold py-1">
                Indian & Festive Wears
              </h1>
              <Link to="/">
                <h1 className=" text-sm py-1">Kurtas & Kurta Sets</h1>
              </Link>
              <Link to="/">
                <h1 className=" text-sm py-1">Sherwanis</h1>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-r">
            <div className="px-4">
              <h1 className=" py-1 font-bold text-sm">Women</h1>
              <Link to="/">
                <h1 className=" text-sm py-1">Kurtas & Suits</h1>
              </Link>
              <Link to="/">
                <h1 className=" text-sm py-1">Sarees</h1>
              </Link>
              <Link to="/">
                <h1 className=" text-sm py-1">Ethnic Wear</h1>
              </Link>
              <Link to="/">
                <h1 className=" text-sm py-1">Lehenga Cholis</h1>
              </Link>
              <Link to="/">
                <h1 className=" text-sm py-1">Jackets</h1>
              </Link>
            </div>
            <div className="px-4">
              <h1 className="font-bold text-sm py-1">Western Wear</h1>
              <Link to="/">
                <h1 className=" text-sm py-1">Dresses</h1>
              </Link>
              <Link to="/">
                <h1 className=" text-sm py-1">Jump Suits</h1>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-r">
            <div className="px-4">
              <h1 className=" font-bold text-sm py-1">Footwear</h1>
              <Link to="/">
                <h1 className="text-sm py-1">Flats</h1>
              </Link>
              <Link to="/">
                <h1 className="text-sm py-1">Casual Shoes</h1>
              </Link>
              <Link to="/">
                <h1 className="text-sm py-1">Heels</h1>
              </Link>
              <Link to="/">
                <h1 className="text-sm py-1">Boots</h1>
              </Link>
              <Link to="/">
                <h1 className="text-sm py-1">Sports Shoes & Floaters</h1>
              </Link>
            </div>
            <div className="px-4">
              <h1 className=" font-bold py-1 text-sm">Product Features</h1>
              <Link to="/">
                <h1 className="text-sm py-1">360 Product Viewer</h1>
              </Link>
              <Link to="/">
                <h1 className="text-sm py-1">Product with Video</h1>
              </Link>
            </div>
          </div>
          <div className="px-4">
            <h1 className=" font-bold py-1 text-sm">Kids</h1>
            <Link to="/">
              <h1 className="text-sm py-1">T-Shirts</h1>
            </Link>
            <Link to="/">
              <h1 className="text-sm py-1">Shirts</h1>
            </Link>
            <Link to="/">
              <h1 className="text-sm py-1">Jeans</h1>
            </Link>
            <Link to="/">
              <h1 className="text-sm py-1">Trousers</h1>
            </Link>
            <Link to="/">
              <h1 className="text-sm py-1">Party Wear</h1>
            </Link>
            <Link to="/">
              <h1 className="text-sm py-1">Innerwear & Thermal</h1>
            </Link>
            <Link to="/">
              <h1 className="text-sm py-1">Track Pants</h1>
            </Link>
            <Link to="/">
              <h1 className="text-sm py-1">Value Pack</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
