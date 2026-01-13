// import React from 'react'

import BestSellerComponent from "../components/Home Page/BestSellerComponent";
import CategoryComponent from "../components/Home Page/CategoryComponent";
import CustomerComponent from "../components/Home Page/CustomerComponent";
import DealsComponent from "../components/Home Page/DealsComponent";
import HeroComponent from "../components/Home Page/HeroComponent";
import InstagramStoryComponent from "../components/Home Page/InstagramStoryComponent";
import CompanyInfo from "../Shared/CompanyInfo";

const HomePage = () => {
  return (
    <div className="px-5">
      <HeroComponent />
      <CategoryComponent />
      <BestSellerComponent />
      <DealsComponent />
      <CustomerComponent />
      <InstagramStoryComponent />
      <CompanyInfo />
    </div>
  );
};

export default HomePage;
