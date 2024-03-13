"use client";
import { useField } from "formik";
import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
}

const Input = ({ label, placeholder, name, ...props }: InputProps) => {
  const [field, meta] = useField({ name, ...props });
  return (
    <div className="relative py-[10px]">
      <label className="block py-[10px]">{label}</label>
      <input
        className="h-[40px] w-[400px] border-b-2 border-[#575555] bg-[#fafafa] pl-1 focus:border-b-2 focus:border-[#575555]  focus:outline-none md:w-[400px] md:grow "
        placeholder={placeholder}
        type="text"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="pt-[2px] text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
