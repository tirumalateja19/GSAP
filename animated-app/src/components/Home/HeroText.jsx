import React from "react";
import Video from "./Video";

const HeroText = () => {
  return (
    <div className="text-center uppercase font-[font1] leading-none ">
      <div className="flex justify-center items-center text-[9.5vw]">
        The spark for
      </div>
      <div className="flex justify-center items-center text-[9.5vw]">
        all{" "}
        <div className="h-[16vh] w-[18vw] rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="flex justify-center items-center text-[9.5vw]">
        creative
      </div>
    </div>
  );
};

export default HeroText;
