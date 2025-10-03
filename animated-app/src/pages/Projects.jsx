import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from(".hero", {
      height: "30px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div className="p-2">
      <div className="pt-[24vw]">
        <h1 className=" uppercase text-[8vw] font-[font2] text-black">
          projects
        </h1>
      </div>
      <div className="-mt-10 lol">
        {projects.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="hero w-full lg:h-[550px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
