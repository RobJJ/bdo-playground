import React from "react";
//
function SummaryPage(params) {
  return (
    <div className="bg-blue-100 w-full h-full p-2 flex gap-2">
      <section className="w-4/6 h-full bg-blue-200 flex flex-col gap-2 p-2">
        <div className="bg-white w-full h-4/6 rounded-lg shadow-lg p-2">
          Graph section
        </div>
        <div className="bg-white w-full h-2/6 rounded-lg shadow-lg p-2">
          Bar score section
        </div>
      </section>
      <section className="w-2/6 h-full bg-blue-200 p-2">
        <div className="w-full h-full bg-white shadow-lg rounded-lg p-2">
          Info and recommendation section
        </div>
      </section>
    </div>
  );
}
//
export default SummaryPage;
