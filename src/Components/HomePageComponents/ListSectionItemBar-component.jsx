import React from "react";
//
//
function ListSectionItemBar({ value, type }) {
  //
  let testing = value;
  let style = {
    width: "10%",
    backgroundImage: "",
    // transition: "width 0.8s ease-in-out",
  };
  //
  //#238b45
  //#2171b5
  //
  return (
    <div className="  h-full w-full">
      <div className=" inset-0 flex gap-0.5 w-full h-full p-1">
        {[...Array(10)].map((_, i) => {
          style = { width: "10%" };
          let colorToUse;

          if (testing >= 10) {
            colorToUse = type === "eco" ? "bg-[#4292c6]" : "bg-[#41ab5d]";
          }
          if (testing < 10 && testing > 0) {
            // using 2nd color as 0% created fixed line instead of gradient
            style.backgroundImage = `linear-gradient(90deg, ${
              type === "eco" ? "#4292c6" : "#41ab5d"
            } ${testing * 10}%, #CBD5E1 0%)`;
          }
          if (testing <= 0) {
            colorToUse = "bg-slate-300";
          }

          testing -= 10;

          return (
            <div
              key={i}
              className={`${colorToUse} `}
              style={style}
              //   style={{ width: `${10}%` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
//
//
export default ListSectionItemBar;
// <div className="bg-blue-100 w-full h-full testing">
//   <div className="h-full bg-blue-500" style={{ width: `${42}%` }} />
// </div>;
//<div className="h-full bg-blue-500" style={{ width: `${50}%` }} />
//.two-color-div {
//   background: linear-gradient(to right, red 50%, blue 50%);
// }
