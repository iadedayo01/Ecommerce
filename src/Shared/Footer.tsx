// import React from 'react'

import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaGooglePay,
  FaCcMastercard,
  FaRegCopyright,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GrAmex } from "react-icons/gr";

import FI from "../assets/White.png";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiVisaLine, RiPaypalFill } from "react-icons/ri";

interface Footer1Props {
  icon: ReactElement;
  name: string;
}

interface InfoFooterProps {
  name: string;
  route: string;
}

interface serviceFooterProps {
  name: string;
  route: string;
}

interface lastIconProps {
  icon: ReactElement;
  route: string;
}

const Footer = () => {
  const lastIcon: lastIconProps[] = [
    { icon: <FaFacebookF />, route: "https://facebook.com" },
    { icon: <FaInstagram />, route: "https://instagram.com" },
    { icon: <FaTwitter />, route: "https://twitter.com" },
  ];

  const footerIcons = [
    <RiVisaLine className="text-blue-400 text-2xl" />,
    <FaCcMastercard className="text-2xl" />,
    <FaGooglePay className="text-2xl" />,
    <GrAmex className="text-2xl text-blue-400" />,
    <RiPaypalFill className="text-2xl" />,
  ];

  const footer1: Footer1Props[] = [
    { icon: <FiPhoneCall />, name: "(701) 555-7365" },
    { icon: <GoMail />, name: "krist@example.com" },
    {
      icon: <IoLocationOutline />,
      name: "3891 Ranchview Dr. Richardson, California 66349",
    },
  ];

  const InfoFooter: InfoFooterProps[] = [
    { name: "My Account", route: "/profile" },
    { name: "Login", route: "/login" },
    { name: "My Cart", route: "/cart" },
    { name: "My Wishlist", route: "/wishlist" },
    { name: "Checkout", route: "/checkout" },
  ];

  const serviceFooter: serviceFooterProps[] = [
    { name: "About Us", route: "/about" },
    { name: "Careers", route: "/careers" },
    { name: "Delivert Information", route: "/delivery" },
    { name: "Privacy Policy", route: "/privacy" },
    { name: "Terms & condition", route: "/terms" },
  ];
  return (
    <div className="bg-black px-25 py-10 ">
      <div className="flex flex-col">
        {/* grid property */}
        <div className="grid grid-cols-4 gap-4">
          {/* location */}
          <div className="flex flex-col gap-3">
            <img src={FI} className="h-20 w-35" />
            {footer1.map((info) => (
              <div className="flex gap-2 text-white text-xs items-center">
                {info.icon}
                {info.name}
              </div>
            ))}
          </div>
          {/* information */}
          <div className="flex text-white gap-3 ml-10 items-start flex-col">
            <h1 className="font-bold">Information</h1>
            {InfoFooter.map((infor) => (
              <div className="text-xs">
                <Link to={infor.route}>{infor.name}</Link>
              </div>
            ))}
          </div>
          {/* services */}
          <div className="flex flex-col gap-3 items-start text-white">
            <h1 className="font-bold">Service</h1>
            {serviceFooter.map((service) => (
              <div className="text-xs">
                <Link to={service.route}>{service.name}</Link>
              </div>
            ))}
          </div>
          {/* newsletter */}
          <div className="flex flex-col gap-3 items-start text-white ">
            <h1 className="font-bold">Subscribe</h1>
            <p className="text-xs">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="border peer border-white py-2 px-8 rounded-lg"
              />
              <CiMail className="text-xl absolute top-1/6 left-2" />
              <IoIosArrowRoundForward className="absolute text-2xl cursor-pointer top-1/6 right-2" />
              <p className="invisible peer-invalid:visible">Enter correct email</p>
            </div>
          </div>
        </div>
        <hr className="text-white mt-4" />
        <div className="flex pt-3 justify-between">
          <div className="flex gap-2">
            {footerIcons.map((icon) => (
              <div className=" p-1 flex justify-center items-center bg-white">
                {icon}
              </div>
            ))}
          </div>
          <div className="text-white flex items-center">
            <FaRegCopyright />
            <h1 className="text-xs">2023 Krist All Rights are reserved </h1>
          </div>
          <div className="flex gap-2 items-center">
            {lastIcon.map((last) => (
              <div className="text-white">
                <Link to={last.route}>{last.icon}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
