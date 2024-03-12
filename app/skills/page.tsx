import React from "react";
import Card from "./_modules/Card";

import { FaLaptopCode, FaPalette } from "react-icons/fa";

const page = () => {
  return (
    <div className=" m-0   bg-[#eeecec] pb-[80px] md:m-5 md:h-[735px] md:rounded-[25px] dark:bg-[#2f2e2e]">
      <div className="flex flex-col items-center  gap-[20px] pt-[80px] md:flex md:flex-row md:justify-evenly md:pt-[120px]">
        <Card
          icon={<FaPalette />}
          title=" Design"
          description="I love to create clean, minimal and simple designs."
          subtitle="Skills"
          list="Web Design, AutoCad"
          subtitle2="Tools"
          list2="Canva"
        />
        <Card
          icon={<FaLaptopCode />}
          title="Frontend Developer"
          description="I love building stuffs on the internet. "
          subtitle="Skills"
          list="NextJS, ReactJs, Tailwind, Git, MongoDB, Express, Node "
          subtitle2="Tools"
          list2="VScode, Github"
        />
      </div>
    </div>
  );
};

export default page;
