import React from "react";

function SelectGroup({
  className = "",
  name,
  options = [],
  onChange = () => {},
  error = false,
  errorText = "",
  description = "",
  placeholder = "",
  label = "",
  noBorder = false,
  ...newProps
}) {
  const hasError = error || errorText;
  let finalClass = `${className} block appearance-none w-full bg-white rounded-md pl-4 py-3 pr-8 cursor-pointer focus:outline-none`;
  if (hasError) finalClass += " border-red-600";
  if (noBorder) finalClass += " border border-gray-200 hover:border-gray-300";
  const Options = options.map((o) => (
    <option key={`${o.value}-${name}`} selected={o.selected} value={o.value}>
      {o.label}
    </option>
  ));
  return (
    <div>
      {label && (
        <label
          className={`text-sm text-gray-600 inline-block ${
            hasError && "text-red-600"
          }`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="flex relative w-full">
        <select
          className={finalClass}
          onChange={(e) => onChange(e.currentTarget.value)}
          {...newProps}
        >
          {placeholder ? <option>{placeholder}</option> : null}
          {Options}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <svg
            className="fill-current bg-gray-200 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {description && (
        <span className="mt-2 text-gray-600 text-xs">{description}</span>
      )}
      {errorText && (
        <div className="bg-red-200 mt-2 py-2 px-4 text-xs text-red-600 rounded-sm">
          {errorText}
        </div>
      )}
    </div>
  );
}

export default SelectGroup;
