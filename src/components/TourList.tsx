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
    <IonCard className="card">
      <IonHeader>{place.name}</IonHeader>
      <IonItem>
        <IonImg
          style={{ height: "8em" }}
          src={process.env.PUBLIC_URL + `/assets/${place.photo}.jpg`}
        ></IonImg>
      </IonItem>
    </IonCard>
  );
};

export default TourList;
