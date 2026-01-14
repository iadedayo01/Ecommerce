// import React from 'react'
import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import PI2 from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useState, type ReactElement } from "react";
import Button from "./Button";
import ShopModal from "./ShopModal";

interface NavProps {
  name: string;
  route: string;
  icon?: ReactElement;
}

const NavBar = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const navBar: NavProps[] = [
    { name: "Home", route: "/home_page" },
    { name: "Shop", route: "/product_list", icon: <MdOutlineKeyboardArrowDown /> },
    { name: "Our Story", route: "/story" },
    { name: "Blog", route: "/blog" },
    { name: "Contact Us", route: "/contact" },
  ];
  return (
    <div className="flex py-4 justify-between px-20">
      <div>
        <img src={PI2} />
      </div>
      <div className="flex gap-8 items-center">
        {navBar.map((nav) => (
          <div className="cursor-pointer items-center ">
              <div className="flex items-center">
            <Link to={nav.route}>
                {nav.name}
            </Link>
                <div onClick={()=> setOpenModal(true)}>{nav.icon}</div>
              </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <CiSearch className="text-2xl" />
        <CiHeart className="text-2xl" />
        <button><Link to="/cart"><HiOutlineShoppingBag className="text-2xl" /></Link></button>
        <Link to="/login">
          <Button
            text="Login"
            BG="bg-[#131118]"
            textColor="text-white"
            borderRadius="rounded-sm"
            padding="py-1 px-3"
          />
        </Link>
      </div>

      {openModal && <ShopModal setOpenModal={setOpenModal}/>}
    </div>
  );
};

export default NavBar;
