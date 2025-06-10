import React from "react";

import clsx from "clsx";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={clsx(
        "rounded-[0.375rem] font-semibold bg-white text-gray-900 w-full color-gray-600 lg:w-fit px-4 py-5 shadow-lg",
        className
      )}
    />
  );
};

export { Input };
