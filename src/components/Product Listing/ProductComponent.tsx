// import React from 'react'
// import IM from "../../assets/image1.png";
// import IM2 from "../../assets/image2.png";
// import IM3 from "../../assets/image4.png";
import { RiListRadio } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface productProps {
  image: string;
  name: string;
  description: string;
  details: string;
  discountedPrice: string;
  // icon: ReactElement;
  color: string[];
  size: string[];
  price: string;
  id: number
}

const ProductComponent = () => {
  const [onPage, setOnPage] = useState<number>(1);

  const pageNumber = [1, 2, 3, 4, 5];

  const products: productProps[] = [
    {
      id:1,
      image: "../../assets/image1.png",
      name: "Calvin Klein",
      description: "Unisex Patterned Sweatshirt",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
      color: [
        "bg-red-500",
        "bg-blue-500",
        "bg-orange-400",
        "bg-black",
        "bg-green-600",
        "bg-yellow-300",
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      price: "$150",
    },
    {
      image: "../../assets/image2.png",
      id: 2,
      name: "Calvin Klein",
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image4.png",
      id: 3,
      name: "Calvin Klein",
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image2.png",
      name: "Calvin Klein",
      id: 4,
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image4.png",
      id: 5,
      name: "Calvin Klein",
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image1.png",
      name: "Calvin Klein",
      id: 6,
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image4.png",
      name: "Calvin Klein",
      id: 7,
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image1.png",
      id: 8,
      name: "Calvin Klein",
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image2.png",
      id: 9,
      name: "Calvin Klein",
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image1.png",
      id: 10,
      name: "Calvin Klein",
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image2.png",
      name: "Calvin Klein",
      id: 11,
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image4.png",
      name: "Calvin Klein",
      id: 12,
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image2.png",
      id: 13,
      name: "Calvin Klein",
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      image: "../../assets/image1.png",
      id: 14,
      name: "Calvin Klein",
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    {
      id: 15,
      image: "../../assets/image4.png",
      name: "Calvin Klein",
      description: "Unisex Patterned Sweatshirt",
      price: "$150",
      details: "One Life Graphic T-Shirt",
      discountedPrice: "$80.00",

      // icon: <FaStar className="text-yellow-500" />,
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
    <div className="px-10 flex-1 py-18">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <CgMenuGridR />
          <RiListRadio />
          <p className="text-xs">Showing 1-16 of 72 results</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-xs">Show by latest</p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 py-5 grid-rows-5">
        {products.map((info) => (
            <Link 
             to={`/product-details/${info.id}`} 
              state={{info}}>
            <div>
              <img src={info.image} />
              <h1 className="text-sm font-bold">{info.name}</h1>
              <h1 className="text-xs">{info.description}</h1>
              <h1 className="text-xs">{info.price}</h1>
          </div>
            </Link>
        ))}
      </div>
      <div className="flex gap-3 items-center justify-end">
        <FaArrowLeftLong className="cursor-pointer" />
        {pageNumber.map((number) => (
          <div
            className={`size-8 rounded-sm flex cursor-pointer justify-center border ${
              onPage == number ? "bg-black text-white" : ""
            }`}
            onClick={() => setOnPage(number)}
          >
            {number}
          </div>
        ))}
        <FaArrowRightLong className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ProductComponent;
