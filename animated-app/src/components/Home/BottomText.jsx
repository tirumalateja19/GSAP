import React from "react";
import { Link } from "react-router-dom";
const BottomText = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex justify-center overflow-hidden gap-5 text-center uppercase font-[font2] leading-none mb-2">
          <div className="flex justify-center items-center lg:text-[7vw] px-3 pt-3 border-2 border-white rounded-full hover:text-[#D3F350] hover:border-[#D3F350]">
            <Link className="lg:text-[6vw] text-[10vw]" to="/projects">
              IMAGES
            </Link>
          </div>
          <div className="flex justify-center items-center text-[7vw] px-3 pt-3 border-2 border-white rounded-full hover:text-[#D3F350] hover:border-[#D3F350] ">
            <Link className="lg:text-[6vw] text-[10vw]" to="/agence">
              AGENTS
            </Link>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex flex-col justify-center overflow-hidden gap-5 text-center uppercase font-[font2] leading-none mb-2">
          <div className="flex justify-center items-center text-[7vw] px-3 pt-3 border-2 border-white rounded-full hover:text-[#D3F350] hover:border-[#D3F350]">
            <Link className="lg:text-[6vw] text-[10vw]" to="/projects">
              PROJECTS
            </Link>
          </div>
          <div className="flex justify-center items-center text-[7vw] px-3 pt-3 mt-14 border-2 border-white rounded-full hover:text-[#D3F350] hover:border-[#D3F350] ">
            <Link className="lg:text-[6vw] text-[10vw]" to="/agence">
              AGENCY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomText;
