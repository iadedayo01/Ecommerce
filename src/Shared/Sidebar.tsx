// import React from 'react'
import { CiUser } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdWavingHand } from "react-icons/md";

import IM from "../assets/port1.webp";

import { useState, type ReactElement } from "react";
import { Link } from "react-router-dom";

interface SideProps {
  name: string;
  icon: ReactElement;
  route: string;
}

const Sidebar = () => {
  const [activeRoute, setActiveRoute] = useState<string>(
    "Personal Information",
  );

  const pages: SideProps[] = [
    {
      name: "Personal Information",
      icon: <CiUser />,
      route: "/profile",
    },
    { name: "My Orders", icon: <BsBoxSeam />, route: "/profile/my_orders" },
    { name: "My Wishlists", icon: <CiHeart />, route: "/profile/my_wishlists" },
    {
      name: "Manage Addresses",
      icon: <CiLocationOn />,
      route: "/profile/manage_addresses",
    },
    {
      name: "Saved Cards",
      icon: <CiCreditCard1 />,
      route: "/profile/saved_cards",
    },
    {
      name: "Notifications",
      icon: <IoIosNotificationsOutline />,
      route: "/profile/notifications",
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline />,
      route: "/profile/settings",
    },
  ];
  return (
    <div className=" flex flex-col shadow border border-gray-300 py-5">
      <div className="flex gap-4 px-5 ">
        <div className="size-13 rounded-full">
          <img className=" h-full w-full rounded-full" src={IM} />
        </div>
        <div className="flex flex-col">
          <div className="flex text-sm items-center gap-1">
            <h1>Hello</h1>
            <MdWavingHand className="text-yellow-400" />
          </div>
          <h1 className="font-semibold">Robert Fox</h1>
        </div>
      </div>
      <hr className=" mt-5 text-gray-300" />
      <div className=" flex flex-col gap-1">
        {pages.map((page) => (
          <Link to={page.route}>
            <div
              className={`flex py-2 gap-2 items-center px-5 ${activeRoute == page.name ? " bg-black text-white" : ""}`}
              onClick={() => setActiveRoute(page.name)}
            >
              {page.icon}
              {page.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
