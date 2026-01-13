// import React from 'react'

import PI1 from "../../assets/random6.jpg";
import PI2 from "../../assets/random11.jpg";
import PI3 from "../../assets/random5.jpg";
import PI4 from "../../assets/random4.jpg";
import PI5 from "../../assets/random5.jpg";
import PI6 from "../../assets/random6.jpg";
import PI7 from "../../assets/random4.jpg";
import PI8 from "../../assets/random11.jpg";

interface BestSellerProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const BestSellerComponent = () => {
  const bestSeller: BestSellerProps[] = [
    {
      image: PI1,
      title: "Roadstar",
      description: "Printed Cotton Sweatshirt",
      price: "#90,000",
    },
    {
      image: PI2,
      title: "Calvin Klein",
      description: "Printed Cotton Sweatshirt",
      price: "#150,000",
    },
    {
      image: PI3,
      title: "Primark",
      description: "Female Cotton Sweatshirt",
      price: "#80,000",
    },
    {
      image: PI4,
      title: "Gucci",
      description: "Unisex Printed Sweatshirt",
      price: "#20,000",
    },
    {
      image: PI5,
      title: "Primark",
      description: "Female Printed Sweatshirt",
      price: "#35,000",
    },
    {
      image: PI6,
      title: "Roadstar",
      description: "Printed Cotton Sweatshirt",
      price: "#105,000",
    },
    {
      image: PI7,
      title: "Gucci",
      description: "Unisex Printed Sweatshirt",
      price: "#70,000",
    },
    {
      image: PI8,
      title: "Adidas",
      description: "Men Adi-dash Running Shoes",
      price: "#85,000",
    },
  ];
  return (
    <div className="px-25 bg-white flex flex-col">
      <div className="flex mt-8 py-10 justify-center">
        <h1 className="text-3xl tracking-tighter">Our BestSeller</h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-8 sm:grid-cols-4 sm:grid-rows-2 gap-5">
        {bestSeller.map((best) => (
          <div className="flex flex-col hover:bg-blue-300">
            <img src={best.image} />
            <div className="font-bold">{best.title}</div>
            <div className="text-sm">{best.description}</div>
            <div className="text-sm">{best.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellerComponent;
