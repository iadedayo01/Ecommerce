// import React from 'react'

import { useState } from "react";
import ProductInfo from "../components/Product Details/ProductInfo";
import ProductDescription from "../components/Product Details/ProductDescription";
import ProductAddition from "../components/Product Details/ProductAddition";
import ProductReviews from "../components/Product Details/ProductReviews";
import SharedProducts from "../Shared/SharedProducts";
import CompanyInfo from "../Shared/CompanyInfo";



const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      <div className="px-25 py-9">
        <ProductInfo />
        <div className="flex border-b border-gray-300 gap-6">
          <h1
            className={` text-sm cursor-pointer ${
              activeTab == "description" && "border-b-2 border-black"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Descriptions
          </h1>
          <h1
            className={` text-sm cursor-pointer ${
              activeTab == "addition" && "border-b-2 border-black"
            }`}
            onClick={() => setActiveTab("addition")}
          >
            Additional Information
          </h1>
          <h1
            className={` text-sm cursor-pointer ${
              activeTab == "review" && "border-b-2 border-black"
            }`}
            onClick={() => setActiveTab("review")}
          >
            Reviews
          </h1>
        </div>

        {activeTab == "description" && <ProductDescription />}
        {activeTab == "addition" && <ProductAddition />}
        {activeTab == "review" && <ProductReviews />}

        <SharedProducts />
      </div>
      <CompanyInfo />
    </>
  );
};

export default ProductDetails;
