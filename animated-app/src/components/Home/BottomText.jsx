import React from "react";
import { Link } from "react-router-dom";
const BottomText = () => {
  return (
    <div className="flex justify-center gap-5 text-center uppercase font-[font2] leading-none mb-2">
      <div className="flex justify-center items-center text-[7vw] px-3 pt-3 border-2 border-white rounded-full hover:text-[#D3F350] hover:border-[#D3F350]">
        <Link className="text-[6vw]" to="/projects">
          PROJECTS
        </Link>
      </div>
      <div className="flex justify-center items-center text-[7vw] px-3 pt-3 border-2 border-white rounded-full hover:text-[#D3F350] hover:border-[#D3F350] ">
        <Link className="text-[6vw]" to="/agence">
          AGENCY
        </Link>
      </div>
    </div>
  );
};

export default BottomText;
