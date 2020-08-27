import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import { Place } from "../model/tourModel";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface PlaceProp {
  place: Place;
}
interface PlaceCardProp extends PlaceProp, RouteComponentProps {}

const PlaceCard: React.FC<PlaceCardProp> = ({ place, history }) => {
  const photo = place.photo !== undefined ? place.photo : "no-image";

  function onClick(place: Place) {
    console.log("onClick -> history", history);
    history.push({ pathname: "/placeDetail", state: place });
  }

  return (
    <IonCard className="placeCard-card" onClick={() => onClick(place)}>
      <img
        className="placeCard-card-img"
        src={process.env.PUBLIC_URL + `/assets/${photo}.jpg`}
        alt={place.name}
      ></img>
      <IonCardHeader className="placeCard-card-header">
        <IonCardTitle>{place.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{place.description}</IonCardContent>
      <IonCardContent>Address: {place.address}</IonCardContent>
    </IonCard>
  );
};

export default withRouter(PlaceCard);
