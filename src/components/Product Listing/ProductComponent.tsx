// import React from 'react'
// import IM from "../../assets/image1.png";
// import IM2 from "../../assets/image2.png";
// import IM3 from "../../assets/image4.png";
import { RiListRadio } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export interface productProps {
  images: string;
  title: string;
  description: string;
  details: string;
  discountedPrice: string;
  // icon: ReactElement;
  color: string[];
  size: string[];
  price: string;
  id: number;
}

const ProductComponent = () => {
  const [onPage, setOnPage] = useState<null | number>(null);
  const [productss, setProductss] = useState<productProps[]>([]);

  const pageNumber = [1, 2, 3, 4, 5];

  // https://dummyjson.com/products

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response);
      setProductss(response.data.products)
      console.log("products:", productss)
    } catch (error) {}
  };

  useEffect(() => {
    fetchProducts();
  }, []);


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
        {productss.map((info) => (
          <Link to={`/product-details/${info.id}`} state={{ info }}>
            <div>
              <img src={info.images} />
              <h1 className="text-sm font-bold">{info.title}</h1>
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
