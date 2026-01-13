// import React from 'react'
import PI from "../../assets/Rectangle2.png";
import PI2 from "../../assets/Logo.png";
import Button from "../../Shared/Button";
import { Link } from "react-router-dom";

const SignUpComponent = () => {
  return (
    <div
      className=" flex relative md:bg-[#FFFFFF] h-full w-full"
      style={{
        backgroundImage: `url(${PI})`, backgroundPosition: "center", backgroundSize: "cover7"
      }}
    >
      <div className=" bg-black opacity-60 md:opacity-0 md:bg-none absolute h-screen w-full"></div>
      {/* signup banner image */}
      <div className="h-full w-full basis-1/2 hidden md:block">
        <img src={PI} className="object-cover h-full w-full" />
        <div className="absolute top-10 left-10">
          <img src={PI2} />
        </div>
      </div>
      {/* form */}
      <div className="md:basis-1/2 flex flex-col px-20 md:h-full w-full items-center justify-center bg-white opacity-80 md:bg-none shadow-2xl">
        <div className=" w-full gap-3 flex flex-col">
          <div className="flex justify-between">
            <div className="gap-2">
              <div>
                <h1 className="font-bold">Create New Account</h1>
              </div>
              <div>
                <span className="text-[#A4A1AA] text-sm font-normal">
                  Please enter details
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm">Already Have an Account?</span>
              <Link to="/login" className="text-blue-300">
                Log In
              </Link>
            </div>
          </div>
          {/* form input */}
          <form className="flex flex-col gap-2">
            <div>
              <label
                htmlFor="firstName"
                className="font-normal text-sm text-[#131118]"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="Robert"
                className="w-full border py-2 px-4 rounded-sm border-[#131118]"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="font-normal text-sm text-[#131118]"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Fox"
                className="w-full border py-2 px-4 rounded-sm border-[#131118]"
              />
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="font-normal text-sm text-[#131118]"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="robertfox@gmail.com"
                className="w-full border py-2 px-4 rounded-sm border-[#131118]"
              />
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="font-normal text-sm text-[#131118]"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="**********"
                className="w-full border py-2 px-4 rounded-sm border-[#131118]"
              />
            </div>
            <div className="mt-3 mb-3 gap-2 flex">
              <input type="checkbox" className="size-6" />
              <p className="text-sm">
                I agree to the
                <span className="font-bold"> Terms & Conditions</span>
              </p>
            </div>
            <Button
              text="SignUp"
              BG="bg-[#131118]"
              textColor="text-white"
              borderRadius="rounded-sm"
              padding="p-[20px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
