import React from "react";

import clsx from "clsx";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
}

const FormButton: React.FC<ButtonProps> = ({
  children,
  style,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      style={{
        // @ts-ignore
        textWrap: "balance",
        ...style,
      }}
      className={clsx(
        "rounded-[0.375rem] text-sm md:text-base uppercase font-bold tracking-wider bg-cta-red hover:bg-red-400 active:bg-red-500 active:ring-2 ring-red-300 ring-opacity-60 text-white w-full lg:w-fit px-5 sm:px-7 py-5 shadow-xl transition duration-100",
        className
      )}
    >
      {children}
    </button>
  );
};

export { FormButton };
