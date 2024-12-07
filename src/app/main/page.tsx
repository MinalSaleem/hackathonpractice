import React from "react";
import Image from "next/image";
import Link from "next/link";
import Products from "../components/Product";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export default function Main() {
  return (
    <div className="bg-white ml-2 lg:ml-[135px]">
      <div className="flex flex-col lg:flex-row mt-[20px] lg:mt-[40px] mb-[60px] lg:mb-[140px]">
        <div className="w-[217px] h-[344px] mr-16 pr-6 lg:block hidden">
          <ul className="flex flex-col gap-4">
            <li className="flex flex-row gap-10">
              Woman Fashion
              <IoIosArrowForward size={26} className="py-1" />
            </li>
            <li className="flex flex-row gap-14">
              Men Fashion
              <IoIosArrowForward size={26} className="py-1" />
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyles</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        <div className="w-full lg:w-[950px] h-auto lg:h-[344px] ml-6 lg:ml-[80px]">
          <div className="lg:block hidden">
            <Image
              src="/common/main1.png"
              alt="Phone picture"
              width={900}
              height={300}
            />
          </div>
          <div className="lg:hidden block">
            <Image
              src="/common/main1.png"
              alt="Phone picture"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      <div className="ml-8 lg:ml-0 mb-10">
        <div className="flex flex-row space-x-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-sm"></div>
          <h1 className="text-red-500 text-[16px] font-semibold py-2">
            Today&apos;s
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row">
          <h2 className="text-[36px] font-semibold pt-4 tracking-wide">
            Flash Sales
          </h2>

          <div className="flex flex-row w-[302px] h-[50px] ml-0 lg:ml-[87px] gap-9">
            <div className="flex flex-col">
              <h3 className="font-medium text-[12px]">Days</h3>
              <h3 className="text-[32px] font-bold">03</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-[12px]">Hours</h3>
              <h3 className="text-[32px] font-bold">23</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-[12px]">Minutes</h3>
              <h3 className="text-[32px] font-bold">19</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-[12px]">Seconds</h3>
              <h3 className="text-[32px] font-bold">56</h3>
            </div>
          </div>
        </div>

        <div className=" my-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Link href={"/detail"}>
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
          </Link>
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
            name="S-Series Comfort Chair"
            image="/common/chair.png"
            currentprice="$375"
            price="$400"
            icons={[
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
            ]}
            quantity="(99)"
          />
        </div>
        <div className="flex justify-center my-10 mr-7 lg:mr-0">
          <button className="w-[260px] h-[56px] bg-[#DB4444] text-white py-3 px-16 rounded-md ">
            View All Products
          </button>
        </div>
      </div>

      <div className="ml-8 lg:ml-0 my-[140px]">
        <div className="flex flex-row space-x-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-sm"></div>
          <h1 className="text-red-500 text-[16px] font-semibold py-2">
            Categories
          </h1>
        </div>

        <div className="flex flex-row">
          <h2 className="text-[36px] font-semibold pt-4 tracking-wide">
            Browse By Category
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-[60px]">
          <div className="w-[170px] h-[145px] border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
            <IoIosPhonePortrait size={70} />
            <p>Phone</p>
          </div>
          <div className="w-[170px] h-[145px] border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
            <RiComputerLine size={70} />
            <p>Computer</p>
          </div>
          <div className="w-[170px] h-[145px] border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
            <BsSmartwatch size={70} />
            <p>Smartwatch</p>
          </div>
          <div className="w-[170px] h-[145px] border border-gray-400 rounded-md flex flex-col items-center py-7 px-6 bg-[#DB4444] text-white">
            <BsCamera size={70} />
            <p>Camera</p>
          </div>
          <div className="w-[170px] h-[145px] border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
            <FiHeadphones size={70} />
            <p>Headphones</p>
          </div>
          <div className="w-[170px] h-[145px] border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
            <IoGameControllerOutline size={70} />
            <p>Gaming</p>
          </div>
        </div>
      </div>
      <div className=" ml-8 lg:ml-0">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-row space-x-6 items-center">
            <div className="w-[20px] h-[40px] bg-red-500 rounded-sm"></div>
            <h1 className="text-red-500 text-[16px] font-semibold py-2">
              This Month
            </h1>
          </div>

          <div className="mt-4 sm:mt-0 mr-0 lg:mr-20">
            <button className="w-[260px] lg:w-[159px] h-[56px] bg-[#DB4444] text-white rounded-md px-3">
              View All
            </button>
          </div>
        </div>

        <div className="flex flex-row">
          <h2 className="text-[36px] font-semibold pt-4 tracking-wide lg:hidden block">
            Best Selling
          </h2>
          <h2 className="text-[36px] font-semibold pt-4 tracking-wide lg:block hidden">
            Best Selling Products
          </h2>
        </div>

        <div className=" my-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Products
            name="The north coat"
            image="/common/coat.png"
            currentprice="$260"
            price="$360"
            icons={[
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
            ]}
            quantity="(65)"
          />
          <Products
            name="Gucci duffle bag"
            image="/common/bag.png"
            currentprice="$960"
            price="$1160"
            icons={["/common/star.png", "/common/star.png", "/common/star.png"]}
            quantity="(65)"
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
              "/common/star.png",
            ]}
            quantity="(65)"
          />
          <Products
            name="Small BookSelf"
            image="/common/bookself.png"
            currentprice="$365"
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

      <div className="mt-[140px] mr-10 flex justify-center">
        <div className="hidden lg:block">
          <Image
            src="/common/main2.png"
            alt="Phone picture"
            width={1170}
            height={500}
          />
        </div>
        <div className="lg:hidden block">
          <Image
            src="/common/main2.png"
            alt="Phone picture"
            width={300}
            height={500}
          />
        </div>
      </div>

      <div className="mt-[71px] lg:ml-0 ml-8">
        <div className="flex flex-row space-x-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-sm"></div>
          <h1 className="text-red-500 text-[16px] font-semibold py-2">
            Our Products
          </h1>
        </div>

        <div className="flex flex-row">
          <h2 className="text-[36px] font-semibold pt-4 tracking-wide lg:hidden block">
            Our Products
          </h2>
          <h2 className="text-[36px] font-semibold pt-4 tracking-wide lg:block hidden">
            Explore Our Products
          </h2>
        </div>

        <div className=" my-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Products
            name="Breed Dry Dog Food"
            image="/common/food.png"
            currentprice="$100"
            icons={["/common/star.png", "/common/star.png", "/common/star.png"]}
            quantity="(35)"
          />
          <Products
            name="CANON EOSDSLR CAMERA"
            image="/common/camera.png"
            currentprice="$360"
            icons={[
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
            ]}
            quantity="(65)"
          />
          <Products
            name="ASUS FHD Gaming Laptop"
            image="/common/laptop.png"
            currentprice="$700"
            icons={[
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
            ]}
            quantity="(325)"
          />
          <Products
            name="Curology Product Set"
            image="/common/set.png"
            currentprice="$500"
            icons={[
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
            ]}
            quantity="(145)"
          />

          <Products
            name="Kids Electric Car"
            image="/common/car.png"
            currentprice="$960"
            icons={[
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
            ]}
            quantity="(65)"
          />
          <Products
            name="Jr. Zoom Soccer Cleats"
            image="/common/soccer.png"
            currentprice="$1160"
            icons={["/common/star.png", "/common/star.png", "/common/star.png"]}
            quantity="(35)"
          />
          <Products
            name="GP11 Shooter USB Gamepad"
            image="/common/gamepad1.png"
            currentprice="$660"
            icons={[
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
            ]}
            quantity="(65)"
          />
          <Products
            name="Quilted Satin Jacket"
            image="/common/jacket.png"
            currentprice="$665"
            icons={[
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
              "/common/star.png",
            ]}
            quantity="(65)"
          />
        </div>
        <div className="flex justify-center mt-10 lg:mx-0 mx-auto">
          <button className="bg-[#DB4444] w-[234px] h-[56px] text-white py-3  rounded-md ">
            View All Products
          </button>
        </div>
      </div>

      <div className="mt-[140px] mb-[30px] lg:mb-[140px] w-full">
        <div className="flex flex-row space-x-6">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-sm"></div>
          <h1 className="text-red-500 text-[16px] font-semibold py-2">
            Featured
          </h1>
        </div>

        <div className="flex flex-row">
          <h2 className="text-[36px] font-semibold pt-4 tracking-wide">
            New Arrival
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-start  mt-[60px]">
          <div className="w-auto lg:w-[670px] h-auto lg:h-[600px] mb-3 lg:mb-0 ml-0 lg:ml-[30px]">
            <div className="lg:block hidden">
              <Image
                src="/common/playstation.png"
                alt="Playstation"
                width={600}
                height={300}
              />
            </div>
            <div className="lg:hidden block">
              <Image
                src="/common/playstation.png"
                alt="Playstation"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[700px] h-auto lg:h-[284px] lg:mb-[48px] mb-3">
              <div className="lg:block hidden">
                <Image
                  src="/common/collection.png"
                  alt="Collection"
                  width={630}
                  height={300}
                />
              </div>
              <div className="lg:hidden block">
                <Image
                  src="/common/collection.png"
                  alt="Collection"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="flex flex-row  w-[300px] lg:w-[700px] h-[300px] lg:h-[284px]">
              <div className="lg:mr-[30px] mr-2">
                <Image
                  src="/common/speakers.png"
                  alt="Speaker"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <Image
                  src="/common/perfume.png"
                  alt="Perfume"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
