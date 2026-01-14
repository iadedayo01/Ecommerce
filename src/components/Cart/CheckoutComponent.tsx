// import React from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";
import IM1 from "../../assets/image1.png";
import IM2 from "../../assets/image2.png";
import IM3 from "../../assets/image4.png";
import { useState } from "react";

import type { ReactElement } from "react";
import { FaTrash } from "react-icons/fa";

interface tableBodyProps {
  id: number;
  image: string;
  description: string;
  size: string;
  price: string;
  subtotal: string;
  icon: ReactElement;
  addIcon: ReactElement;
  subIcon: ReactElement;
}

const CheckoutComponent = () => {

// const [currentIndex, setCurrentIndex] = useState<null | number>(null)

  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const tableHeader = ["Products", "Price", "Quantity", "Subtotal"];

  const tableBody: tableBodyProps[] = [
    {
      id: 1,
      image: IM1,
      description: "Girls Pink Moana Printed Dress",
      size: "Size: S",
      price: "$80.00",
      subtotal: "$80.00",
      icon: <FaTrash />,
      addIcon: <FiPlus />,
      subIcon: <FiMinus />,
    },
    {
      id: 2,
      image: IM2,
      description: "Women Textured Handheld Bag",
      size: "Size: M",
      price: "$80.00",
      subtotal: "$80.00",
      icon: <FaTrash />,
      addIcon: <FiPlus />,
      subIcon: <FiMinus />,
    },
    {
      id: 3,
      image: IM3,
      description: "Tailored Cotton Casual T-Shirt",
      size: "Size: L",
      price: "$40.00",
      subtotal: "$40.00",
      icon: <FaTrash />,
      addIcon: <FiPlus />,
      subIcon: <FiMinus />,
    },
  ];
  return (
    <>
      <div className="w-full basis-3/4">
        <table>
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <td
                  key={index}
                  className="py-4 px-6 text-lg border-b border-gray-300"
                >
                  {header}
                </td>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableBody.map((body, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-gray-50 transition-colors text-xs "
              >
                <td className="py-8 flex px-6">
                  <div className="flex justify-center items-center gap-3">
                    <div className="size-20">
                      <img src={body.image} />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg font-bold">{body.description}</h1>
                      <h1 className="text-lg">{body.size}</h1>
                    </div>
                  </div>
                </td>
                <td className="py-8 px-6">
                  <h1 className="text-lg">{body.price}</h1>
                </td>
                <td className="py-8 px-6">
                  <div className="flex items-center rounded-lg px-3 gap-2 py-1 outline">
                    <button className="cursor-pointer" onClick={decrement}>
                      {body.subIcon}
                    </button>
                    <p className="text-lg">{count}</p>
                    <button className="cursor-pointer" onClick={increment}>
                      {body.addIcon}
                    </button>
                  </div>
                </td>
                <td className="py-8 px-6">
                  <h1 className="text-lg">{body.subtotal}</h1>
                </td>
                <td className="py-8 px-6">{body.icon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ;
    </>
  );
};

export default CheckoutComponent;
