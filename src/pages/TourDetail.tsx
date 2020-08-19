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
} from "@ionic/react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Place } from "../model/tourModel";
import { useLocation } from "react-router-dom";
import { mapOutline } from "ionicons/icons";
import PlaceCard from "../components/PlaceCard";

interface TourDetailProps extends RouteComponentProps {}

const TourDetail: React.FC<TourDetailProps> = ({ history }) => {
  const location = useLocation();
  const tour = location.state as Place[];

  function onClick(tour: Place[]) {
    history.push({ pathname: "/tourMap", state: tour });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/rec" />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => onClick(tour)}>
              <IonIcon icon={mapOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {tour &&
          tour.map((place: Place, index: number) => (
            <PlaceCard place={place} key={index} />
          ))}
      </IonContent>
    </IonPage>
  );
};

export default withRouter(TourDetail);
