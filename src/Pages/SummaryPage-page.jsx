import React from "react";
//
function SummaryPage(params) {
  return (
    <div className="bg-blue-100 w-full h-full p-2 flex gap-2">
      <section className="w-4/6 h-full bg-blue-200 flex flex-col gap-1 p-2">
        <div className="bg-red-100 w-full h-4/6">Graph section</div>
        <div className="bg-red-100 w-full h-2/6">Bar score section</div>
      </section>
      <section className="w-2/6 h-full bg-blue-200 p-2">
        <div className="w-full h-full bg-red-100">
          Info and recommendation section
        </div>
      </section>
    </div>
  );
}
//
export default SummaryPage;
