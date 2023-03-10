import React, { useEffect, useState, useRef, useMemo } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

const Map = ({ latlng }) => {
  const [position, setPosition] = useState(latlng);

  const markerRef = useRef();

  console.log(position);

  const icon = L.icon({
    iconUrl: "/location.png",
    iconSize: [40, 40],
  });

  function DraggableMarker() {
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );

    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={icon}
      ></Marker>
    );
  }

  return (
    <MapContainer center={position} zoom={14}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
      />
      <DraggableMarker />
    </MapContainer>
    // <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    // <Marker position={""}>
    //   <Popup>
    //     A pretty CSS3 popup. <br /> Easily customizable.
    //   </Popup>
    // </Marker>
    // </MapContainer>
  );
};
export default Map;
