import React from "react";

const TextArea = (props) => {
  const secondary = "py-3 px-6 placeholder:text-sm sm:placeholder:text-base";
  const primary = "py-3 px-6 placeholder:text-xs";
  return (
    <div className="flex flex-col gap-1 items">
      <label className="text-secondary font-semibold">{props.label}</label>
      <textarea
        required={props.required}
        className={`${
          props.secondary ? secondary : primary
        } w-full text-sm sm:text-base text-opacity-50 bg-primary-100 rounded outline-none border-none ring-0 
        focus:ring-2 focus:ring-secondary-200 focus:outline-none 
        placeholder-white placeholder-opacity-50 
        transition-all duration-300`}
        rows={props.rows}
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

export default TextArea;
