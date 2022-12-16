import React from "react";

const GridLayout = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4">
      <div className="h bg-blue-500 col-span-4">Header</div>
      <div className="d bg-red-500">Data</div>
      <div className="d bg-red-500">Data</div>
      <div className="d bg-red-500">Data</div>
      <div className="o bg-yellow-500">Other</div>
      <div className="d bg-red-500">Data</div>
      <div className="d bg-red-500">Data</div>
      <div className="d bg-red-500">Data</div>
      <div className="o bg-yellow-500">Other</div>
      <div className="d bg-red-500">Data</div>
      <div className="d bg-red-500">Data</div>
      <div className="d bg-red-500">Data</div>
      <div className="o bg-yellow-500">Other</div>
    </div>
  );
};

export default GridLayout;
