import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { BiRightArrow } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="bg-black text-white divide-y divide-gray-600 lg:h-[440px] space-x-0  lg:space-x-5">
      <div className="flex flex-col lg:flex-row justify-between lg:justify-evenly py-8 lg:py-[80px] h-auto lg:h-[90%] px-5 lg:px-0">
        <div className="mb-10 lg:mb-0">
          <h3 className="lg:text-2xl text-xl font-bold pb-5">Exclusive</h3>
          <ul className="flex flex-col">
            <li className="lg:text-xl text-lg font-medium pb-5">Subscribe</li>
            <li className="text-[16px] pb-3">Get 10% off your first order</li>
            <div className="flex flex-row py-2 border border-white w-48 lg:w-[217px] h-[40px] lg:h-[48px] rounded-[4px] space-x-2 lg:space-x-10">
              <button className="text-start  pl-4 text-gray-500">
                Enter your email
              </button>
              <BiRightArrow size={28} className="" />
            </div>
          </ul>
        </div>

        <div className="mb-10 lg:mb-0">
          <h3 className="lg:text-xl text-lg font-medium pb-5">Support</h3>
          <ul className="flex flex-col gap-1 lg:gap-5 text-[16px]">
            <li>
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        <div className="mb-8 lg:mb-0  w-full lg:w-auto">
          <h3 className="lg:text-xl text-lg font-medium pb-5">Account</h3>
          <ul className="flex flex-col lg:gap-5 gap-1">
            <li>My Accout</li>
            <li>
              <Link href={"/login"}>Login / Register</Link>
            </li>
            <li>Cart</li>
            <li>
              <Link href={"/wishlist"}>Wishlist</Link>
            </li>
            <li>Shop</li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h3 className="lg:text-xl text-lg font-medium pb-5">Quick Link</h3>
          <ul className="flex flex-col gap-5">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="mb-10 lg:mb-0">
          <h3 className="lg:text-xl text-lg font-medium pb-5">Download App</h3>
          <p className="py-3 text-gray-400">Save $3 with App New User Only</p>
          <div className="flex flex-row space-y-3 lg:space-y-0">
            <div>
              <Image
                src="/footer/qrcode.png"
                alt="gamepad"
                width={76}
                height={76}
                className="flex items-center justify-center  w-[80px] h-[80px]"
              />
            </div>
            <div className="flex flex-col justify-between lg:ml-4 ml-3">
              <Image
                src="/footer/googleplay.png"
                alt="gamepad"
                width={100}
                height={30}
                className="flex items-center justify-center w-[110px] h-[35px]"
              />
              <Image
                src="/footer/appstore.png"
                alt="gamepad"
                width={100}
                height={30}
                className="flex items-center justify-center w-[110px] h-[35px]"
              />
            </div>
          </div>
          <div className="flex lg:justify-between pt-3 mt-5 lg:space-x-0 space-x-5">
            <BiLogoFacebook size={28} />
            <FiTwitter size={28} />
            <FaInstagram size={28} />
            <Link
              href="https://www.linkedin.com/in/minalsaleem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinLine size={28} />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-row lg:items-center lg:justify-center justify-start py-3 text-gray-600 bg-black h-auto lg:h-[40px]">
        <FaRegCopyright />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
}
