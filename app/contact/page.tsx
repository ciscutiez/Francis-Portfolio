import React from "react";
import Form from "./_modules/Form";

export default function page() {
  return (
    <div className="m-0 min-h-screen bg-[#eeecec] text-black  md:h-[735px]   dark:bg-[#2f2e2e]">
      <div className=" flex items-center justify-center pt-[40px] md:px-[50px] ">
        <div className="mt-[40px] h-full w-full rounded-[10px] bg-[#fafafa] px-[10px] shadow-md md:mt-[50px] md:h-[660px] md:w-[450px]">
          <h1 className="pt-[40px] text-center text-[20px] font-bold">
            Send me a message
          </h1>
          <Form />
        </div>
      </div>
    </div>
  );
}
