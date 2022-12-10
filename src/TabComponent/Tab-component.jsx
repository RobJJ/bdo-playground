import React, { useState } from "react";

const Tabs = () => {
  //
  const [activeIndex, setActiveIndex] = useState(1);
  //
  const handleClick = (index) => setActiveIndex(index);
  //
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  //
  return (
    <div className="">
      <div className="flex">
        <button
          className={`w-full bg-blue-200 p-2 justify-center items-center ${checkActive(
            1,
            "bg-blue-400 font-bold"
          )}`}
          onClick={() => handleClick(1)}
        >
          Product Info
        </button>
        <button
          className={`w-full bg-blue-200 p-2 justify-center items-center ${checkActive(
            2,
            "bg-blue-400 font-bold"
          )}`}
          onClick={() => handleClick(2)}
        >
          Customer Reviews
        </button>
        <button
          className={`w-full bg-blue-200 p-2 justify-center items-center ${checkActive(
            3,
            "bg-blue-400 font-bold"
          )}`}
          onClick={() => handleClick(3)}
        >
          Delivery &amp; Returns
        </button>
      </div>
      <div className="panels">
        <div
          className={` bg-purple-200 p-2 ${
            activeIndex === 1 ? "block" : "hidden"
          }`}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat
            ligula, feugiat at felis vitae, porttitor lacinia quam.
          </p>
        </div>
        <div
          className={` bg-purple-200 p-2 ${
            activeIndex === 2 ? "block" : "hidden"
          }`}
        >
          <p>
            Nulla lobortis quis massa quis lobortis. Nullam porta semper lorem,
            vel efficitur augue rutrum quis. Suspendisse potenti.
          </p>
        </div>
        <div
          className={` bg-purple-200 p-2 ${
            activeIndex === 3 ? "block" : "hidden"
          }`}
        >
          <p>
            Cras porta consectetur dolor porttitor fringilla. Cras vitae urna ac
            erat fermentum egestas. Donec egestas cursus scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
};
//
export default Tabs;
