import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonContent,
} from "@ionic/react";
import "./Recommendation.css";
import { tours } from "../data/tours.js";
import TourList from "../components/TourList";

interface RecommendationProp extends RouteComponentProps {}

const Recommendation: React.FC<RecommendationProp> = ({ history }) => {
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
        {tours.map((tour: any, index: number) => (
          <>
            <IonHeader>Option {index + 1}</IonHeader>
            <TourList tour={tour} key={index}></TourList>
          </>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Recommendation);
