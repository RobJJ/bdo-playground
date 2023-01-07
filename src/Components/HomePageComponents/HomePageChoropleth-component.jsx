import React, { useRef, useEffect, useState } from "react";
import L, { Control } from "leaflet";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  useMap,
  Popup,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { vietnamGeoJSON } from "../../RegionData/GeoJSON-vietnam"; // import GeoJSON data for Vietnam
import ChildChoropleth from "./HomePAgeChoroplethVietnam-component";
import MapTypeToggle from "./HomePageChoroplethControl-component";
import ChoroLegend from "./HomePageChoroplethLegend-component";
import LayerSwitch from "./HomePageChoroplethLayerSwitch-component";
import RefreshMap from "./Choropleth-refresh-component";

const VietnamMap = ({ toggle, current }) => {
  const mapRef = useRef();
  const defaultPosition = [16.06, 108.21];
  //
  function changeZoom(e) {
    // sets view locations and zoom
    mapRef.current.setView(defaultPosition, 5);
    // set the year filter back to default
    // set score view back to default
  }
  //

  return (
    <MapContainer
      center={defaultPosition}
      zoom={5}
      scrollWheelZoom={true}
      className="h-full w-full"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.mapbox.com/styles/v1/robjj/clce68ufg003614nvvjlep2ke/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm9iamoiLCJhIjoiY2xjZTVva3NhMGQydzN3bGx5cnEwd2I1eSJ9.X-ErXEB4RZMQmGZvsaMGNA"
      />

      <ChildChoropleth />
      <MapTypeToggle current={current} toggle={toggle} />
      <ChoroLegend />
      <LayerSwitch />
      <RefreshMap changeZoom={changeZoom} />
    </MapContainer>
  );
};

export default VietnamMap;
//
//
// <Marker position={[51.505, -0.09]}>
//   <Popup>
//     A pretty CSS3 popup. <br /> Easily customizable.
//   </Popup>
// </Marker>;
