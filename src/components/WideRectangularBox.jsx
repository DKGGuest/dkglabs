import React from "react";

const WideRectangularBox = ({
  heading,
  subheadings = [],
  imageSrc,
  imageAlt,
  className = "",
}) => {
  return (
    <div
      className={`border-2 border-gray-300 p-6 rounded-xl shadow-md h-auto w-full max-w-[100vw] ${className}`}
    >
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex-1">
          {/* Main heading with maximum font size and boldness */}
          {heading && (
            <h3 className="text-4xl leading-tight">
              {heading}
            </h3>
          )}

          {/* Subheadings with content */}
          {subheadings.length > 0 && (
            <div className="mt-2 space-y-4">
              {subheadings.map((subheading, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-2xl">
                    {subheading.title}
                  </h4>
                  <p className="font-normal">
                    {subheading.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image Section */}
        {imageSrc && (
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WideRectangularBox;
