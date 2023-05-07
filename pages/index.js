import Discover from "@/components/home/Discover";
import React from "react";
import Spline from "@splinetool/react-spline";
import ProductHeroSection from "@/components/home/ProductHeroSection";
import ChooseTheEnjoy from "@/components/home/ChooseTheEnjoy";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import Reservation from "@/components/home/Reservation";

const Home = () => {
  return (
    <div className=" text-[#43200c]">
      <Discover />
      <ProductHeroSection />
      <ChooseTheEnjoy />
      <UpcomingEvents />
      <Reservation />
    </div>
  );
};

export default Home;
