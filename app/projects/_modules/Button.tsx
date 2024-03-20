import React, { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string | undefined;
}
const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  className,
  href,
}) => {
  return (
    <button
      className={`rounded-lg border border-black bg-[#ff499a] px-4 py-2 hover:bg-[#ff499bd8] ${className}`}
    >
      <a href={href} target="_blank">
        {children}
      </a>
    </button>
  );
};

export default Button;
