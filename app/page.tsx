"use client";

import { Barriecito } from "next/font/google";

import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa6";

type Typewriter = {};
const BarriecitoFont = Barriecito({
  weight: "400",
  subsets: ["latin"],
});
const Home = () => {
  const roles = [
    "a Gamer",
    "a Frontend Developer",
    "an Electrical Technologist",
  ];
  let roleIndex = 0;
  const typeLoop = (typewriter: any) => {
    typewriter
      .typeString(`Hi, i am Francis and i am a   ${roles[roleIndex]}`)
      .pauseFor(1000)
      .deleteChars(roles[roleIndex].length)
      .pauseFor(500)
      .callFunction(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        typeLoop(typewriter);
      })

      .start();
  };

  return (
    <div className="  bg-[#eeecec]    dark:bg-[#2f2e2e]">
      <div className="min-h-screen  w-full text-center   md:h-[90vh] md:w-full md:rounded-[25px] ">
        <div className="flex flex-col items-center justify-center pt-[140px]  ">
          <p className="pt-[30px] text-[30px] font-semibold md:text-pretty md:text-[34px]">
            Hello, {`I'm`} {""}
            <span className={`${BarriecitoFont.className} text-[#ff499a] `}>
              Francis
            </span>
          </p>
          <div className="flex flex-row  pt-[20px] text-[24px] font-semibold md:text-[32px]">
            <span className="text-[#ff499a]">
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 20,
                  cursor: "",
                }}
              />
            </span>
          </div>
          <div>
            <p className="px-[20px] h-[100px]  w-full  pt-[50px] text-justify text-[16px] md:w-[550px] md:text-[20px]">
              &nbsp; &nbsp; &nbsp; I am a Developer from Philippines. I ❤️
              designing and building dynamic websites. My expertise is to create
              website, graphic design, electrical installation, and more...
            </p>
            <div className=" mt-[200px] flex flex-row items-center justify-center gap-[5px] px-[16px] py-[10px] md:mt-[120px]">
              <button className="text-[18px] font-semibold text-[#ff499a]">
                More info {`>`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
