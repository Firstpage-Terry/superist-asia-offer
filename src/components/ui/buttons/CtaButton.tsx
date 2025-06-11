import React from "react";
import clsx from "clsx";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  hasArrow?: boolean;
}

const CtaButton: React.FC<ButtonProps> = ({
  children,
  style,
  className,
  hasArrow,
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
        "inline-block p-[0.8rem] px-[1.5rem] rounded-[35px] font-bold font-nimbus-sans-ext whitespace-normal text-center text-[15px] uppercase transition-all bg-cta-red text-white hover:bg-white hover:text-cta-red"
      )}
    >
      {children} {hasArrow === true ? <i className="fa-solid fa-arrow-right ml-2"></i> : ''}
    </button>
  );
};

export { CtaButton };
