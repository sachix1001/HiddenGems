import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  IonItem,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonButton,
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonSlides,
  IonSlide,
  IonImg,
} from "@ionic/react";
import "./Recommendation.css";

interface NumberOfPeopleProps {
  ageGroup: string;
}

interface RecommendationProp extends RouteComponentProps {}

const Recommendation: React.FC<RecommendationProp> = ({ history }) => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="explore" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <div className="scrolling-wrapper-flexbox">
        <IonCard className="card">
          <IonImg
            style={{ height: "10em", width: "90%" }}
            src={`assets/cloud.png`}
          />
          <IonCardHeader>
            <IonCardSubtitle>Madison, WI</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </div>
    </IonPage>
  );
};

export default withRouter(Recommendation);
