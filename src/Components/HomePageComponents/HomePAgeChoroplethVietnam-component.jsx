import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  Popup,
  Marker,
} from "react-leaflet";
import { vietnamGeoJSON } from "../../RegionData/GeoJSON-vietnam"; // import GeoJSON data for Vietnam

//
function ChildChoropleth(params) {
  //
  function getColor(d) {
    if (d === "Polygon") {
      return "#800026";
    } else {
      return "#BD0026";
    }
  }
  //
  // A function that returns an object containing styles
  // Using it for GeoJSON
  function style(feature) {
    return {
      fillColor: getColor(feature.geometry.type),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }
  //
  return <GeoJSON style={style} data={vietnamGeoJSON}></GeoJSON>;
}
//
export default ChildChoropleth;
