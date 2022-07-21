import React from "react";

const Button = ({ fullWidth, children, alt, onClick, type, disabled }) => {
  return (
    <button
      className={`${
        alt
          ? "bg-primary-100 hover:bg-opacity-70"
          : `${
              disabled
                ? `opacity-60`
                : `bg-secondary-200 hover:bg-secondary-200`
            } `
      } ${
        fullWidth && "w-full"
      } active:scale-100 hover:scale-105 transition-all duration-200 py-[0.8em] px-[1.3em] rounded`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
