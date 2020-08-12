import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import { Place } from "../model/tourModel";

interface PlaceCardProp {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProp> = ({ place }) => {
  return (
    <IonCard className="placeCard-card">
      <img
        className="placeCard-card-img"
        src={process.env.PUBLIC_URL + `/assets/${place.photo}.jpg`}
        alt={place.name}
      ></img>
      <IonCardHeader className="placeCard-card-header">
        <IonCardTitle>{place.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{place.description}</IonCardContent>
    </IonCard>
  );
};

export default PlaceCard;
