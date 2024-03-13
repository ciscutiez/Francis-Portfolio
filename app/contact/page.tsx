import React from "react";
import Form from "./_modules/Form";

export default function page() {
  return (
    <div className="m-0 bg-[#eeecec] text-black md:m-5 md:h-[735px] md:rounded-[25px] md:pb-[20px] dark:bg-[#2f2e2e]">
      <div className=" flex items-center justify-center p-0 md:px-[50px] ">
        <div className="px-[10px] mt-[40px] h-full w-full rounded-[10px] bg-[#fafafa] shadow-md md:mt-[50px] md:h-[660px] md:w-[450px]">
          <h1 className="pt-[40px] text-center text-[20px] font-bold">
            Send me a message
          </h1>
          <Form />
        </div>
      </div>
    </div>
  );
}
