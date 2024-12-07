import React from "react";
import Products from "../components/Product";

export default function Wishlist() {
  return (
    <div className="mt-[108px] mx-8 lg:mx-[135px]">
      <div className="flex flex-row justify-between space-x-1 lg:space-x-72">
        <h1 className="text-xl">Wishlist(4)</h1>
        <button className="w-[223px] h-[56px] border border-gray-400 rounded-md px-3">
          Move All To Bag
        </button>
      </div>

      <div className="mt-[60px] mb-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Products
          name="Gucci duffle bag"
          image="/wishlist/cart1.png"
          currentprice="$120"
          price="$1160"
        />
        <Products
          name="RGB liquid CPU Cooler"
          image="/wishlist/cart2.png"
          currentprice="$1960"
        />
        <Products
          name="GP11 Shooter USB Gamepad"
          image="/wishlist/cart3.png"
          currentprice="$550"
        />
        <Products
          name="Quilted Stain Jacket"
          image="/wishlist/cart4.png"
          currentprice="$750"
        />
      </div>

      <div className="flex flex-row lg:flex-row justify-between mb-[80px]">
        <div className="flex flex-row space-x-6 items-center">
          <div className="w-[20px] h-[40px] bg-red-500 rounded-sm"></div>
          <h1 className="text-[20px] py-2">Just For You</h1>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="w-full lg:w-[150px] h-[56px] border border-gray-400 rounded-md px-3 ml">
            See All
          </button>
        </div>
      </div>

      <div className="mb-[140px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Products
          name="RGB liquid CPU Cooler"
          image="/wishlist/cart5.png"
          currentprice="$1160"
          icons={[
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
          ]}
          quantity="(65)"
        />
        <Products
          name="IPS LCD Gaming Monitor"
          image="/wishlist/cart6.png"
          currentprice="$1160"
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
          name="AK-900 Wired Keyboard"
          image="/wishlist/cart7.png"
          currentprice="$560"
          icons={[
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
            "/common/star.png",
          ]}
          quantity="(75)"
        />
        <Products
          name="AK-900 Wired Keyboard"
          image="/wishlist/cart8.png"
          currentprice="$200"
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
