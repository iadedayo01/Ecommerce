// import React from 'react'

import FilterComponent from "../components/Product Listing/FilterComponent";
import ProductComponent from "../components/Product Listing/ProductComponent";
import CompanyInfo from "../Shared/CompanyInfo";

const ProductList = () => {
  return (
    <>
      <div className="flex flex-col px-25">
        <div className="flex">
          <FilterComponent />
          <ProductComponent />
        </div>
      </div>
      <div>
        <CompanyInfo />
      </div>
    </>
  );
};

export default ProductList;
