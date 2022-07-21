import React from "react";
const Input = (props) => {
  return (
    <div className="flex flex-col gap-1 items">
      <label className="mb-2 self-start font-medium">{props.label}</label>
      <input
        required={props.required}
        autocomplete="off"
        className={`w-full text-sm sm:text-base text-opacity-50 bg-primary-100 rounded 
        outline-none border-none ring-0 focus:ring-2 focus:ring-secondary-200 focus:outline-none 
        placeholder-white placeholder-opacity-50 placeholder:text-sm sm:placeholder:text-base
        py-3 px-6 transition-all duration-300`}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        disabled={props.disabled}
      />
    </div>
  );
};

export default Input;
