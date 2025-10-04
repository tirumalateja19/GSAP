import React from "react";
import K72 from "../../utils/K72.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        src={K72}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
