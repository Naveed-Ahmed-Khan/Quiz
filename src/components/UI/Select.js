import React, { Children } from "react";

export default function Select({
  required,
  children,
  placeholder,
  value,
  onChange,
  alt,
}) {
  const secondary =
    "py-3 px-4 placeholder:text-sm sm:placeholder:text-base placeholder:text-white placeholder:text-opacity-50 bg-primary-100 border border-primary-100 focus:bg-primary-100 focus:border focus:border-primary-100";
  const primary =
    "py-2 px-2 placeholder:text-xs bg-primary-200 border border-secondary-300 focus:bg-primary-200 focus:border focus:border-secondary-300";
  return (
    <div className="relative">
      <select
        className={`block appearance-none w-full text-white pr-8 rounded text-sm outline-none ring-0 focus:ring-0 focus:outline-none
        ${alt ? secondary : primary}
        `}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      >
        {children}
        {/* <option>Texas</option> */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
        <svg
          className={`text-secondary-300 h-5 w-5 mr-2
          ${alt ? "bg-primary-100" : "bg-primary-200"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
