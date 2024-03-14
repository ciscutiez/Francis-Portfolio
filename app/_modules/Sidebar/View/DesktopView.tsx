"use client";
import React, { FunctionComponent } from "react";
import { Handlee, Inter } from "next/font/google";

import Icons from "../../Icons";
import Link from "next/link";
import ThemeSwitch from "../../ThemeSwitch";

type LinkType = {
  href: string;
  label?: string;
};

const InterFont = Inter({
  weight: "600",
  subsets: ["latin"],
});
const HandleeFont = Handlee({
  weight: "400",
  subsets: ["latin"],
});

const links: LinkType[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Hire me" },
  { href: "/skills", label: "Skill" },
];

const DesktopView: FunctionComponent = () => {
  return (
    <div className="hidden md:block">
      <div className="fixed flex h-[70px] w-full flex-row justify-between bg-[#f3f3f2]  px-[20px] shadow-lg ">
        <p
          className={`${HandleeFont.className} gap-[20px] pt-[15px]  text-[30px] font-bold text-[#ff499a]`}
        >
          cis <span className="text-pink-300">{`</>`}</span>
        </p>
        <div className="flex flex-row ">
          {links.map((link: LinkType, index: number) => (
            <Link
              key={index}
              href={link.href}
              className={`${InterFont.className} flex flex-row   justify-evenly  rounded text-[20px]  text-[#ff499a] transition  duration-300  hover:text-[#828081]  dark:border-[#d8b8b8]`}
            >
              <div className="mx-[10px] flex items-center">
                <span className="ml-2">{link.label}</span>
              </div>
            </Link>
          ))}
        </div>

        
        <div className="pt-[10px]">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
