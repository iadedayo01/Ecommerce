// import React from 'react'
import { Link } from "react-router-dom";
import IM from "../../assets/OTPImg.png";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../Shared/Button";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OtpComponent = ({ setOpenModal }: ModalProps) => {
  return (
    <div className="h-full w-full flex">
      <div className=" h-screen w-full basis-1/2">
        <img className=" h-full w-full object-cover" src={IM} alt="Image" />
      </div>
      <div className=" h-screen w-full basis-1/2 max-w-110 justify-center items-start pl-10 space-y-3 flex flex-col">
        <Link to="/forgot_password">
          <div className=" flex items-center">
            <div>
              <IoIosArrowBack />
            </div>
            <h1>back</h1>
          </div>
        </Link>
        <h1 className="font-bold text-2xl">Enter OTP</h1>
        <h1 className="text-sm text-[#A4A1AA]">
          We have sent a code to your registered email address
          robertfox@gmail.com
        </h1>
        <form className="flex space-y-4 flex-col">
          <div className="flex gap-2">
            <input
              type="text"
              className="border text-center size-8 rounded-lg"
            />
            <input
              type="text"
              className="border text-center size-8 rounded-lg"
            />
            <input
              type="text"
              className="border text-center size-8 rounded-lg"
            />
            <input
              type="text"
              className="border text-center size-8 rounded-lg"
            />
            <input
              type="text"
              className="border text-center size-8 rounded-lg"
            />
          </div>
          <Button
            text="Verify"
            BG="bg-[#131118]"
            textColor="text-white"
            borderRadius="rounded-sm"
            padding="py-2 px-4"
            onclick={() => setOpenModal(true)}
          />
        </form>
      </div>
    </div>
  );
};

export default OtpComponent;
