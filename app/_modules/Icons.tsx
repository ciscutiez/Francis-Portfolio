import React from "react";

interface IconProps {
  icon: React.ReactNode;
}

const Icons: React.FunctionComponent<IconProps> = ({ icon }) => {
  return (
    <div className="cursor-pointer rounded-full border-[50%] bg-[#434646] p-[10px] text-[#f9f8f8] shadow-sm transition duration-300 ease-in-out hover:bg-[#3c3d3d]">
      {icon}
    </div>
  );
};

export default Icons;
