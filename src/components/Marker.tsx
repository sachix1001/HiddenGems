import React from "react";
import { InfoWindow } from "@react-google-maps/api";
// import './Marker.css';

const onLoad = (infoWindow: any) => {
  console.log("infoWindow: ", infoWindow);
};

const Marker = (props: any) => {
  const { color, name, id, text, position } = props;
  return (
    <>
      <div className="marker">{text}</div>
      <InfoWindow onLoad={onLoad} position={position}>
        <div>
          <h1>InfoWindow</h1>
        </div>
      </InfoWindow>
    </>
  );
};

export default Marker;
