// import React from 'react'

import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import NavBar from "../Shared/NavBar";

// import { useLocation } from "react-router-dom"

const ProfileLayout = () => {
  // const {pathname} = useLocation()

  // const routeTitles: Record<string, string> = {
  //     "/profile" : "Profile",
  //     "/profile/personal_information" : "Personal Information",
  //     "/profile/my_orders" : "My Orders",
  //     "/profile/my_wishlists" : "My Wishlists",
  //     "/profile/manage_addresses" : "My Orders",
  //     "/profile/saved_cards" : "Saved Cards",
  //     "/profile/notifications" : "Notifications",
  //     "/profile/settings" : "Settings"
  // }

  // const pathTitle = routeTitles[pathname]
  return (
    <>
      <NavBar />
      <div className="flex px-28 gap-3 py-10 flex-col h-screen">
        <h1 className="text-3xl font-normal">My Profile</h1>
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
