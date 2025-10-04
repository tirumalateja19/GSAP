import React from "react";
import Video from "./Video";

const HeroText = () => {
  return (
    <div className="text-center overflow-hidden lg:mt-0 mt-44 uppercase font-[font1] lg:leading-none leading-[17vw]">
      {/* Large screens: original layout */}
      <div className="hidden lg:block">
        <div className="flex justify-center items-center lg:text-[9vw] text-[1vw]">
          The spark for
        </div>
        <div className="flex lg:flex-none justify-center items-center lg:text-[9vw] text-[10vw]">
          all{" "}
          <div className="lg:h-[16vh] lg:w-[18vw] h-[18vw] w-[32vw] rounded-full overflow-hidden">
            <Video />
          </div>
          things
        </div>
        <div className="flex justify-center items-center lg:text-[9vw] text-[13vw]">
          creative
        </div>
      </div>
      {/* Small screens: stacked layout */}
      <div className="block lg:hidden">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-[13vw]">The spark for</div>
          <div className="w-[64vw] h-[30vw] rounded-full overflow-hidden">
            <Video />
          </div>
          <div className="text-[13vw]">all things</div>
          <div className="text-[13vw]">creative</div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
