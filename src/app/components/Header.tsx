"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="top-0 right-0 left-0">
      <div className="bg-black text-white h-[48px] flex lg:flex-row flex-col justify-center pt-3">
        <div className="flex flex-row justify-center py-auto space-x-4">
          <div>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div>Shop Now</div>
        </div>

        <div className="pl-72 lg:flex flex-row justify-center hidden">
          <p>English</p>
          <IoIosArrowDown size={28} className="py-1" />
        </div>
      </div>

      <div className="bg-white lg:h-[94px] h-[115px] w-full left-0 right-0 border border-slate-300">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex lg:px-0">
          <div className="flex items-center justify-between py-3 md:py-5 md:block lg:mt-[16px]">
            <h2 className="text-[24px] text-black font-bold ">Exclusive</h2>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <IoClose />
                ) : (
                  <RxHamburgerMenu className="focus:border-none active:border-none" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 lg:mt-[16px] ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-4 md:border-b-0 border-black">
                <Link href={"/"} onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-4 md:border-b-0 border-black">
                <Link href={"/contact"} onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>
              <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-4 md:border-b-0 border-black">
                <Link href={"/about"} onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
              <li className="pb-6 text-xl text-black py-2 px-6 text-center border-b-4 md:border-b-0 border-black">
                <Link href={"/signup"} onClick={() => setNavbar(!navbar)}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row space-x-6 lg:mt-[16px]">
            <div className="flex flex-row w-[243px] h-[38px] bg-slate-200 space-x-7">
              <input
                type="text"
                placeholder="What are you looking for"
                className="w-3/4 bg-slate-200 pl-2"
              />
              <IoSearchSharp size={22} className="my-2" />
            </div>

            <div className="flex flex-row space-x-5">
              <Link href={"/wishlist"}>
                <Image
                  src="/Wishlist.png"
                  alt="gamepad"
                  width={40}
                  height={28}
                  className="flex items-center justify-center lg:h-[40px]"
                />
              </Link>
              <Link href={"/cart"}>
                <Image
                  src="/buy.png"
                  alt="cart"
                  width={40}
                  height={28}
                  className="flex items-center justify-center lg:h-[40px]"
                />
              </Link>
              <Link href={"/account"}>
                <Image
                  src="/user.png"
                  alt="account"
                  width={40}
                  height={28}
                  className="flex items-center justify-center lg:h-[40px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
