import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";


interface CardProps {
  title: string;
  description: string;
  src: StaticImageData;
  techStack: string[];
  onClick: () => void;
}
const Card: React.FunctionComponent<CardProps> = ({
  title,
  description,
  src,
  techStack,
  onClick,
}) => {
  return (
    <div className="flex h-[450px] w-[365px] flex-col gap-[10px] rounded border border-black bg-white pt-[10px] text-center  shadow-md md:h-[470px] md:w-[400px]  dark:border-white dark:text-black">
      <Image
        alt=""
        src={src}
        className="px-[5px]"
        width={400}
        height={290}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="mx-[50px]">{description}</p>

      <div className="flex flex-row justify-center gap-2 py-[20px]">
        <button
          className="mt-4  rounded px-4 py-2  border border-black bg-[#ff499a]  hover:bg-[#ff499bd8]"
          onClick={onClick}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
