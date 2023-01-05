import React from "react";
import { useGlobalContext } from "../../Context-Reducer/Context";
//
function LayerSwitch(params) {
  //
  const { layerType, setLayerType } = useGlobalContext();
  //   console.log("layer type from swtich, ", layerType);
  function handleLayerTypeSwitch(e) {
    // console.log("working here.. data tag:", e.target.dataset.tag);
    const choice = e.target.dataset.tag;
    if (layerType === "env" && choice === "econ") {
      setLayerType("econ");
    }
    if (layerType === "econ" && choice === "env") {
      setLayerType("env");
    }
  }
  //
  return (
    <div className="absolute left-0 top-20 z-[2000] flex flex-col bg-[#f5f5f5] border-slate-400 border-2 ml-3">
      <button
        onClick={handleLayerTypeSwitch}
        data-tag="env"
        className={`p-1 border-b-2 border-slate-400 ${
          layerType === "env" ? `bg-green-300` : null
        }`}
        type="button"
      >
        Env
      </button>
      <button
        onClick={handleLayerTypeSwitch}
        data-tag="econ"
        className={`p-1 ${layerType === "econ" ? `bg-blue-300` : null}`}
        type="button"
      >
        Econ
      </button>
    </div>
  );
}
//
export default LayerSwitch;
