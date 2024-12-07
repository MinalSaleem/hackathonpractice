import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Sign() {
  return (
    <div className="flex flex-row mt-[60px] mb-[162px] bg-white">
      <div className="w-full lg:flex mr-[135px] hidden">
        <Image
          src="/signup/phone.png"
          alt="phone pic"
          width={500}
          height={300}
          className="w-[805px] h-[781px]"
        />
      </div>

      <div className="w-full h:[600px] lg:h-[530px] py-[48px] lg:ml-0 ml-4">
        <div className="mb-12 w-[371px]">
          <h2 className="font-medium text-4xl mb-[30px]">Create an account</h2>
          <p className="mb-4 text-base">Enter your details below:</p>
        </div>

        <div className="w-[371px] h-[404px]">
          <form>
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-[370px] h-[72px] border-b-2 border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1  mb-[32px]"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-[370px] h-[72px] border-b-2 border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1 mb-[32px]"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-[370px] h-[72px] border-b-2 border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1"
              />
            </div>

            <button className="w-[371px] h-[56px] bg-[#DB4444] text-white font-medium text-[16px] px-4 mt-[40px] space-x-2 mb-[32px] rounded-md">
              Create Account
            </button>

            <button className="w-[371px] h-[56px] text-black font-medium text-[16px] border border-gray-400 rounded-md flex flex-row justify-center py-4">
              <FcGoogle size={24} className="mr-4" />
              Sign up with Google
            </button>

            <button className="w-[371px] h-[56px] text-gray-700 text-[16px] flex flex-row justify-center pt-6">
              Already have account?{" "}
              <Link href={"/login"}>
                <p className="text-gray-800 font-medium"> Login in</p>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
