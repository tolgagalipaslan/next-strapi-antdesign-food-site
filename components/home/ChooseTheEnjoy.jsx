import { Button } from "antd";
import Image from "next/image";
import React from "react";

const ChooseTheEnjoy = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 ">
      <h1 className="text-6xl font-bebas">CHOOSE & ENJOY </h1>
      <p className="font-roboto w-5/6 mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        perferendis quisquam modi commodi alias mollitia quod sit fuga iste
        dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt, modi?
      </p>
      <div className="w-10/12 h-[700px] md:h-[500px]   items-center justify-between relative flex gap-3 md:flex-row flex-col ">
        <div className="w-full md:w-1/3 relative h-full rounded-2xl overflow-hidden group">
          <div className="w-full h-full bg-black/40 z-10 absolute flex items-end text-center flex-col justify-end gap-3 px-2">
            <h1 className="text-2xl font-bebas text-white tracking-[2px] mx-auto">
              Lorem, ipsum dolor.
            </h1>
            <p className="text-gray-200 font-roboto font-bold opacity-90 text-center mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="mx-auto mb-3 bg-red-600 text-white font-bebas font-bold text-xl items-center justify-center text-center  rounded-none border-none tracking-[2px] px-5 w-fit h-fit py-1 active:scale-95 ">
              ORDER NOW
            </Button>
          </div>
          <Image
            fill
            src={"/burger1.jpg"}
            alt="burger1"
            className=" object-cover group-hover:scale-110 duration-500 "
          />
        </div>
        <div className="w-full md:w-1/3 relative h-full rounded-2xl overflow-hidden group">
          <div className="w-full h-full bg-black/40 z-10 absolute flex items-end text-center flex-col justify-end gap-3 px-2">
            <h1 className="text-2xl font-bebas text-white tracking-[2px] mx-auto">
              Lorem, ipsum dolor.
            </h1>
            <p className="text-gray-200 font-roboto font-bold opacity-90 text-center mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="mx-auto mb-3 bg-red-600 text-white font-bebas font-bold text-xl items-center justify-center text-center  rounded-none border-none tracking-[2px] px-5 w-fit h-fit py-1 active:scale-95 ">
              ORDER NOW
            </Button>
          </div>
          <Image
            fill
            src={"/burger3.jpg"}
            alt="burger1"
            className=" object-cover group-hover:scale-110 duration-500 "
          />
        </div>
        <div className="w-full md:w-1/3 relative h-full rounded-2xl overflow-hidden group">
          <div className="w-full h-full bg-black/40 z-10 absolute flex items-end text-center flex-col justify-end gap-3 px-2">
            <h1 className="text-2xl font-bebas text-white tracking-[2px] mx-auto">
              Lorem, ipsum dolor.
            </h1>
            <p className="text-gray-200 font-roboto font-bold opacity-90 text-center mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="mx-auto mb-3 bg-red-600 text-white font-bebas font-bold text-xl items-center justify-center text-center  rounded-none border-none tracking-[2px] px-5 w-fit h-fit py-1 active:scale-95 ">
              ORDER NOW
            </Button>
          </div>
          <Image
            fill
            src={"/burger4.jpg"}
            alt="burger1"
            className=" object-cover group-hover:scale-110 duration-500 "
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseTheEnjoy;
