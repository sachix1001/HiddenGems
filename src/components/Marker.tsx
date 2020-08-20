import React from "react";
// import './Marker.css';

const Marker = (props: any) => {
  const { color, name, id, text } = props;
  return <div className="marker">{text}</div>;
};

export default Marker;
