import React from "react";

function ScoreBar(props) {
  const { score } = props;
  const percentageRounded = Math.round(score);
  const width = `${percentageRounded}%`;
  return (
    <div className="w-full bg-white">
      <div
        className={`bg-green-500`}
        style={{ width }}
      >{`${percentageRounded}%`}</div>
    </div>
  );
}
//
export default ScoreBar;
//w-[${percentageRounded}]
