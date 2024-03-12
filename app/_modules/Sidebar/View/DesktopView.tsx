"use client";
import React, { FunctionComponent } from "react";
import { Handlee, Inter } from "next/font/google";

import { FaHome, FaProjectDiagram, FaUserTie, FaTools } from "react-icons/fa";
import Icons from "../../Icons";
import Link from "next/link";
import ThemeSwitch from "../../ThemeSwitch";
import { FaSlack, FaGithub, FaLinkedin } from "react-icons/fa";

type LinkType = {
  href: string;
  label?: string;
  icon: React.ReactNode;
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
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
  { href: "/contact", label: "Hire me", icon: <FaUserTie /> },
  { href: "/skills", label: "Skill", icon: <FaTools /> },
];

const DesktopView: FunctionComponent = () => {
  return (
    <div className="hidden md:block">
      <div className="flex min-h-screen w-[300px] flex-col bg-[#eeecec] text-[#555454] shadow-lg ">
        <div className="flex flex-col items-center">
          <p
            className={`${HandleeFont.className} mb-[28px] flex flex-row justify-center gap-[20px] pt-[50px] text-[30px] font-bold `}
          >
            cis <span className="text-pink-300">{`</>`}</span>
          </p>
          <div className="flex flex-col items-start">
            {links.map((link: LinkType, index: number) => (
              <Link
                key={index}
                href={link.href}
                className={`${InterFont.className} mx-[25px]  mt-[20px] flex w-[280px]  items-start  justify-start rounded py-[8px] text-[24px] transition  duration-300 hover:bg-[#727272] hover:text-[#edeaeb]  dark:border-[#d8b8b8]`}
              >
                <div className="mx-[10px] flex items-center">
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[10px] pt-[150px]">
          <Icons icon={<FaSlack />} />
          <Icons icon={<FaGithub />} />
          <Icons icon={<FaLinkedin />} />
        </div>
        <div className="flex justify-center pb-[10px] pt-[110px]">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
