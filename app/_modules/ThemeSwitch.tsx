"use client";
import React, { useState, useEffect } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isActive, setIsActive] = useState(resolvedTheme === "dark");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setIsActive(newTheme === "dark");
  };

  return (
    <div
      className="flex h-[48px] w-[266px] cursor-pointer justify-between rounded-[8px] border border-[#5f6161] bg-[#3b3b3b] p-1 text-[#fcfcfb] shadow-sm transition duration-300 ease-in-out"
      onClick={toggleTheme}
    >
      <span
        className={`m-[2px] flex w-[120px] items-center gap-2 rounded pl-[20px] ${isActive ? "" : "bg-[#232322]"} ${isActive ? "pointer-events-none" : ""}`}
      >
        <IoMdSunny
          className={`text-[28px] ${isActive ? "text-[#fcfcfb]" : "text-[#ff499a]"}`}
        />
        Light
      </span>
      <span
        className={`m-[2px] flex w-[120px] items-center gap-2 rounded pl-[20px] ${isActive ? "bg-[#232322]" : ""} ${isActive ? "pointer-events-none" : ""}`}
      >
        <IoMdMoon
          className={`text-[28px] ${isActive ? "text-[#ff499a]" : "text-[#fcfcfb]"}`}
        />
        Dark
      </span>
    </div>
  );
}
