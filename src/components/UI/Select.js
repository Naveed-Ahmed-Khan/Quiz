import React, { Children } from "react";

export default function Select({ children, placeholder }) {
  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-primary-200 border border-secondary-300 text-white 
        py-2 px-2 pr-8 rounded leading-tight text-sm
        focus:outline-none focus:bg-primary-200 focus:border-secondary-300"
        id="grid-state"
        placeholder={placeholder}
      >
        {children}
        {/* <option>Texas</option> */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
        <svg
          className="text-secondary-300 bg-primary-200 h-5 w-5"
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
