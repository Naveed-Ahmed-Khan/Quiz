import React, { useEffect, useState } from "react";
import Button from "./Button";
// import Spinner from "./Spinner";

const InputFile = ({ required, onChange, name, imageName, placeholder }) => {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="flex gap-4">
      <label
        className="flex justify-between items-center py-3 px-6 w-full text-sm sm:text-base text-opacity-50 bg-primary-100 rounded outline-none border-none ring-0 
        focus:ring-2 focus:ring-secondary-200 focus:outline-none 
        placeholder-white placeholder-opacity-50 
        transition-all duration-300 overflow-auto"
      >
        <div>
          {imageName ? (
            <p className="text-white text-sm">{imageName}</p>
          ) : (
            <p className="text-white text-opacity-50 text-xs">Upload Image</p>
          )}
        </div>
        <svg
          className="h-4 w-4 text-white z-50 bg-primary-100"
          viewBox="0 0 15 14"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.894 1.50402L6.88963 10.5094C6.88963 10.6641 6.95536 10.8125 7.07236 10.9219C7.18937 11.0312 7.34805 11.0927 7.51352 11.0927C7.67898 11.0927 7.83767 11.0312 7.95467 10.9219C8.07168 10.8125 8.13741 10.6641 8.13741 10.5094L8.14177 1.51394L9.95853 3.21316C10.0755 3.32252 10.2342 3.38395 10.3996 3.38395C10.5651 3.38395 10.7237 3.32252 10.8407 3.21316C10.9577 3.10377 11.0234 2.95543 11.0234 2.80075C11.0234 2.64607 10.9577 2.49773 10.8407 2.38834L8.83741 0.512952C8.66359 0.350333 8.45721 0.221331 8.23005 0.133316C8.00289 0.0453016 7.75941 0 7.51352 0C7.26763 0 7.02415 0.0453016 6.79699 0.133316C6.56983 0.221331 6.36345 0.350333 6.18963 0.512952L4.18633 2.38659C4.06937 2.49598 4.00366 2.64432 4.00366 2.799C4.00366 2.95368 4.06937 3.10202 4.18633 3.21141C4.30332 3.32077 4.46198 3.3822 4.62742 3.3822C4.79285 3.3822 4.95151 3.32077 5.0685 3.21141L6.894 1.50402Z" />
          <path d="M13.7522 9.91682V12.2501C13.7522 12.4048 13.6865 12.5532 13.5695 12.6626C13.4525 12.772 13.2938 12.8334 13.1283 12.8334H1.89849C1.73303 12.8334 1.57434 12.772 1.45734 12.6626C1.34034 12.5532 1.27461 12.4048 1.27461 12.2501V9.91682C1.27461 9.76211 1.20888 9.61374 1.09188 9.50435C0.974883 9.39495 0.816197 9.3335 0.650734 9.3335C0.485271 9.3335 0.326585 9.39495 0.209585 9.50435C0.0925853 9.61374 0.0268555 9.76211 0.0268555 9.91682L0.0268555 12.2501C0.0268555 12.7142 0.224045 13.1594 0.575045 13.4875C0.926045 13.8157 1.4021 14.0001 1.89849 14.0001H13.1283C13.6247 14.0001 14.1007 13.8157 14.4517 13.4875C14.8027 13.1594 14.9999 12.7142 14.9999 12.2501V9.91682C14.9999 9.76211 14.9342 9.61374 14.8172 9.50435C14.7002 9.39495 14.5415 9.3335 14.3761 9.3335C14.2106 9.3335 14.0519 9.39495 13.9349 9.50435C13.8179 9.61374 13.7522 9.76211 13.7522 9.91682Z" />
        </svg>

        <input
          required={required}
          className="hidden"
          type="file"
          name={name}
          onChange={onChange}
        />
      </label>

      {/* {isUploading ? (
        <div className="grid place-content-center w-20">
          <div>Loading...</div>
        </div>
      ) : (
        <Button
          type="button"
          onClick={() => {
            // setIsUploading(true);
            onUpload();
            // setIsUploading(true);
          }}
        >
          {children}
        </Button>
      )} */}
    </div>
  );
};

export default InputFile;
