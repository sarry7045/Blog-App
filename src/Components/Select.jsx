import React, { useId } from "react";

const Select = ({ options, label, className, ...props }, ref) => {
  const Id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={Id} className="">
          {" "}
        </label>
      )}
      <select
        {...props}
        id={Id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-500 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((values) => (
          <options key={values} values={values}>
            {values}
          </options>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
