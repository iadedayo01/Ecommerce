// import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import PI from "../../assets/random10.jpg";
import Button from "../../Shared/Button";

interface DealProps {
  number: number;
  text: string;
}

const DealsComponent = () => {
  const Deals: DealProps[] = [
    { number: 120, text: "Days" },
    { number: 18, text: "Hours" },
    { number: 15, text: "Mins" },
    { number: 10, text: "Secs" },
  ];
  return (
    <div className="px-25 mt-20 mb-12 w-full py-10 flex">
      <div className="flex basis-1/2 w-full justify-center gap-8 items-start flex-col ">
        <h1 className="text-4xl font-semibold">Deals of the Month</h1>
        <p className="text-sm font-semibold">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Loren Ipsum is that it has a more-or-less normal distribution of
          letters
        </p>
        <div className="grid grid-cols-4 gap-5">
          {Deals.map((deal) => (
            <div className="size-20 rounded-sm border flex flex-col border-gray-400 items-center justify-center">
              <h1 className="text-4xl font-bold">{deal.number}</h1>
              <p className="text-2xl font-normal">{deal.text}</p>
            </div>
          ))}
        </div>
        <Button
          text="View All Products"
          borderRadius="rounded-sm"
          BG="bg-[#131118]"
          textColor="text-white"
          icon={<FaArrowRight />}
          padding="p-[12px]"
        />
      </div>
      <div className="w-full basis-1/2 justify-center">
        <img src={PI} />
      </div>
    </div>
  );
};

export default DealsComponent;
