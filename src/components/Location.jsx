import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IconLocation } from "./IconLocation";
import icon from "../imgs/marker.svg";

export default function Location() {
  const position = [18.3979297, -66.1638736];
  return (
    <section className="container sec-location">
      <h2>¿Donde nos puedes encontrar?</h2>
      <div className="location-grid">
        <Map center={position} zoom={17}>
          <TileLayer
            // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={IconLocation}></Marker>
        </Map>

        <div className="address-container">
          <img src={icon} alt="location icon" />
          <p>951 Carr Puerto Rico 2, Bayamón, 00961, Puerto Rico</p>
        </div>
      </div>
    </section>
  );
}
