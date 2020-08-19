import React from "react";
import { IonHeader, IonCard } from "@ionic/react";
import "./TourList.css";
import { Place } from "../model/tourModel";

interface TourListProp {
  tour: Place[];
}

const TourList: React.FC<TourListProp> = ({ tour }) => {
  return (
    <div className="scrolling-wrapper">
      {tour.map((place, index) => (
        <TourListSpot place={place} key={index}></TourListSpot>
      ))}
    </div>
  );
};

interface TourListSpotProp {
  place: Place;
}
const TourListSpot: React.FC<TourListSpotProp> = ({ place }) => {
  return (
    <IonCard className="tourList-card">
      <img
        className="tourList-card-img"
        src={process.env.PUBLIC_URL + `/assets/${place.photo}.jpg`}
        alt={place.name}
      ></img>
      <IonHeader className="tourList-card-header">{place.name}</IonHeader>
    </IonCard>
  );
};

export default TourList;
