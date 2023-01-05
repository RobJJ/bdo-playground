import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  Popup,
  Marker,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";
import { vietnamGeoJSON } from "../../RegionData/GeoJSON-vietnam"; // import GeoJSON data for Vietnam
import { JSON_DATA } from "../../RegionData/JSON_DATA"; // green earth data
//
export const MAP_COLORS = [
  { color: "#005a32", range: 75 },
  { color: "#238b45", range: 65 },
  { color: "#41ab5d", range: 55 },
  { color: "#74c476", range: 45 },
  { color: "#a1d99b", range: 35 },
  { color: "#c7e9c0", range: 25 },
  { color: "#edf8e9", range: 15 },
  { color: "#FFEDA0", range: 0 },
];
// export const MAP_COLORS = {
//   COLOR_ONE: "#005a32",
//   COLOR_TWO: "#238b45",
//   COLOR_THREE: "#41ab5d",
//   COLOR_FOUR: "#74c476",
//   COLOR_FIVE: "#a1d99b",
//   COLOR_SIX: "#c7e9c0",
//   COLOR_SEVEN: "#edf8e9",
//   COLOR_EIGHT: "#FFEDA0",
// };
// function for changing Vietnam marking text to English plain
function removeDiacritics(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Đ/g, "D");
}
//
const data2021ZoneTotal = JSON_DATA.filter(
  (obj) => obj.YEAR === 2021 && obj.ZONE === "total"
);
// contains all the objects that have 2021 and 'total'
// console.log(data2021ZoneTotal);
//
// An array of the Districts: 2021: total
const ALL_DISTRCITS = [];
data2021ZoneTotal.forEach((obj) => {
  const isIncluded = ALL_DISTRCITS.find(
    (data) => data.DISTRICT === obj.DISTRICT
  );
  if (!isIncluded) {
    ALL_DISTRCITS.push({ ...obj });
  } else return;
});
// console.log(ALL_DISTRCITS);
//
function ChildChoropleth(params) {
  // Highlight feature to use when user is mouseOver the province
  function highlightFeature(e) {
    var layer = e.target;
    const provinceName = layer.feature.properties.shapeName;
    // console.log(provinceName);
    const plainText = removeDiacritics(provinceName);
    // console.log(plainText); // Output: Viet Nam
    const layerData = ALL_DISTRCITS.filter((obj) => obj.PROVINCE === plainText);
    const numberOfDistrcitsInProvince = layerData.length;
    // Create Average ECON_SCORE for Province -
    let econScores = 0;
    let envScores = 0;
    layerData.forEach((item) => {
      econScores += item.ECON_SCORE;
      envScores += item.ENVR_SCORE;
    });
    const averageEconScore = Math.round(
      econScores / numberOfDistrcitsInProvince
    );
    const averageEnvScore = Math.round(envScores / numberOfDistrcitsInProvince);
    // const averageEconScoreAcrossDistricts=
    // console.log("layerData: ", layerData);
    // console.log("layer target: ", layer);
    //
    // STYLES FOR onMouseOver
    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });
    layer.bringToFront();
    //
    // POPUP
    // customise the popup
    let options = {
      // docs:https://leafletjs.com/reference.html#tooltip
      offset: L.point(0, -30),
      className: "underline text-blue-200 font-bold",
    };
    // content for popup
    let content = `Province: ${layer.feature.properties.shapeName}</br>Districts: ${numberOfDistrcitsInProvince}</br>Econ Score: ${averageEconScore}</br>Env Score: ${averageEnvScore}`;
    // create the popup
    let popup = L.popup(options).setContent(content);
    //feature.properties.shapeName
    // set the popup
    layer.bindPopup(popup).openPopup();
  }
  // Set the highlighted region back to default style: hover
  function resetHighlight(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 2,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    });
  }
  // hover
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      // click: zoomToFeature,
    });
  }

  // set color for geoLayer based on input
  function getColor(d) {
    return d > 75
      ? MAP_COLORS[0].color
      : d > 65
      ? MAP_COLORS[1].color
      : d > 55
      ? MAP_COLORS[2].color
      : d > 45
      ? MAP_COLORS[3].color
      : d > 35
      ? MAP_COLORS[4].color
      : d > 25
      ? MAP_COLORS[5].color
      : d > 15
      ? MAP_COLORS[6].color
      : MAP_COLORS[7].color;
  }
  //
  // A function that returns an object containing styles
  // Using it for GeoJSON
  function style(feature) {
    const provinceName = removeDiacritics(feature.properties.shapeName);
    const layerData = ALL_DISTRCITS.filter(
      (obj) => obj.PROVINCE === provinceName
    );
    const numberOfDistrcitsInProvince = layerData.length;
    let envScores = 0;
    let econScores = 0;
    layerData.forEach((item) => {
      envScores += item.ENVR_SCORE;
      econScores += item.ECON_SCORE;
    });

    const averageEnvScore = Math.round(envScores / numberOfDistrcitsInProvince);
    const averageEconScore = Math.round(
      econScores / numberOfDistrcitsInProvince
    );
    return {
      fillColor: getColor(averageEnvScore),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }
  //
  return (
    <>
      <GeoJSON
        onEachFeature={onEachFeature}
        style={style}
        data={vietnamGeoJSON}
      ></GeoJSON>
    </>
  );
}
//
export default ChildChoropleth;

// This function needs to be cleaned up... there are a lot of repeating functions that need to be encapsulated in their own functions.
