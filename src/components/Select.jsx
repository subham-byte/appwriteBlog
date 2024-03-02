/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useId } from "react";

const select = ({ options, label, className, ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="">
          <select
            id={id}
            {...props}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>{" "}
          {/* if options exists then only this will get executed*/}
        </label>
      )}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.forwardRef(select);
