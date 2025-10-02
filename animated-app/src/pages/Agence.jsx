import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agence = () => {
  const ImageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e",
    "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
    "https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(ImageDivRef.current, {
      scrollTrigger: {
        trigger: ImageDivRef.current,
        // markers: true,
        start: "top 18%",
        end: "top -120%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <div className="bg-black">
      <div className="section1 py-1">
        <div
          ref={ImageDivRef}
          className="w-[14vw] h-[18vw] rounded-3xl absolute left-[31vw]
        top-[12vw] overflow-hidden"
        >
          <img
            ref={imageRef}
            className="w-full h-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className="relative">
          <div className="mt-[50vh] font-[font1]">
            <h1 className="text-[19vw] uppercase leading-[18vw] text-center ">
              SEVEN7Y <br /> TWO
            </h1>
          </div>
          <div className="pl-[40%] mt-4 p-3">
            <p className="lg:text-5xl text-lg leading-tight text-start">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">
        <div></div>
      </div>
    </div>
  );
};

export default Agence;
