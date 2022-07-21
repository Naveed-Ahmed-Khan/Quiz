import React, { useEffect, useState } from "react";
import Button from "./Button";
import Spinner from "./Spinner";

const InputFile = ({ onChange, name, onUpload, children, imageName }) => {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="flex gap-4">
      <label
        className="block  py-1 px-2 cursor-pointer rounded text-center min-w-[8rem] max-w-[10rem]
        border-2 border-dashed border-primary 
        hover:border-3 hover:border-dashed hover:border-primary 
        transition ease-out duration-1000"
      >
        <span className="text-sm">
          {imageName ? imageName : "Choose image"}
        </span>
        <input className="hidden" type="file" name={name} onChange={onChange} />
      </label>

      {isUploading ? (
        <div className="grid place-content-center w-20">
          <Spinner alt />
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
      )}
    </div>
  );
};

export default InputFile;
