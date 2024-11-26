import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";

import insta from "./insta.png";
import playStore from "../Images/playstore.svg";
import appStore from "../Images/applestore.svg";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const postUser = async () => {
    try {
      const data = { email: userEmail, password: password };
      const res = await fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resut = await res.json();
      if (resut.success) {
        setShowError(true);
      }
      setTimeout(() => {
        setShowError(false);
      }, 10000);
    } catch {
      console.log("error");
    }
  };

  return (
    <section className=" w-[348px] flex flex-col justify-center gap-[10px] max-[650px]:gap-[8px] ">
      <section className="border-[#DBDBDB] border-solid border-[1px] pb-6 bg-[#ffff] max-[650px]:bg-transparent max-[650px]:border-none">
        <img
          src={insta}
          className="w-[175px] ml-[50%] translate-x-[-50%] mt-12 mb-9"
          alt=""
        />
        <button
          className=" hidden items-center text-[14px] w-[268px] ml-[50%] translate-x-[-50%] justify-center gap-[10px] font-roboto max-[650px]:flex bg-[#0195F7] py-[7px] px-[16px]
        text-[#FFFF] font-[600] rounded-lg cursor-pointer"
        >
          <FaFacebook size={20} />
          Continue Using Facebook
        </button>
        <div className="hidden items-center justify-center gap-[10px] my-4 max-[650px]:flex">
          <div className=" bg-[#E3E3E3] h-[1px] w-[32%]"></div>
          <span className="text-[#A8A8A8] font-bold text-[13px] font-roboto">
            OR
          </span>
          <div className="bg-[#E3E3E3]  w-[32%] h-[1px]"></div>
        </div>
        <div className=" w-max ml-[50%] translate-x-[-50%] flex flex-col gap-[6px]">
          <input
            className="outline-none  placeholder:text-[#999999] placeholder:text-[13px] font-roboto tracking-normal placeholder:font-[500] 
              border-[1px] w-[268px] relative border-[#DBDBDB] border-solid focus:border-[#A4A4A4] rounded-[2.5px] py-[4px] px-[8px] 
              max-[650px]:bg-[#F3F3F3]"
            type="text"
            placeholder="Phone number, username, or email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.currentTarget.value)}
          />

          <div
            className="border-[1px] w-[268px] relative border-[#DBDBDB] border-solid rounded-[2.5px] py-[4px] px-[8px] max-[650px]:bg-[#F3F3F3]
          "
          >
            <input
              className="outline-none border-none placeholder:text-[#999999] placeholder:text-[13px] font-roboto tracking-normal placeholder:font-[500] w-[82%]
              max-[650px]:bg-[#F3F3F3]"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            {password && (
              <span
                className="absolute right-[10px] font-roboto text-[14px] top-[6px] cursor-pointer hover:text-[#909090] text-[#323232]"
                onClick={() => setShowPassword((pre) => !pre)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            )}
          </div>

          {/* for mobile */}
          <div className=" text-[14px] text-end mb-1.5 mt-1 text-[#258ED2]">
            Forgotten your password?
          </div>
          <button
            className="bg-[#0095F6] text-[#FFFFFF] font-roboto text-[14px] font-[600] py-[7px] rounded-lg px-[16px] shadow-sm mt-2"
            disabled={!userEmail || !password}
            style={!userEmail || !password ? { opacity: ".9" } : {}}
            onClick={() => postUser()}
          >
            Log in
          </button>
        </div>
        <div className="flex items-center justify-center gap-[10px] my-4 max-[650px]:hidden">
          <div className=" bg-[#E3E3E3] h-[1px] w-[32%]"></div>
          <span className="text-[#A8A8A8] font-bold text-[13px] font-roboto">
            OR
          </span>
          <div className="bg-[#E3E3E3]  w-[32%] h-[1px]"></div>
        </div>
        <div className=" flex flex-col gap-[16px] justify-center">
          <div className=" flex items-center justify-center gap-[5px] max-[650px]:hidden">
            <FaFacebook color="#047AC9" />

            <span className="font-roboto text-[15px] cursor-pointer text-[#047AC9] font-[400] hover:text-[#3C5281]">
              Log in with Facebook
            </span>
          </div>
          {showError && (
            <div className="text-[13px] w-[80%] ml-[50%] translate-x-[-50%] text-[#FE414F] flex justify-center text-center max-[650px]:mt-4">
              Sorry, your password was incorrect. Please double-check your
              password.
            </div>
          )}
          <div className="font-roboto text-[15px] text-center font-[400] text-[#00376B] max-[650px]:hidden">
            Forgot password?
          </div>
        </div>
      </section>
      <section
        className="border-[#DBDBDB] border-solid border-[1px] font-roboto flex items-center py-4 justify-center gap-1 bg-[#ffff]
      
      
      max-[650px]:border-none max-[650px]:bg-transparent max-[650px]:py-0"
      >
        <h1 className="text-[#757575] font-roboto text-[16px] font-[500]">
          Don't have an account?
        </h1>
        <span className="text-[#0095F6] font-roboto cursor-pointer font-medium">
          Sign up
        </span>
      </section>
      <section className=" flex flex-col justify-center text-center mt-1 bg-[#fafafa] max-[650px]:hidden">
        <h3 className="text-[16px] font-[400] font-roboto">Get the app.</h3>
        <div className="flex justify-center gap-4 my-[12px]">
          <img src={appStore} alt="" className="w-[146px]" />
          <img src={playStore} alt="" className="w-[146px]" />
        </div>
      </section>
    </section>
  );
}

export default LogIn;
