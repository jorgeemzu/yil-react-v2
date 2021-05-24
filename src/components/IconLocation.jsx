import L from "leaflet";

export const IconLocation = L.icon({
  iconUrl: require("../imgs/location.png"),
  iconRetinaUrl: require("../imgs/location.png"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
