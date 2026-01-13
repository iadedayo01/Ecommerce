// import React from 'react'

import type { ReactElement } from "react";
import { IoIosArrowDown } from "react-icons/io";


interface filterProps {
  name: string;
  icon: ReactElement;
}

const FilterComponent = () => {
  const filter: filterProps[] = [
    { name: "Product Categories", icon: <IoIosArrowDown /> },
    { name: "Filter by Price", icon: <IoIosArrowDown /> },
    { name: "Filter by Color", icon: <IoIosArrowDown /> },
    { name: "Filter by Size", icon: <IoIosArrowDown /> },
  ];
  return (
    <div className="flex px-10 py-5 flex-col">
      <div className="py-3">
        <p className="text-xs">Shop &gt; All products</p>
      </div>
      <div>
        {filter.map((info) => (
          <div className="flex text-sm justify-between py-3 border-b border-gray-300 items-center">
            <div className="font-semibold">{info.name}</div>
            <div>{info.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
