import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  currentprice: string;
  price?: string;
  quantity?: string;
  icons?: string[];
}

const Products = ({
  name,
  image,
  currentprice,
  price,
  icons = [],
  quantity,
}: Props) => {
  return (
    <div className="w-[270px] h-[350px] flex flex-col">
      <div className="w-[265px] h-[250px]">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      <div>
        <h1 className="mt-4 text-black font-medium text-start">{name}</h1>

        <span className="flex flex-row py-1 space-x-2">
          <p className="text-[#DB4444] font-medium">{currentprice}</p>
          <p className="text-gray-500">{price}</p>
        </span>

        <span className="flex flex-row items-center">
          {icons.length > 0 &&
            icons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt="star"
                width={20}
                height={20}
                className="mr-1"
              />
            ))}
          <p className="text-gray-500">{quantity}</p>
        </span>
      </div>
    </div>
  );
};

export default Products;
