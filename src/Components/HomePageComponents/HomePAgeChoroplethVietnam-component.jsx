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
  // Highlight feature to use when user is mouseOver the province
  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });

    layer.bringToFront();
  }
  // Takes the
  function resetHighlight(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 2,

      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    });
  }
  //
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      // click: zoomToFeature,
    });
  }

  // Function take a prop from data obj and determines color, we use this color to show differences on the map layer
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
  return (
    <GeoJSON
      onEachFeature={onEachFeature}
      style={style}
      data={vietnamGeoJSON}
    ></GeoJSON>
  );
}
//
export default ChildChoropleth;
