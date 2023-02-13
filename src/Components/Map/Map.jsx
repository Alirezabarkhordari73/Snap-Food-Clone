import React, { useEffect, useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const [latitude, setLatitude] = useState(35.715298);
  const [longitude, setLongitude] = useState(51.404343);
  // function LocationMarker() {
  //   const [position, setPosition] = useState(null);
  //   const [bbox, setBbox] = useState([]);

  //   const map = useMap();

  //   useEffect(() => {
  //     map.locate().on("locationfound", function (e) {
  //       // setPosition(e.latlng);
  //       // map.flyTo(e.latlng, map.getZoom());
  //       // const radius = e.accuracy;
  //       // const circle = L.circle(e.latlng, radius);
  //       // circle.addTo(map);
  //       setBbox(e.bounds.toBBoxString().split(","));
  //       console.log(e.latlng);
  //     });
  //   }, [map]);

  //   return position === null ? null : (
  //     <Marker position={position} icon={icon}>
  //       <Popup>
  //         You are here. <br />
  //         Map bbox: <br />
  //         <b>Southwest lng</b>: {bbox[0]} <br />
  //         <b>Southwest lat</b>: {bbox[1]} <br />
  //         <b>Northeast lng</b>: {bbox[2]} <br />
  //         <b>Northeast lat</b>: {bbox[3]}
  //       </Popup>
  //     </Marker>
  //   );
  // }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <MapContainer center={[35.715298, 51.404343]} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.715298, 51.404343]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {/* <LocationMarker /> */}
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
