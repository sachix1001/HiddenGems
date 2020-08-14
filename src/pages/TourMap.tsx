import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../utils/config";
import Geocode from "react-geocode";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 37,
  lng: -121,
};

function TourMap() {
  const [map, setMap] = React.useState(null);
  const googleKey = GOOGLE_API_KEY as string;

  Geocode.setApiKey(googleKey);

  Geocode.fromAddress("Russell St, South Brisbane QLD 4101").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    }
  );

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={{
            lat: 37,
            lng: -121,
          }}
        ></Marker>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(TourMap);
