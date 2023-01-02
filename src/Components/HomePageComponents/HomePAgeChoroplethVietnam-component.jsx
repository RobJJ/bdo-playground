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
  const included = ALL_DISTRCITS.find((data) => data.DISTRICT === obj.DISTRICT);
  if (!included) {
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
    console.log(provinceName);
    const plainText = removeDiacritics(provinceName);
    console.log(plainText); // Output: Viet Nam
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
    console.log("layerData: ", layerData);
    // console.log("layer target: ", layer);
    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });

    layer.bringToFront();
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
  // Set the highlighted region back to default style
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
