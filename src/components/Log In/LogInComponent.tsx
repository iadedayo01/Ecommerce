// import React from 'react'
import PI from "../../assets/Rectangle.png";
import PI2 from "../../assets/Logo.png";
import Button from "../../Shared/Button";
import { PiHandWavingFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const LogInComponent = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log(username);
    console.log(password);

    if (username === "" || password === "") {
      toast.error("Please fill all the fields");
    }

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      console.log("response:", response.data);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("UserID", response.data.id);
      toast.success("Login Successful");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message || "Login Failed");
    }
  };
  return (
    <div className=" relative dark:bg-[#FFFFFF] flex h-full w-full">
      {/* login banner image */}
      <div className=" h-screen basis-1/2 w-full">
        <img src={PI} className=" h-full w-full object-cover" />
        <Link to="/">
          <div className="absolute top-15 left-15">
            <img src={PI2} />
          </div>
        </Link>
      </div>
      {/* form */}
      <div className=" basis-1/2 flex flex-col px-20 items-start justify-center w-full h-full ">
        <div className=" flex flex-col gap-3 w-full">
          <div className="flex justify-between">
            <div className=" flex flex-col">
              <div className=" items-center gap-2 flex">
                <h1 className="font-bold ">Welcome </h1>
                <div>
                  <PiHandWavingFill className="text-green-600" />
                </div>
              </div>
              <div>
                <span className="text-[#A4A1AA] text-sm font-normal size-4">
                  Please login here
                </span>
              </div>
            </div>
            <div className="flex items-end flex-col">
              <span className="text-sm">Don't have an account? </span>
              <Link to="/signup" className="text-blue-300">
                SignUp
              </Link>
            </div>
          </div>
          {/* form input */}
          <form className=" flex flex-col w-full gap-3">
            <div className="flex w-full flex-col">
              <label className=" font-normal  text-[#131118]" htmlFor="email">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="robertfox@gmail.com"
                className=" border py-2 px-4 w-full border-[#131118] rounded-sm"
              />
            </div>
            <div className="flex flex-col">
              <label
                className=" font-normal  text-[#131118]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*********"
                className=" border py-2 px-4 border-[#131118] rounded-sm"
              />
            </div>
            <div className=" mt-4 mb-5 justify-between flex">
              <div className="flex gap-2.5">
                <input type="checkbox" className="size-6 bg-black" />
                <h4>Remember Me</h4>
              </div>
              <div>
                <a href="/forgot_password" className="text[#131118]">
                  Forgot Password?
                </a>
              </div>
            </div>
            <Button
              text="Login"
              BG="bg-[#131118]"
              textColor="text-white"
              borderRadius="rounded-sm"
              padding="p-[20px]"
              onclick={handleLogin}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
