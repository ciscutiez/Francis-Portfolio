import { Ubuntu_Mono } from "next/font/google";
import React, { FunctionComponent, ReactNode } from "react";

//font
const UbuntoMono = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"],
});

//props
interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  subtitle: string;
  list: string;
  subtitle2: string;
  list2: string;
}
//card component
const Card: FunctionComponent<CardProps> = ({
  title,
  description,
  subtitle,
  list,
  subtitle2,
  list2,
  icon,
}) => {
  //jsx structure
  return (
    //container
    <div
      className={`${UbuntoMono.className}  flex h-[400px] w-[300px] cursor-not-allowed flex-col rounded border-[3px] border-[#571c51]  bg-transparent text-[#72243f] shadow-lg md:h-[500px] md:w-[500px]`}
    >
      <div className="mx-[30px]">
        <div className="flex flex-row items-center justify-center gap-[10px] pt-[20px] text-center md:pt-[25px]">
          <span className="text-[20px] md:text-[36px]">{icon}</span>
          <h1 className=" pt-[5px] text-[18px] md:text-[25px] ">
            <strong>{title}</strong>
          </h1>
        </div>
        <p className="mx-[10px] pt-[25px] text-[18px] md:text-[28px]">
          {description}
        </p>
        <h3 className=" pt-[15px]   text-[18px] md:text-[25px]">
          <strong>{subtitle}</strong>
        </h3>
        <p className="mx-[30px] text-[18px] md:text-[28px]"> {list}</p>
        <h3 className="pt-[15px]  text-[18px] md:text-[25px] ">
          <strong>{subtitle2}</strong>
        </h3>
        <p className="mx-[30px] text-[18px] md:text-[28px]">{list2}</p>
      </div>
    </div>
  );
};

export default Card;
