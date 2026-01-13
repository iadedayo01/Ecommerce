// import React from 'react'

import type { ReactElement } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Button from "../../Shared/Button";

interface reviewInfoProps {
  image: string;
  name: string;
  icon: ReactElement;
  remark: string;
  description: string;
}

const ProductReviews = () => {
  const rating = [<CiStar />];
  const reviewInfo: reviewInfoProps[] = [
    {
      image: "",
      name: "Oluwalonimi Ileri",
      icon: <FaStar className="text-yellow-400" />,
      remark: "Excellent Product, I Love It 😍",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'content here, content here', making it look like treadable English.",
    },
    {
      image: "",
      name: "Sangosina Sade",
      icon: <FaStar className="text-yellow-400" />,
      remark: "My Daughter is very much in love with this products",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'content here, content here', making it look like treadable English.",
    },
  ];
  return (
    <div className="py-5 flex flex-col">
      <div>
        <h1 className="text-sm font-bold">Customer Reviews</h1>
      </div>
      <div className="grid grid-row-2">
        {reviewInfo.map((review) => (
          <div className="border-b border-gray-300 py-3 space-y-2">
            <div className="flex gap-2">
              <div className="size-8 ">
                <img
                  src={review.image}
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm">{review.name}</h1>
                <div className="flex">
                  {review.icon}
                  {review.icon}
                  {review.icon}
                  {review.icon}
                  {review.icon}
                </div>
              </div>
            </div>
            <h1 className="font-bold text-sm">{review.remark}</h1>
            <h1 className="text-sm">{review.description}</h1>
            <p className="text-xs">
              <span className="text-gray-400">Review by </span>Krist{" "}
              <span className="text-gray-400">Posted on </span>June 05 2023
            </p>
          </div>
        ))}
      </div>
      <div className="pt-5 space-y-3">
        <h1 className="font-bold text-sm">Add your Review</h1>
        <div className="flex gap-2 flex-col">
          <h1 className="text-sm">Your Rating</h1>
          <div>
            {rating.map((rate) => (
              <div className="flex gap-2">
                <div className="border-gray-300 border-r">{rate}</div>
                <div className="flex border-gray-300 border-r">
                  {rate}
                  {rate}
                </div>
                <div className="flex border-gray-300 border-r">
                  {rate}
                  {rate}
                  {rate}
                </div>
                <div className="flex border-gray-300 border-r">
                  {rate}
                  {rate}
                  {rate}
                  {rate}
                </div>
                <div className="flex">
                  {rate}
                  {rate}
                  {rate}
                  {rate}
                  {rate}
                </div>
              </div>
            ))}
          </div>
          <form className="flex pt-5 gap-5 flex-col">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-xs">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="py-2 px-5 rounded-lg border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-2 px-5 rounded-lg border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="review" className="text-xs">
                Your Review
              </label>
              <input
                type="text"
                placeholder="Enter Your Review"
                className="py-5 px-5 rounded-lg border"
              />
            </div>
            <Button
              text="Submit"
              textColor="text-white"
              borderRadius="rounded-lg"
              BG="bg-[#131118]"
              padding="py-2"
              width="w-20"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
