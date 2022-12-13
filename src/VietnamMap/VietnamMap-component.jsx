import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const PopulationDensityMap = ({ data, colorScale }) => {
  return (
    <MapContainer className="w-full h-full">
      <GeoJSON data={data} />
    </MapContainer>
  );
};
//
export default PopulationDensityMap;

// {
//     "type": "Feature",
//     "properties": {
//         "name": "Alabama",
//         "density": 94.65
//     },
//     "geometry": ...
//     ...
// }
