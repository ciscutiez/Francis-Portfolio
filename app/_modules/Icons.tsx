import React from "react";

interface IconProps {
  icon: React.ReactNode;
  href: string;
}

const Icons: React.FunctionComponent<IconProps> = ({ icon, href }) => {
  return (
    <div className="cursor-pointer rounded-full border-[50%] bg-[#434646] p-[10px] text-[#f9f8f8] shadow-sm transition duration-300 ease-in-out hover:bg-[#3c3d3d]">
      <a href={href}>{icon}</a> 
    </div>
  );
};

export default Icons;
