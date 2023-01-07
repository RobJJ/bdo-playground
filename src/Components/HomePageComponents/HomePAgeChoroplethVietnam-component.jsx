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
// import province data for vietnam
import { vietnamGeoJSON } from "../../RegionData/GeoJSON-vietnam";
// import district data for vietnam
// import { districtGeoJSON } from "../../RegionData/GeoJSON-districts-vietnam";
import { JSON_DATA } from "../../RegionData/JSON_DATA"; // green earth data
import { useGlobalContext } from "../../Context-Reducer/Context";
import { useEffect } from "react";
//
export const MAP_COLORS_ENV = [
  { color: "#005a32", range: 75 },
  { color: "#238b45", range: 65 },
  { color: "#41ab5d", range: 55 },
  { color: "#74c476", range: 45 },
  { color: "#a1d99b", range: 35 },
  { color: "#c7e9c0", range: 25 },
  { color: "#e5f5e0", range: 15 },
  { color: "#f7fcf5", range: 0 },
];
export const MAP_COLORS_ECON = [
  { color: "#084594", range: 75 },
  { color: "#2171b5", range: 65 },
  { color: "#4292c6", range: 55 },
  { color: "#6baed6", range: 45 },
  { color: "#9ecae1", range: 35 },
  { color: "#c6dbef", range: 25 },
  { color: "#deebf7", range: 15 },
  { color: "#f7fbff", range: 0 },
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
// Yearly filtered Data - hardCoded for testing
const data2021ZoneTotal = JSON_DATA.filter(
  (obj) => obj.YEAR === 2021 && obj.ZONE === "total"
);
const data2020ZoneTotal = JSON_DATA.filter(
  (obj) => obj.YEAR === 2020 && obj.ZONE === "total"
);
const data2018ZoneTotal = JSON_DATA.filter(
  (obj) => obj.YEAR === 2018 && obj.ZONE === "total"
);
const data2019ZoneTotal = JSON_DATA.filter(
  (obj) => obj.YEAR === 2019 && obj.ZONE === "total"
);
const dataByYear = {
  2021: data2021ZoneTotal,
  2020: data2020ZoneTotal,
  2019: data2019ZoneTotal,
  2018: data2018ZoneTotal,
};
//
//
// An array of the Districts: 2021: total

//
//
function ChildChoropleth(params) {
  console.log("being called!");
  // Bring in the layerType to determine color schema
  const { layerType, choroplethYear, setChoroplethYear } = useGlobalContext();
  // data pulled in based on year filter selected
  const dataToUse = dataByYear[choroplethYear];
  //
  const ALL_DISTRCITS = [];
  // IIFE - everytime choroplethYear changes, this will be called again on mount
  (function updateDistrictData() {
    dataToUse.forEach((obj) => {
      const isIncluded = ALL_DISTRCITS.find(
        (data) => data.DISTRICT === obj.DISTRICT
      );
      if (!isIncluded) {
        ALL_DISTRCITS.push({ ...obj });
      } else return;
    });
  })();
  //

  // console.log(dataToUse);
  //
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
    //
    // STYLES FOR onMouseOver - highlighting effect
    layer.setStyle({
      weight: 3,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });
    layer.bringToFront();
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
  // handleClick on map province ... set state var here
  function handleProvinceClick(e) {
    // var layer = e.target;
    // const provinceName = layer.feature.properties.shapeName;
    // console.log(layer.feature);
  }
  // hover
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: handleProvinceClick,
    });
  }

  // set color for geoLayer based on input
  function getColor(d) {
    if (layerType === "env") {
      return d > 75
        ? MAP_COLORS_ENV[0].color
        : d > 65
        ? MAP_COLORS_ENV[1].color
        : d > 55
        ? MAP_COLORS_ENV[2].color
        : d > 45
        ? MAP_COLORS_ENV[3].color
        : d > 35
        ? MAP_COLORS_ENV[4].color
        : d > 25
        ? MAP_COLORS_ENV[5].color
        : d > 15
        ? MAP_COLORS_ENV[6].color
        : MAP_COLORS_ENV[7].color;
    }
    if (layerType === "econ") {
      return d > 75
        ? MAP_COLORS_ECON[0].color
        : d > 65
        ? MAP_COLORS_ECON[1].color
        : d > 55
        ? MAP_COLORS_ECON[2].color
        : d > 45
        ? MAP_COLORS_ECON[3].color
        : d > 35
        ? MAP_COLORS_ECON[4].color
        : d > 25
        ? MAP_COLORS_ECON[5].color
        : d > 15
        ? MAP_COLORS_ECON[6].color
        : MAP_COLORS_ECON[7].color;
    }
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
      // fillColor: "#238b45",
      fillColor:
        layerType === "env"
          ? getColor(averageEnvScore)
          : getColor(averageEconScore),
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
        // data={districtGeoJSON}
      ></GeoJSON>
    </>
  );
}
//
export default ChildChoropleth;

// This function needs to be cleaned up... there are a lot of repeating functions that need to be encapsulated in their own functions.

// Old method to set 2021 district info
// data2021ZoneTotal.forEach((obj) => {
//   const isIncluded = ALL_DISTRCITS.find(
//     (data) => data.DISTRICT === obj.DISTRICT
//   );
//   if (!isIncluded) {
//     ALL_DISTRCITS.push({ ...obj });
//   } else return;
// });
