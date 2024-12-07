import React from "react";
import Image from "next/image";
import Products from "../components/Product";
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";

export default function Detail() {
  return (
    <div>
      <div className="flex flex-row space-x-3 ml-5 lg:ml-[135px] py-14">
        <p className="text-gray-500">Account / Gaming / </p>
        <p>Havic HV G-92 Gamepad</p>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="flex flex-row lg:flex-col lg:space-x-0 space-x-3 lg:space-y-4 ml-8 lg:ml-[135px]">
            <Image
              src="/detail/detail1.png"
              alt="gamepad"
              width={200}
              height={200}
              className="w-[80px] h-[80px] lg:w-[170px] lg:h-[138px] bg-[#F5F5F5] flex items-center justify-center"
            />
            <Image
              src="/detail/detail2.png"
              alt="gamepad"
              width={200}
              height={200}
              className="w-[80px] h-[80px] lg:w-[170px] lg:h-[138px] bg-[#F5F5F5] flex items-center justify-center"
            />
            <Image
              src="/detail/detail3.png"
              alt="gamepad"
              width={200}
              height={200}
              className="w-[80px] h-[80px] lg:w-[170px] lg:h-[138px] bg-[#F5F5F5] flex items-center justify-center"
            />
            <Image
              src="/detail/detail4.png"
              alt="gamepad"
              width={200}
              height={200}
              className="w-[80px] h-[80px] lg:w-[170px] lg:h-[138px] bg-[#F5F5F5] flex items-center justify-center"
            />
          </div>

          <div className="w-[350px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[#F5F5F5] flex items-center justify-center ml-10 lg:mb-0 mb-5">
            <Image
              src="/detail/detail5.png"
              alt="gamepad"
              width={400}
              height={300}
              className=""
            />
          </div>
        </div>

        <div className="w-auto lg:w-[500px] h-[600px] ml-8 lg:ml-14 divide-slate-300 divide-y-4">
          <div className="space-y-4 mb-4">
            <h1 className="text-[24px] font-semibold">Havic HV G-92 Gamepad</h1>
            <div className="flex flex-row space-x-2">
              <FaStar color="#FFAD33" size={20} />
              <FaStar color="#FFAD33" size={20} />
              <FaStar color="#FFAD33" size={20} />
              <FaStar color="#FFAD33" size={20} />
              <FaStar color="lightgray" size={20} />
              <p className="text-gray-500">(150 Reviews) | </p>
              <p className="text-[#00FF66]">In Stock</p>
            </div>

            <p className="text-[24px]">$192.00</p>
            <p className="tex-[14px]">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex flex-row space-x-3">
              <h1 className="text-[20px]">Colours:</h1>
              <FaCircle color="gray" size={20} />
              <FaCircle color="pink" size={20} />
            </div>

            <div className="flex flex-row space-x-4">
              <h1 className="text-[20px]">Size:</h1>
              <div className="w-[32px] h-[32px] border-[#828282] border text-center rounded-md">
                XS
              </div>
              <div className="w-[32px] h-[32px] border-[#828282] border text-center rounded-md">
                S
              </div>
              <div className="w-[32px] h-[32px] text-center rounded-md text-[#FFFFFF] bg-red-500">
                M
              </div>
              <div className="w-[32px] h-[32px] border-[#828282] border text-center rounded-md">
                L
              </div>
              <div className="w-[32px] h-[32px] border-[#828282] border text-center rounded-md">
                XL
              </div>
            </div>

            <div className="flex flex-row space-x-4">
              <div className="[165px] h-[44px] rounded-md">
                <Image
                  src="/detail/button.png"
                  alt="button"
                  width={150}
                  height={100}
                />
              </div>
              <div>
                <button className="bg-red-500 text-white w-[165px] h-[44px] rounded-md hover:bg-red-400">
                  Buy Now
                </button>
              </div>
              <div className="w-[40px] h-[40px] border border-slate-400 rounded-md py-2 flex justify-center">
                <FaRegHeart />
              </div>
            </div>

            <div className="w-[399px] h-[180px] border border-slate-400 rounded-md divide-y-2 divide-slate-400">
              <div className="flex flex-row py-4 px-5 h-3/6 space-x-3">
                <div>
                  <TbTruckDelivery size={40} />
                </div>
                <div className="space-y-2">
                  <h1 className="text-[16px]">Free Delivery</h1>
                  <p className="text-[12px]">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="flex flex-row py-4 px-5 h-3/6 space-x-3">
                <div>
                  <GiReturnArrow size={40} />
                </div>
                <div className="space-y-2">
                  <h1 className="text-[16px]">Return Delivery</h1>
                  <p className="text-[12px]">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row ml-8 lg:ml-[135px] mt-[140px] space-x-6">
        <div className="w-[20px] h-[40px] bg-red-500 rounded-sm"></div>
        <h1 className="text-red-500 text-[16px] font-semibold">
          Related Items
        </h1>
      </div>

      <div className="ml-8 lg:ml-[135px] mt-[60px] mb-[140px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Products
          name="HAVIT HV-G92 Gamepad"
          image="/common/gamepad.png"
          currentprice="$120"
          price="$160"
          icons={[
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
          ]}
          quantity="(88)"
        />
        <Products
          name="AK-900 Wired Keyboard"
          image="/common/keyboard.png"
          currentprice="$960"
          price="$1160"
          icons={[
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
          ]}
          quantity="(75)"
        />
        <Products
          name="IPS LCD Gaming Monitor"
          image="/common/lcd.png"
          currentprice="$370"
          price="$400"
          icons={[
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
          ]}
          quantity="(99)"
        />
        <Products
          name="RGB liquid CPU Cooler"
          image="/common/cpu.png"
          currentprice="$160"
          price="$170"
          icons={[
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
          ]}
          quantity="(65)"
        />
      </div>
    </div>
  );
}
