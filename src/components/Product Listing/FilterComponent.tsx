// import React from 'react'

import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FilterComponent = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openSizes, setOpenSizes] = useState(false);

  const categories = [
    "Men",
    "Women",
    "Kids",
    "Bags",
    "Belts",
    "Wallets",
    "Watches",
    "Accessories",
    "Winter Wears",
  ];

  const colors = [
    { name: "Red", color: "bg-red-400", value: "10" },
    { name: "Blue", color: "bg-blue-500", value: "14" },
    { name: "Orange", color: "bg-orange-400", value: "8" },
    { name: "Black", color: "bg-black", value: "9" },
    { name: "Green", color: "bg-green-300", value: "4" },
    { name: "Yellow", color: "bg-yellow-400", value: "2" },
  ];

  const sizes = [
    { name: "S", value: "6" },
    { name: "M", value: "20" },
    { name: "L", value: "7" },
    { name: "XL", value: "16" },
    { name: "XXL", value: "10" },
    { name: "XXXL", value: "2" },
  ];

  return (
    <>
      <div className="flex px-10 py-5 h-full b flex-col">
        <div className="py-3">
          <p className="text-xs">Shop &gt; All products</p>
        </div>
        <div className="flex gap-5 w-full flex-col">
          {/*Category Filter*/}
          <div className="w-full flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-sm">Product Categories</h1>
              <div
                className="text-xl"
                onClick={() => setOpenCategory((prev) => !prev)}
              >
                {openCategory === true ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </div>
            </div>
            {/* */}
            {openCategory && (
              <div>
                {categories.map((Category) => (
                  <div className="flex items-center justify-between">
                    <div className="flex space-y-2 gap-1">
                      <input type="checkbox" />
                      <h1 className="text-xs">{Category}</h1>
                    </div>
                    <div>
                      <GoPlus />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Price Filter */}
          <div className="flex gap-2 flex-col">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-sm">Filter by Price</h1>
              <div
                className="text-xl"
                onClick={() => setOpenPrice((prev) => !prev)}
              >
                {openPrice === true ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </div>
            </div>
            {/*  */}
            {openPrice && (
              <div className="flex space-y-2 flex-col">
                <h1 className="text-xs">Price: $0 - $2000</h1>
                <input className="text-black" type="range" />
              </div>
            )}
          </div>
          {/* Color Filter */}
          <div className="flex gap-2 flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-bold">Filter by Color</h1>
              <div
                className="text-xl"
                onClick={() => setOpenColors((prev) => !prev)}
              >
                {openColors === true ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </div>
            </div>
            {/*  */}
            {openColors && (
              <div>
                {colors.map((color) => (
                  <div className="flex space-y-2 justify-between">
                    <div className="flex space-x-1 gap-2">
                      <div className={`size-4 ${color.color}`}></div>
                      <div>
                        <h1 className="text-xs">{color.name}</h1>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xs">({color.value})</h1>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Sizes Filter */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-bold">Filter by Sizes</h1>
              <div
                className="text-xl"
                onClick={() => setOpenSizes((prev) => !prev)}
              >
                {openSizes === true ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </div>
            </div>
            {/*  */}
            {openSizes && (
              <div>
                {sizes.map((size) => (
                  <div className="flex justify-between items-center">
                    <div className="flex flex-row space-y-2 gap-1">
                      <input type="checkbox"/>
                      <h1 className="text-xs">{size.name}</h1>
                    </div>
                    <div>
                      <h1 className="text-xs">({size.value})</h1>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
