// import React from 'react'

import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const ProfileLayout = () => {
  return (
    <>
      <NavBar />
      <div className="flex px-28 gap-3 py-10 flex-col h-screen">
        <h1 className="text-3xl font-normal">My Profile</h1>
        <div className="flex">
          <Sidebar />
          <div className=" flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileLayout;
