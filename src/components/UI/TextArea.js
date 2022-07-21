import React from "react";

const TextArea = (props) => {
  return (
    <div className="flex flex-col gap-1 items">
      <label className="text-secondary font-semibold">{props.label}</label>
      <textarea
        required={props.required}
        autocomplete="off"
        className={`w-full text-primary-500 text-base xl:text-lg text-opacity-60 bg-[#E6EBFF] border-2 border-[#E6EBFF] rounded-2xl outline-none ring-0 
        placeholder-primary-500 placeholder-opacity-40 placeholder:font-rublik placeholder:text-base xl:placeholder:text-lg
          focus:border-2 focus:border-primary-500 focus:border-opacity-40 caret-primary-500 shadow-xl
          py-3 px-12 transition-all duration-300`}
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
