import React, { useState } from "react";

const TipCard = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="container bg-orange-500">
      <div
        className="inner bg-gray-700 p-4 rounded-lg w-56 clip-circle-10 hover:clip-circle-75 hover:shadow-2xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="circle w-8 h-8 bg-transparent transform-translate-x-227 rounded-full flex justify-center items-center">
          <span className="text-white font-bold">i</span>
        </div>
        {isHovering && (
          <>
            <h1 className="text-white font-bold font-sans text-lg pl-4">
              Tip:
            </h1>
            <p className="text-white font-sans pl-4">
              Shoot all enemies to win.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default TipCard;
