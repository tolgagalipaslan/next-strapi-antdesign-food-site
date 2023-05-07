import { Button } from "antd";
import Image from "next/image";
import React from "react";

const ProductHeroSection = () => {
  return (
    <div className="w-10/12 h-[400px] mx-auto flex flex-col  py-10 md:gap-7 gap-2  ">
      <div className="flex h-full w-full md:gap-7 gap-2">
        <div className="w-1/2 h-full  relative  rounded-xl overflow-hidden group group">
          <Image
            fill
            className=" object-cover group-hover:scale-110 duration-500"
            alt="burger1"
            src={"/burger1.jpg"}
          />
          <div className="absolute w-full h-full bg-black/40  font-bebas text-white font-thin p-4">
            <h1 className="font-light text-lg">TRY IT TODAY</h1>
            <h1 className="font-light">MOST POPULAR BURGER</h1>
          </div>
        </div>
        <div className="flex flex-col relative w-1/2 h-full md:gap-7 gap-2">
          <div className="relative w-full h-1/2 rounded-xl overflow-hidden group">
            <Image
              fill
              className=" object-cover group-hover:scale-110 duration-500"
              alt="burger2"
              src={"/burger4.jpg"}
            />
            <div className="absolute w-full h-full bg-black/40  font-bebas text-white font-thin p-4">
              <h1 className="font-light text-lg">TRY IT TODAY</h1>
              <h1 className="font-light">MOST POPULAR BURGER</h1>
            </div>
          </div>
          <div className="relative w-full h-1/2 overflow-hidden bg-black rounded-xl group ">
            <Image
              fill
              className=" object-cover group-hover:scale-110 duration-500"
              alt="burger3"
              src={"/burger3.jpg"}
            />
            <div className="absolute w-full h-full bg-black/40  font-bebas text-white font-thin p-4">
              <h1 className="font-light text-lg">TRY IT TODAY</h1>
              <h1 className="font-light">MOST POPULAR BURGER</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <Button
          className="h-fit p-2 px-5 font-bebas text-2xl bg-[#FFC136] text-center  active:scale-95 hover:text-red-500  hover:outline-red-400 hover:outline text-[#43200C]"
          type="button"
          size={16}
        >
          ALWAYS TASTY BURGER
        </Button>
      </div>
    </div>
  );
};

export default ProductHeroSection;
