import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

export default function About() {
  return (
    <div className="px-6 py-11 bg-white">
      <div className="flex flex-row space-x-3 ml-8 lg:ml-[135px] lg:py-14">
        <Link href={"/"}>
          <p className="text-gray-500">Home / </p>
        </Link>
        <p>About</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mb-[140px]">
        <div className="w-auto lg:w-[525px] h-[336px] pl-8 lg:pl-[135px] lg:mt-[200px] mt-[100px]">
          <h2 className="font-semibold text-[54px] mb-5">Our Story</h2>
          <p className="mb-3 w-auto lg:w-[525px]">
            Launched in 2015,Exclusive is South Asia premier online shopping
            marketplace with an active presence in Bangladesh, Supportes by wide
            range of tailorrd marketing,data and service solutions,Exclusive has
            10,500 sallers and 300 brands and serves 3 millions customers across
            the region
          </p>{" "}
          <p>
            Exclusive has more than 1 Million products to offer, growing ata
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div className="w-auto lg:w-[705px] lg:h-[609px] flex justify-center lg:justify-end mt-[90px] ml-[75px]">
          <Image
            src="/about/main.png"
            alt="Shopping Pic"
            width={705}
            height={400}
          />
        </div>
      </div>

      <div className="lg:flex lg:flex-row lg:justify-around grid grid-rows-2 grid-flow-col gap-2 w-auto h-auto lg:h-[230px] ml-3 lg:ml-[70px] ">
        <div className="flex flex-col justify-center text-center border border-gray-400 w-[140px] h-auto lg:w-[270px] lg:h-[230px] py-[30px] lg:mb-0 mb-3">
          <div className="flex justify-center">
            <Image
              src="/about/services1.png"
              alt="Sallers"
              width={50}
              height={50}
              className="w-[80px] h-[80px]"
            />
          </div>
          <h2 className="text-[32px] font-bold">10.5K</h2>
          <p>Sallers active our site</p>
        </div>

        <div className="flex flex-col justify-center text-center bg-[#DB4444] text-white border border-gray-400 w-[140px] h-auto lg:w-[270px] lg:h-[230px] py-[30px]">
          <div className="flex justify-center">
            <Image
              src="/about/services2.png"
              alt="Sales"
              width={50}
              height={50}
              className="w-[80px] h-[80px]"
            />
          </div>
          <h2 className="text-[32px] font-bold">33K</h2>
          <p>Monthly Product Sale</p>
        </div>

        <div className="flex flex-col justify-center text-center border border-gray-400 w-[140px] h-auto lg:w-[270px] lg:h-[230px] py-[30px] lg:mb-0 mb-3">
          <div className="flex justify-center">
            <Image
              src="/about/services3.png"
              alt="Customer"
              width={50}
              height={50}
              className="w-[80px] h-[80px]"
            />
          </div>
          <h2 className="text-[32px] font-bold">45.5K</h2>
          <p>Customer active in our site</p>
        </div>

        <div className="flex flex-col justify-center text-center border border-gray-400 w-[140px] h-auto lg:w-[270px] lg:h-[230px] py-[30px]">
          <div className="flex justify-center">
            <Image
              src="/about/services4.png"
              alt="Sales"
              width={50}
              height={50}
              className="w-[80px] h-[80px]"
            />
          </div>
          <h2 className="text-[32px] font-bold">25K</h2>
          <p>Annual gross sale in our site</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between mx-2 lg:ml-[135px] mt-[140px]">
        <div className="w-[370px] h-[564px] mb-7 lg:mb-0">
          <div className="w-[370px] h-[430px] px-[67px] py-[39px] bg-[#F5F5F5]">
            <Image src="/about/tom.png" alt="Tom" width={236} height={391} />
          </div>
          <h2 className="tracking-wide font-medium text-[32px] pt-7">
            Tom Cruise
          </h2>
          <p className="pb-1">Founder and Chaiman</p>
          <div className="flex space-x-5">
            <FiTwitter size={28} />
            <FaInstagram size={28} />
            <RiLinkedinLine size={28} />
          </div>
        </div>

        <div className="w-[370px] h-[564px] mb-7 lg:mb-0">
          <div className="w-[370px] h-[430px] px-[67px] py-[39px] bg-[#F5F5F5]">
            <Image src="/about/emma.png" alt="Emma" width={236} height={391} />
          </div>
          <h2 className="tracking-wide font-medium text-[32px] pt-7">
            Emma Watson
          </h2>
          <p className="pb-1">Manager Director</p>
          <div className="flex space-x-5">
            <FiTwitter size={28} />
            <FaInstagram size={28} />
            <RiLinkedinLine size={28} />
          </div>
        </div>

        <div className="w-[370px] h-[564px] mb-7 lg:mb-0">
          <div className="w-[370px] h-[430px] px-[67px] py-[39px] bg-[#F5F5F5]">
            <Image src="/about/will.png" alt="Will" width={236} height={391} />
          </div>
          <h2 className="tracking-wide font-medium text-[32px] pt-7">
            Will Smith
          </h2>
          <p className="pb-1">Product Designer</p>
          <div className="flex space-x-5">
            <FiTwitter size={28} />
            <FaInstagram size={28} />
            <RiLinkedinLine size={28} />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-[40px] space-x-6">
        <FaCircle color="gray" />
        <FaCircle color="gray" />
        <FaCircle color="#DB4444" />
        <FaCircle color="gray" />
        <FaCircle color="gray" />
      </div>
    </div>
  );
}
