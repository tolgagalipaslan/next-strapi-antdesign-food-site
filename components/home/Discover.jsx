import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
const Discover = () => {
  useEffect(() => {
    const element = document.querySelector(".js-tilt");
    VanillaTilt.init(element, {
      max: 25,
      speed: 400,
    });
  }, []);

  return (
    <div className="w-full discoverImage md:h-[850px] relative  h-[1000px] ">
      <div className="absolute w-full h-full bg-yellow-500/70 z-0  ">
        <div className=" flex  md:flex-row flex-col items-center md:justify-center  justify-around font-bebas h-full px-5 overflow-x-hidden">
          <div className="md:max-w-[450px] w-full flex flex-col gap-2 md:scale-150 justify-center items-center z-50">
            <div className="text-sm  border-dashed border-2 w-fit p-1 border-black/50">
              IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS
            </div>
            <h1 className="text-9xl burgerShadow">BURGER</h1>
            <h1 className="burgerShadow text-6xl">WEEK</h1>
          </div>
          <div className="md:max-w-[700px] w-full relative flex items-center justify-center mt-20  z-20 ">
            <div className="js-tilt relative md:mt-20 heroCard w-fit ">
              <img
                src="hamburger.png"
                alt=""
                className="h-[250px]  heroCard md:scale-125 "
              />
              <div className="absolute top-[-210px] right-[-100px]   z-[-50] heroCardPers md:right-[-130px] md:top-[-230px]">
                <img
                  src="cocacola.png"
                  alt=""
                  className="h-[450px] md:scale-125 "
                />
              </div>
              <div className="absolute top-[-110px] left-[-110px] z-[-50] heroCardLinks md:left-[-150px] ">
                <img
                  src="fries.png"
                  alt=""
                  className="h-[330px] -rotate-[30deg]  md:scale-125 "
                />
              </div>
              <div className=" bg-red-700 rounded-full p-1 absolute top-[150px] md:left-[-50px]  heroCardImg">
                <div className="flex flex-col  rounded-full items-center justify-center border-dashed border-2 border-white text-white p-3 h-[90px] w-[90px] md:h-[130px] md:w-[130px]  ">
                  <h1 className="font-bebas md:text-5xl text-3xl ">
                    {" "}
                    $5. <span className="text-lg">49</span>{" "}
                  </h1>
                  <h1
                    className="font-thin text-xl md:tracking-[5px]
                  "
                  >
                    ONLY
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
