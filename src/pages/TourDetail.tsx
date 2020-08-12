import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { withRouter } from "react-router-dom";
import { Place } from "../model/tourModel";
import { useLocation } from "react-router-dom";
import PlaceCard from "../components/PlaceCard";

const TourDetail: React.FC = () => {
  const location = useLocation();
  // const tour = JSON.parse(JSON.stringify(location.state));
  const tour = location.state as Place[];

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
        {tour && tour.map((place: Place) => <PlaceCard place={place} />)}
      </IonContent>
    </IonPage>
  );
};

export default withRouter(TourDetail);
