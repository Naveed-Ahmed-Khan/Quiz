import React from "react";

const Button = ({
  primary,
  secondary,
  secondaryAlt,
  fullWidth,
  children,
  onClick,
  type,
  disabled,
}) => {
  const secondaryClass = "bg-primary-200";
  const secondaryLightClass = "bg-primary-100";
  const primaryClass = "bg-secondary-200";

  return (
    <button
      className={`active:scale-100 hover:scale-110 py-[0.8em] px-[1.3em] rounded
      ${secondary && secondaryClass} 
      ${secondaryAlt && secondaryLightClass} 
      ${primary && primaryClass} 
      ${disabled ? "opacity-60" : "opacity-100"} 
      ${fullWidth && "w-full"} 
      transition-all duration-200`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
