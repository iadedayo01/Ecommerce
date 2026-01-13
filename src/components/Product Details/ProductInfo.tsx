// import React from 'react'
import { useState, type ReactElement } from "react";
import { FaStar } from "react-icons/fa6";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import Button from "../../Shared/Button";

// import prod1 from "../../assets/Product1.png";
// import prod2 from "../../assets/Product2.png";
// import prod3 from "../../assets/Product3.png";
// import prod4 from "../../assets/Product4.png";

interface productInfoProps {
  name: string;
  details: string;
  icon: ReactElement;
  price: string;
  discountedPrice: string;
  description: string;
  color: string[];
  size: string[];
}

const ProductInfo = ({productInfoo}) => {
  const [onSize, setOnSize] = useState<string>("S");

  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  console.log(productInfoo,"jhgf")

  const name = ["ghgjk", "hgjjk", "gjvhk", "gvhbnmhj"];
  console.log(name[0]);
  // const products = [prod1, prod2, prod3, prod4];

  const productInfo: productInfoProps[] = [
    {
      name: "ONE LIFE",
      details: "One Life Graphic T-Shirt",
      icon: <FaStar className="text-yellow-500" />,
      price: "$100.00",
      discountedPrice: "$80.00",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Loren Ipsum is that it has a more-or-less normal distribution of letters.",
      color: [
        "bg-red-500",
        "bg-blue-500",
        "bg-orange-400",
        "bg-black",
        "bg-green-600",
        "bg-yellow-300",
      ],
      size: ["S", "M", "L", "XL", "XXL"],
    },
  ];
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-xs">
          Home &gt; Shop &gt; Women Textured Handheld Bag
        </h1>
      </div>
      <div className="flex">
        <div className="w-full basis-1/2"></div>
        <div className="w-full basis-1/2 gap-8 flex flex-col">
          {/* {productInfoo.map((info) => ( */}
            <div className="space-y-2">
              <h1 className="text-xl font-bold">{productInfoo.name}</h1>
              <h1 className="text-sm">{productInfoo.details}</h1>
              <div className="flex">
                {productInfoo.icon}
                {productInfoo.icon}
                {productInfoo.icon}
                {productInfoo.icon}
                {productInfoo.icon}
              </div>
              <div className="flex gap-3 text-sm">
                <h1>{productInfoo.discountedPrice}</h1>
                <h1 className="text-gray-400 line-through">{productInfoo.price}</h1>
              </div>
              <h1 className="text-xs">{productInfoo.description}</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-sm">Color</h1>
                <div className="flex gap-2">
                  {productInfoo.color.map((colr) => (
                    <div
                      className={`size-7 rounded-sm cursor-pointer  ${colr}`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-bold">Size</h1>
                <div className="flex gap-2">
                  {productInfoo.size.map((size) => (
                    <div
                      className={`size-7 text-sm justify-center rounded-sm cursor-pointer items-center flex outline ${
                        onSize == size ? "bg-black text-white" : ""
                      }`}
                      onClick={() => setOnSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          {/* ))} */}
          <div className=" flex justify-between">
            <div className="flex items-center rounded-lg px-3 gap-2 py-1 outline">
              <button className="cursor-pointer" onClick={decrement}>
                <FiMinus />
              </button>
              <p>{count}</p>
              <button className="cursor-pointer" onClick={increment}>
                <FiPlus />
              </button>
            </div>
            <Button
              text="Add to Cart"
              borderRadius="rounded-lg"
              textColor="text-white text-sm"
              BG="bg-[#131118]"
              padding="px-38 py-1"
            />
            <div className="outline py-1 px-3 flex rounded-lg items-center justify-center">
              <FiHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
