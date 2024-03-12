import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Button from "./Button";

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
    <div className="flex h-[450px] w-[400px] flex-col gap-[10px] rounded pt-[10px]  text-center shadow-md  md:h-[470px] md:w-[450px]">
      <Image alt="" src={src} className="m-[5px]" width={440} height={300} />
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="mx-[50px]">{description}</p>

      <div className="flex flex-row justify-center gap-2 py-[20px]">
        <button
          className="rounded border border-green-900 px-[20px] py-[10px]"
          onClick={onClick}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
