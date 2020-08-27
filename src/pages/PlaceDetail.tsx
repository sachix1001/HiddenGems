import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonTitle,
} from "@ionic/react";
import { withRouter, RouteComponentProps, useLocation } from "react-router-dom";
import { Place } from "../model/tourModel";

interface placeProp {
  place: Place;
}

interface PlaceDetailProps extends placeProp, RouteComponentProps {}

const PlaceDetail: React.FC<PlaceDetailProps> = ({ history }) => {
  const location = useLocation();
  const place = location.state as Place;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tourDetail" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle>{place.name}</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(PlaceDetail);
