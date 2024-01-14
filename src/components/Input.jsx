/* eslint-disable react/prop-types */
import React from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  return (
    <div>
      {label && (
        <label htmlFor="" className="text-base font-medium text-gray-900">
          {" "}
          {label}{" "}
        </label>
      )}

      <div className="mt-2">
        <input
          className={`${className} text-black flex h-10  items-start w-full rounded-md border border-gray-300  px-3  text-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
          type={type}
          {...props}
          ref={ref}
        ></input>
      </div>
    </div>
  );
});

export default Input;
