import Image from "next/image";
import React from "react";

const Events = () => {
  return (
    <div className="w-full h-[400px] flex gap-2 justify-between p-5 ">
      <div className="md:w-1/2 w-full  flex flex-col  justify-center h-full ">
        <h1 className="font-bebas text-2xl text-black opacity-90">DISCOVER</h1>
        <h1 className="font-bebas text-4xl">UPCOMING EVENTS</h1>
        <p className="text-lg font-roboto font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          nesciunt ipsa, placeat delectus ipsum dolorum exercitationem ipsam,
          reiciendis blanditiis rerum accusamus obcaecati? Magnam quia, porro
          laboriosam repellat est ut inventore.
        </p>
      </div>
      <div className="w-1/2 h-full relative md:flex hidden">
        <div className="w-full h-full absolute bg-black/30 z-10"></div>
        <Image
          fill
          className=" object-cover group-hover:scale-110 duration-500"
          src={"/burger1.jpg"}
          alt="sa"
        />
      </div>
    </div>
  );
};

export default Events;
