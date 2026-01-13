// import React from 'react'
import { Link } from "react-router-dom";
import IMG1 from "../../assets/image2.png";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

interface storyProps {
  image: string;
}

const InstagramStoryComponent = () => {
  const [activeState, setActiveState] = useState<number | null>(null);

  const story: storyProps[] = [
    {
      image: IMG1,
    },
    {
      image: IMG1,
    },
    {
      image: IMG1,
    },
    {
      image: IMG1,
    },
  ];

  console.log(activeState)
  return (
    <div className="px-25 pb-15 pt-25 mt-10 flex flex-col bg-white">
      <div className="flex justify-center">
        <h1 className="text-3xl">Our Instagram Stories</h1>
      </div>
      <div className="grid grid-cols-4 mt-10 gap-5">
        {story.map((insta, index) => (
          <div className="relative" onMouseEnter={() => setActiveState(index)}
          onMouseLeave={()=> setActiveState(null)}
          >
            <Link to={"https://instagram.com"} target="blank">
              <img src={insta.image} />
            </Link>
            {activeState == index && (
              <div className="border rounded-full size-8 flex items-center justify-center bg-white absolute bottom-9 left-25">
                <FaInstagram />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramStoryComponent;
