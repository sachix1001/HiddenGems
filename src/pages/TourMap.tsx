import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../utils/config";
import {
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonToolbar,
  IonContent,
} from "@ionic/react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = { lat: -34.397, lng: 150.644 };

function TourMap() {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="explore" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
            <></>
          </GoogleMap>
        </LoadScript>
      </IonContent>
    </IonPage>
  );
}

export default React.memo(TourMap);
