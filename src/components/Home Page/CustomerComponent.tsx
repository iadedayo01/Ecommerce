// import React from 'react'

import type { ReactElement } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

interface feedbackprops {
  icon: ReactElement;
  text: string;
  image: string;
  name: string;
  role: string;
}

const CustomerComponent = () => {
  const feedback: feedbackprops[] = [
    {
      icon: <FaStar className="text-yellow-500"/>,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum Lorem",
      image: "",
      name: "Adesina Issac",
      role: "Model",
    },
    {
      icon: <FaStar className="text-yellow-500"/>,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum Lorem",
      image: "",
      name: "Ibrahim Adenola",
      role: "Co-Founder",
    },
    {
      icon: <FaStar className="text-yellow-500"/>,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum Lorem",
      image: "",
      name: "Sangosanya Michael",
      role: "Designer",
    },
  ];
  return (
    <div className="bg-[#FAFAFB] px-25 pb-15">
      <div className="py-20 flex justify-between">
        <h1 className="text-3xl ">What our Customer Say's</h1>
        <div className="flex gap-3">
          <div className="size-10 cursor-pointer outline bg-gray-300 flex items-center justify-center">
            <FaArrowLeft />
          </div>
          <div className="size-10 outline cursor-pointer bg-black text-white flex items-center justify-center">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 p-8 gap-5">
        {feedback.map((feed) => (
          <div className="flex items-start p-5 bg-white shadow gap-4 flex-col">
            <div className="flex">
              {feed.icon}
              {feed.icon}
              {feed.icon}
              {feed.icon}
              {feed.icon}
            </div>
            <div className="text-sm">{feed.text}</div>
            <div className="flex gap-3">
              <div className="size-10">
                <img className="rounded-full h-full w-full"/>
              </div>
              <div className="flex gap-1 flex-col">
                <div className="text-sm font-bold">{feed.name}</div>
                <div className="text-xs text-gray-600">{feed.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerComponent;
