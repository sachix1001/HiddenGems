import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IonItem, IonHeader, IonCard, IonImg } from "@ionic/react";
import "./TourList.css";

interface Place {
  name: string;
  description: string;
  photo: string;
  address: string;
}
interface TourListProp {
  tour: Place[];
}

const TourList: React.FC<TourListProp> = ({ tour }) => {
  return (
    <div className="scrolling-wrapper">
      {tour.map((place) => (
        <TourListSpot place={place}></TourListSpot>
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
      <IonHeader className='tourList-card-header'>{place.name}</IonHeader>
    </IonCard>
  );
};

export default TourList;
