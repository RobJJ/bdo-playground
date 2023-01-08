import React from "react";
//
//
function ListSectionItemBar({ value }) {
  //
  let testing = 55;
  let style = {
    width: "10%",
    backgroundImage: "",
  };
  //
  return (
    <div className="  h-full w-full">
      <div className=" inset-0 flex gap-0.5 w-full h-full p-1">
        {[...Array(10)].map((_, i) => {
          style = { width: "10%" };
          let colorToUse;

          if (testing >= 10) {
            colorToUse = "bg-blue-300";
          }
          if (testing < 10 && testing > 0) {
            style.backgroundImage = `linear-gradient(to right, #93C5FD ${
              testing * 10
            }%, #CBD5E1 ${(10 - testing) * 10}%)`;
            // colorToUse = `bg-gradient-to-r `;
            // colorToUse = `linear-gradient(to right, bg-blue-300 ${
            //   testing * 10
            // }%, bg-red-300 ${(10 - testing) * 10}%)`;
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
