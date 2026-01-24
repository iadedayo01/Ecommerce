// import React from 'react'
import IM from "../../assets/port1.webp";
import { FaEdit } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import Button from "../../Shared/Button";

const ProfileComponent = () => {
  return (
    <div className="p-5 flex flex-col ">
      <div className="flex justify-between">
        <div className="size-16 relative rounded-full">
          <img className=" h-full w-full rounded-full" src={IM} />
          <div className="absolute size-6 rounded-sm flex items-center justify-center bg-black bottom-1 right-1">
            <LiaEditSolid className="text-white"/>
          </div>
        </div>
        <Button
          text="Edit Profile"
          BG="bg-[#131118]"
          textColor="text-white"
          borderRadius="rounded-sm"
          padding=" px-5"
          icon={<FaEdit />}
        />
      </div>
    </div>
  );
};

export default ProfileComponent;
