import React, { useRef, useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  Popup,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { vietnamGeoJSON } from "../../RegionData/GeoJSON-vietnam"; // import GeoJSON data for Vietnam

const VietnamMap = () => {
  const defaultPosition = [16.06, 108.21];

  //   const mapTest = useMap();
  //   console.log("map center:", mapTest);
  //   const mapRef = useRef();

  //   useEffect(() => {
  //     // Set the style for each province
  //     const style = (feature) => {
  //       return {
  //         fillColor: "#ff0000", // set the fill color to red
  //         weight: 1,
  //         opacity: 1,
  //         color: "#000000", // set the outline color to black
  //         dashArray: "3",
  //         fillOpacity: 0.7,
  //       };
  //     };

  //     // Add the GeoJSON layer to the map
  //     const geojson = L.geoJSON(vietnamGeoJSON, {
  //       style: style,
  //     }).addTo(mapRef.current.leafletElement);

  //     // Zoom the map to fit the bounds of the GeoJSON layer
  //     mapRef.current.leafletElement.fitBounds(geojson.getBounds());
  //   }, []); // only run this effect once when the component mounts

  return (
    <MapContainer
      center={defaultPosition}
      zoom={5}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <GeoJSON data={vietnamGeoJSON}></GeoJSON>
    </MapContainer>
  );
};

export default VietnamMap;
//
//
