function CustomTooltip({ active, payload, label, data }) {
  //
  if (active && payload && payload.length) {
    return (
      <div className="bg-blue-200 p-5 rounded-lg">
        <p className="underline">{data}</p>
      </div>
    );
  }

  return null;
}
//
export default CustomTooltip;
