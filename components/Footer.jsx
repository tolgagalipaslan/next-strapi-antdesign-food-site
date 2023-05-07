import { MailFilled } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import { GiHamburger } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-10/12  h-[400px] mx-auto bg-black/40 my-10 relative">
      <div className="absolute bg-black/80 z-10 w-full h-full  flex flex-col ">
        <div className="flex justify-between items-center w-full h-4/5 p-7">
          <div className="flex flex-col w-1/2 gap-5 ">
            <h1 className=" font-bold flex items-center  float-left  text-white font-bebas text-3xl  gap-5">
              {" "}
              <GiHamburger className="text-5xl text-white" /> BURGER HOUSE{" "}
            </h1>
            <p className="font-roboto text-sm text-white opacity-80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              dolorum aliquid nam quae facilis a doloremque nemo velit
              praesentium quis incidunt mollitia dolores vel soluta animi, rerum
              perspiciatis molestiae quas cumque explicabo in. Id, dignissimos
              deleniti. Commodi nemo provident fugit.
            </p>
          </div>
          <div className="flex flex-col w-1/2 gap-5  items-center justify-center">
            <h1 className=" font-bold flex items-center  float-left  text-white font-bebas text-xl  gap-5">
              {" "}
              <GoLocation className="text-2xl text-white" /> BURGER HOUSE{" "}
            </h1>
            <h1 className=" font-bold flex items-center  float-left  text-white font-bebas text-xl  gap-5">
              {" "}
              <MailFilled className="text-2xl text-white" /> INFOBURGER@INFO{" "}
            </h1>
          </div>
        </div>
        <div className="flex  justify-between items-center h-1/5 p-7">
          <div>
            <h1 className="text-sm font-bebas text-white">
              Company name 202 . All rights RESERVED
            </h1>
          </div>
          <div className="flex items-center justify-center text-white text-2xl gap-1 w-1/2">
            <FaFacebook className="text-xl" />
            <AiFillTwitterCircle />
            <AiFillInstagram />
          </div>
        </div>
      </div>
      <div className="absolute bg-yellow-900/5 z-20 w-full h-full"></div>
      <Image fill className="object-cover" src={"/burger1.jpg"} alt="sa" />
    </div>
  );
};

export default Footer;
