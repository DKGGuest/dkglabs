import React from "react";

const RectangularBox = ({ children, className = "" }) => {
  return (
    <div
      className={`border-2 border-gray-300 p-6 rounded-xl shadow-md h-48 ${className}`}
    >
      {children}
    </div>
  );
};

export default RectangularBox;
