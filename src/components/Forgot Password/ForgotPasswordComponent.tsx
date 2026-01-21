// import React from 'react'
import { Link } from "react-router-dom";
import IM from "../../assets/FgtImg.png";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../Shared/Button";

const ForgotPasswordComponent = () => {
  return (
    <div className=" h-full flex w-full ">
      <div className=" basis-[55%] h-screen w-full">
        <img className="object-fit" src={IM} />
      </div>
      {/* Form */}
      <div className=" basis-[45%] h-screen space-y-3 max-w-110 flex justify-center items-start pl-10 flex-col">
        <Link to="/login">
          <div className="flex items-center">
            <div>
              <IoIosArrowBack />
            </div>
            <h1>back</h1>
          </div>
        </Link>
        <h1 className="font-bold text-2xl">Forgot Password</h1>
        <h1 className="text-sm text-[#A4A1AA]">
          Enter your registered email address. We'll send you a code to reset
          your password
        </h1>
        <form className="flex space-y-5 flex-col">
          <div className="flex gap-1 flex-col">
            <label htmlFor="email" className="text-xs">
              Email Address
            </label>
            <input
              type="email"
              placeholder="robertfox@gmail.com"
              className=" border py-2 px-4 w-full rounded-sm border-[#131118]"
            />
          </div>
          <Link to="/otp">
            <Button
              text="Send OTP"
              BG="bg-[#131118]"
              textColor="text-white"
              borderRadius="rounded-sm"
              padding="py-2 px-20"
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
