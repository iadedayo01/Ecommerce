import IMG1 from "../../assets/image1.png";
import IMG2 from "../../assets/image2.png";
import IMG3 from "../../assets/image5.png";
import IMG4 from "../../assets/image4.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CatProps {
  image: string;
  text: string;
}

const CategoryComponent = () => {
  const categoryWears: CatProps[] = [
    { image: IMG1, text: "Casual Wear" },
    { image: IMG2, text: "Western Wear" },
    { image: IMG3, text: "Ethnic Wear" },
    { image: IMG4, text: "Kids Wear" },
  ];
  return (
    <div className="px-25 mt-15 flex flex-col">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl tracking-tighter">Shop by Categories</h1>
        </div>
        <div className="flex gap-2">
          <div className="size-8 bg-gray-300 items-center justify-center flex border rounded-sm">
            <FaArrowLeft />
          </div>
          <div className="size-8 bg-black items-center text-white justify-center flex border rounded-sm">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-8 gap-5 ">
        {categoryWears.map((cat) => (
          <div className="relative">
            <img src={cat.image} className="py-6"/>
            <div className="bg-white rounded-sm py-3 left-12 px-8 absolute bottom-16">{cat.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
