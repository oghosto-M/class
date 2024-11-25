import { useEffect, useRef, useState } from "react";
import ImageLaptop1 from "../../assets/ImageLaptop1.webp";
import ImageLaptop2 from "../../assets/ImageLaptop2.webp";
import ImageMobile1 from "../../assets/imageMobile1.png";
import ImageMobile2 from "../../assets/imageMobile2.png";

const MOBILE_WIDTH = 767;
const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH);
  const prevWidth = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth;
      if (currWidth <= MOBILE_WIDTH && prevWidth.current > MOBILE_WIDTH) {
        setIsMobile(true);
      } else if (
        currWidth > MOBILE_WIDTH &&
        prevWidth.current <= MOBILE_WIDTH
      ) {
        setIsMobile(false);
      }
      prevWidth.current = currWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    [ImageLaptop1, ImageMobile1],
    [ImageLaptop2, ImageMobile2],
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="relative flex flex-col">
      <div className="relative m-auto">
        {images.map(([laptop, mobile], index) => {
          return (
            <img
              key={index}
              src={`${isMobile ? mobile : laptop}`}
              className={`${
                index === currentIndex ? "h-auto opacity-100" : "h-0 opacity-0"
              }  transition-all ease-in-out duration-500`}
              alt=""
            ></img>
          );
        })}
        <button
          className="absolute top-1/2 left-2 h-10 w-10 bg-slate-300 hover:bg-slate-400 hover:text-purple-200 hover:shadow-2xl rounded-full transition-all ease-linear  "
          onClick={() => {
            setCurrentIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            );
          }}
        >
          &lt;
        </button>
        <button
          className=" absolute top-1/2 right-2 h-10 w-10 bg-slate-300 hover:bg-slate-400 hover:text-purple-200 hover:shadow-2xl rounded-full transition-all ease-linear"
          onClick={() => {
            setCurrentIndex((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            );
          }}
        >
          &gt;
        </button>
      </div>
      <div className="text-[#2d2f31] font-medium m-7 md:m-0 md:bg-slate-200 md:flex md:flex-col md:w-[40%] md:absolute md:bottom-0 md:left-14">
        <div className="md:px-4 md:py-3">
          <h1 className="text-2xl my-4">Gain skills, get certified</h1>
          <p className="font-normal text-sm mb-5">
            Looking to grow your career? With Udemy certification prep you can
            validate your skills in AWS, Azure, CompTIA, and more.
          </p>
          <a
            className="bg-[#2d2f31] text-white flex p-4 justify-center"
            href=""
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
