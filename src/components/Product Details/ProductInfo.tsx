// import React from 'react'
import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa6";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import Button from "../../Shared/Button";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import type { productProps } from "../Product Listing/ProductComponent";

// import prod1 from "../../assets/Product1.png";
// import prod2 from "../../assets/Product2.png";
// import prod3 from "../../assets/Product3.png";
// import prod4 from "../../assets/Product4.png";

interface ProductInfoProps {
  id: number;
  images: string;
  brand: string;
  title: string;
  rating: string;
  price: string;
  discountPercentage: string;
  description: string;
  color: string[];
  size: string[];
}

// interface LocationState{
//   productInfoProps: ProductInfoProps
// }

const ProductInfo = () => {
  // const [onSize, setOnSize] = useState<string>("S");

  const [count, setCount] = useState<number>(1);

  const [product, setProduct] = useState<ProductInfoProps | null>();

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const location = useLocation();
  const id = location.state.id as ProductInfoProps;

  // console.log(product,"product details")
  // console.log(product, "jhgf");

  const fetchSingleProduct = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(response);

    try {
      // if (response.status === 304) {
      setProduct(response.data);
      console.log(product);
      // }
    } catch (error: any) {
      console.error("Error fetching products:", error);
    }
  };

  console.log(product);

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-xs">
          Home &gt; Shop &gt; Women Textured Handheld Bag
        </h1>
      </div>
      <div className="flex">
        <div className="w-full basis-1/2">
          <div className="size-80 outline">
            <img src={product?.images} />
          </div>
        </div>
        <div className="w-full basis-1/2 gap-8 flex flex-col">
          {/* {productInfoo.map((info) => ( */}
          <div className="space-y-2">
            <h1 className="text-xl font-bold">{product?.brand}</h1>
            <h1 className="text-sm">{product?.title}</h1>
            <div className="flex">{product?.rating}</div>
            <div className="flex gap-3 text-sm">
              <h1>{product?.discountPercentage}</h1>
              <h1 className="text-gray-400 line-through">{product?.price}</h1>
            </div>
            <h1 className="text-xs">{product?.description}</h1>
            <div className="flex flex-col">
              <h1 className="font-bold text-sm">Color</h1>
            </div>
            <div className="flex flex-col"></div>
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
