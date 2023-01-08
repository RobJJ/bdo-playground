import React from "react";
//
//
function ListSectionItemBar(params) {
  return (
    <div className="  h-full w-full">
      <div className=" inset-0 flex gap-0.5 w-full h-full p-1">
        {[...Array(10)].map((_, i) => {
          return (
            <div
              key={i}
              className={` bg-blue-100 z-[2000]`}
              style={{ width: `${10}%` }}
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
