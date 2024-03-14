"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import React, { FunctionComponent, useState } from "react";
import { Handlee, Inter } from "next/font/google";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

import Link from "next/link";

type LinkType = {
  href: string;
  icon: React.ReactNode;
};
const InterFont = Inter({
  weight: "400",
  subsets: ["latin"],
});
const HandleeFont = Handlee({
  weight: "400",
  subsets: ["latin"],
});

const links: LinkType[] = [
  { href: "/", icon: <AiOutlineHome /> },
  { href: "/projects", icon: <AiOutlineProject /> },
  { href: "/contact", icon: <AiOutlineContacts /> },
  { href: "/skills", icon: <FaLaptopCode /> },
];

const MobileView: FunctionComponent = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className=" block md:hidden">
      <div
        className={`fixed z-[100] flex h-[85px] w-full flex-row items-center justify-between  bg-[#474747] px-[20px] text-[#ff499a] `}
      >
        <Link href="/">
          <p className={`${HandleeFont.className}    text-[26px] font-bold `}>
            cis {`</>`}
          </p>
        </Link>

        <div className="">
          {navOpen ? (
            <GrClose onClick={toggleNav} className="cursor-pointer text-2xl " />
          ) : (
            <GiHamburgerMenu
              onClick={toggleNav}
              className="cursor-pointer text-2xl "
            />
          )}
        </div>
      </div>

      {navOpen && (
        <div className="fixed left-[15%] mt-[630px] flex h-[50px] w-[300px] flex-row items-center justify-evenly gap-[10px] rounded-full bg-[#7b7b78]  shadow-lg ">
          {links.map((link: LinkType, index: number) => (
            <Link
              key={index}
              href={link.href}
              className={`${InterFont.className}  pt-[3px] text-[30px] text-[#e7e4e7] transition duration-300 hover:text-[#5f6161]`}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileView;
