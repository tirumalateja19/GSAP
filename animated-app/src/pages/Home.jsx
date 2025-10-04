import React from "react";
import Video from "../components/Home/Video";
import HeroText from "../components/Home/HeroText";
import BottomText from "../components/Home/BottomText";

const Home = () => {
  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed overflow-hidden">
        <Video />
      </div>
      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
        <HeroText />
        <BottomText />
      </div>
    </div>
  );
};

export default Home;
