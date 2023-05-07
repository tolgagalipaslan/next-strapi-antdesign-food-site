import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import Events from "./Events";
const UpcomingEvents = () => {
  return (
    <div className="w-10/12 mx-auto h-[400px]  shadow-md shadow-black m-5  ">
      <Swiper
        className="mySwiper"
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          {" "}
          <Events />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Events />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Events />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Events />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default UpcomingEvents;
