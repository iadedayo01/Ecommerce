// import React from 'react'
import PI from "../../assets/Rectangle3.png";
import Button from "../../Shared/Button";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroComponent = () => {
  return (
    <div
      className=" px-25 flex space-y-5 flex-col justify-center w-full h-150"
      style={{ backgroundImage: `url(${PI})` }}
    >
      <h3 className="text-4xl font-normal tracking-tighter">Classic Exclusive</h3>
      <h1 className="text-6xl tracking-tighter text-balance font-bold">Women's Collection</h1>
      <h3 className="text-3xl font-normal tracking-tighter">UPTO 40% OFF</h3>
      <Button
        text="Shop Now"
        BG="bg-[#131118]"
        textColor="text-white"
        borderRadius="rounded-sm"
        width="w-fit"
        padding="p-[8px]"
        icon={<FaLongArrowAltRight />}
      />
    </div>
  );
};

export default HeroComponent;
