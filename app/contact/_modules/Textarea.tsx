"use client";
import React from "react";
import { useField } from "formik";
interface TextAreaProps {
  name: string;
  label: string;
}

const Textarea = ({ label, name, ...props }: TextAreaProps) => {
  const [field, meta] = useField({ name, ...props });
  return (
    <div className="pt-[15px]">
      <label className="block ">{label}</label>
      <textarea
        {...field}
        {...props}
        placeholder="Leave a message here..."
        className="h-[150px] w-[350px] grow rounded border-2 border-[#575555] bg-[#eeecec]    pl-1 pt-2 focus:border-b-2 focus:border-[#575555]  focus:outline-none md:h-[200px] md:w-[400px] dark:bg-[#2f2e2e]"
      />
      {meta.touched && meta.error ? (
        <div className="pt-[2px] text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Textarea;
