import React, { useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
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
import TourList from "../components/TourList";

const containerStyle = {
  width: window.innerWidth < 400 ? window.innerWidth : "400px",
  height: "400px",
};

function TourMap() {
  const [map, setMap] = React.useState(null);
  const [lat, setLat] = React.useState(-27.4769536);
  const [lng, setLng] = React.useState(153.0135977);
  const location = useLocation();
  const tour = location.state as Place[];
  const [markers, setMarkers] = React.useState(tour);

  function setPosition(position: any) {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  }

  function handleWindow(placeName: string) {
    const newMarkers = markers.map((place) => {
      if (placeName === place.name) {
        place.showWindow = true;
      } else {
        place.showWindow = false;
      }
      return place;
    });
    setMarkers(newMarkers);
  }

  function setGeolocation() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(setPosition);
    }
  }

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
            center={{
              lat,
              lng,
            }}
            zoom={13}
            onUnmount={onUnmount}
          >
            {markers &&
              markers.map((place: Place, index: number) => (
                <Marker
                  key={index}
                  position={place.location}
                  onClick={() => handleWindow(place.name)}
                >
                  {place.showWindow && <MapWindow place={place} />}
                </Marker>
              ))}
            <></>
          </GoogleMap>
        </LoadScript>
        <TourList tour={tour}/>
      </IonContent>
    </IonPage>
  );
}

interface MapWindowProp {
  place: Place;
}

const MapWindow: React.FC<MapWindowProp> = ({ place }) => {
  const placeNameWithoutSpace = place.name.split(" ").join("+");
  return (
    <InfoWindow position={place.location}>
      <div>
        <h6>{place.name}</h6>
        <div>{place.address}</div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${placeNameWithoutSpace}`}
          target="_blank"
        >
          open in google maps
        </a>
      </div>
    </InfoWindow>
  );
};

export default React.memo(TourMap);
