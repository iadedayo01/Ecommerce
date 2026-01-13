// import React from 'react'

import type { ReactElement } from "react";
import { MdOutlineHeadset, MdPayment } from "react-icons/md";
import { PiShippingContainerLight } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

interface detailsProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const CompanyInfo = () => {
  const details: detailsProps[] = [
    {
      icon: <PiShippingContainerLight />,
      title: "Free Shipping",
      description: "Free shipping for orders above $150",
    },
    {
      icon: <RiMoneyDollarCircleLine />,
      title: "Money Guarantee",
      description: "Within 30 days for an exchange",
    },
    {
      icon: <MdOutlineHeadset />,
      title: "Online Support",
      description: "24 hours a day, 7 days a week",
    },
    {
      icon: <MdPayment />,
      title: "Flexible Payment",
      description: "Pay with multiple credit cards",
    },
  ];

  return (
    <div className="grid gap-5 grid-cols-4 pb-10 px-25">
      {details.map((info) => (
        <div className=" px-7">
            <div className="text-2xl">{info.icon}</div>
            <h1 className="text-sm font-semibold">{info.title}</h1>
            <h1 className="text-xs">{info.description}</h1>
        </div>
      ))}
    </div>
  );
};

export default CompanyInfo;
