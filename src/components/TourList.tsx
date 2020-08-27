import React from "react";
import {
  IonHeader,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
} from "@ionic/react";
import "./TourList.css";
import { Place } from "../model/tourModel";

interface TourListProp {
  tour: Place[];
  handleWindow?: Function;
}

const TourList: React.FC<TourListProp> = ({ tour, handleWindow }) => {
  return (
    <div className="scrolling-wrapper">
      {tour &&
        tour.map((place, index) => (
          <TourListSpot
            place={place}
            key={index}
            handleWindow={handleWindow}
          ></TourListSpot>
        ))}
    </div>
  );
};

interface TourListSpotProp {
  place: Place;
  handleWindow?: Function;
}
const TourListSpot: React.FC<TourListSpotProp> = ({ place, handleWindow }) => {
  return (
    <IonCard
      className="tourList-card"
      onClick={() => {
        if (handleWindow) handleWindow(place.name);
      }}
    >
      <img
        className="tourList-card-img"
        src={process.env.PUBLIC_URL + `/assets/${place.photo}.jpg`}
        alt={place.name}
      ></img>
      <IonCardHeader className="tourList-card-header">
        <IonCardSubtitle>{place.name}</IonCardSubtitle>
      </IonCardHeader>
      {/* <IonCardContent className="tourList-card-content">
        {place.description}
      </IonCardContent> */}
    </IonCard>
  );
};

export default TourList;
