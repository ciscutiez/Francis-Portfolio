import React, { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
}
const Button: React.FunctionComponent<ButtonProps> = ({ children }) => {
  return (
    <button className="rounded-lg bg-slate-500 px-4 py-1 hover:bg-slate-200">
      {children}
    </button>
  );
};

export default Button;
