// import React from 'react'
import IM1 from "../assets/image1.png";
import IM2 from "../assets/image2.png";
import IM3 from "../assets/image4.png";
import IM4 from "../assets/image5.png";

interface relatedProductsProps {
  image: string;
  name: string;
  details: string;
  discountedPrice: string;
  price: string;
}

const SharedProducts = () => {
  const relatedProducts: relatedProductsProps[] = [
    {
      image: IM1,
      name: "Gucci",
      details: "Patterned Shirt for Men ",
      discountedPrice: "$40.00",
      price: "$50.00",
    },
    {
      image: IM2,
      name: "Versace",
      details: "Unisex Patterned T-Shirt",
      discountedPrice: "$60.00",
      price: "$50.00",
    },
    {
      image: IM3,
      name: "Roca Wears",
      details: "Plain Unisex T-Shirt",
      discountedPrice: "$40.00",
      price: "$20.00",
    },
    {
      image: IM4,
      name: "Balenciaga",
      details: "Jean Short for Men",
      discountedPrice: "$80.00",
      price: "$60.00",
    },
  ];
  return (
    <div className="pt-15 flex flex-col">
      <div>
        <h1 className="text-3xl">Related Products</h1>
      </div>
      <div className="grid py-10 grid-cols-4 gap-5">
        {relatedProducts.map((product) => (
          <div>
            <img src={product.image} />
            <h1 className="text-sm pt-4 font-bold">{product.name}</h1>
            <h1 className="text-sm">{product.details}</h1>
            <div className="flex text-sm gap-2">
              <h1>{product.discountedPrice}</h1>
              <h1 className="text-gray-400 line-through">{product.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedProducts;
