import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../utils/config";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import { Place } from "../model/tourModel";

const containerStyle = {
  width: window.innerWidth < 400 ? window.innerWidth : "400px",
  height: "400px",
};

const center = {
  lat: -27.4769536,
  lng: 153.0135977,
};

function TourMap() {
  const [map, setMap] = React.useState(null);
  const location = useLocation();
  const tour = location.state as Place[];

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="tourDetail" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {tour &&
              tour.map((place: Place, index: number) => (
                <Marker key={index} position={place.location}></Marker>
              ))}
            <></>
          </GoogleMap>
        </LoadScript>
      </IonContent>
    </IonPage>
  );
}

export default React.memo(TourMap);
