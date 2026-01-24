// import React from 'react'
import { FiMinus, FiPlus } from "react-icons/fi";

import { useEffect, useState } from "react";

import { GoTrash } from "react-icons/go";
import axios from "axios";

interface tableBodyProps {
  id: number;
  thumbnail: string;
  quantity: number;
  title: string;
  size: string;
  price: string;
  total: string;
}

const CheckoutComponent = () => {
  const [cart, setCart] = useState<tableBodyProps[]>([]);

  const userID = localStorage.getItem("UserID");
  console.log(userID);

  const fetchCart = async () => {
    const response = await axios.get(`https://dummyjson.com/carts`);
    console.log(response);

    try {
      if (response.status === 200) {
        setCart(response.data.carts[0].products);
      }
    } catch (error: any) {
      console.error("Error fetching carts:", error);
    }
  };

  console.log(cart);

  useEffect(() => {
    fetchCart();
  }, []);

  // const [currentIndex, setCurrentIndex] = useState<null | number>(null)

  const [_, setCount] = useState<number>(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const tableHeader = ["Products", "Price", "Quantity", "Subtotal"];

  return (
    <>
      <div className="w-full basis-3/4">
        <table>
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <td
                  key={index}
                  className="py-2 px-4 text-lg border-b border-gray-300"
                >
                  {header}
                </td>
              ))}
            </tr>
          </thead>

          <tbody>
            {cart.map((body, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-gray-50 transition-colors text-xs "
              >
                <td className="py-2 flex px-4">
                  <div className="flex justify-center items-center gap-3">
                    <div className="size-20">
                      <img src={body.thumbnail} />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-lg font-bold">{body.title}</h1>
                      <h1 className="text-lg">{body.size}</h1>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <h1 className="text-lg">{body.price}</h1>
                </td>
                <td className="py-2 px-4">
                  <div className="flex items-center rounded-lg px-3 gap-2 py-1 outline">
                    <button
                      key={body.id}
                      className="cursor-pointer"
                      onClick={decrement}
                    >
                      <FiMinus />
                    </button>
                    <p className="text-lg">{body.quantity}</p>
                    <button className="cursor-pointer" onClick={increment}>
                      <FiPlus />
                    </button>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <h1 className="text-lg">{body.total}</h1>
                </td>
                <td className="py-2 text-lg text-red-400 px-4">
                  <GoTrash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CheckoutComponent;
