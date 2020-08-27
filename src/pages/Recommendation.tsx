import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonContent,
} from "@ionic/react";
import "./Recommendation.css";
import { tours, allTours } from "../data/tours.js";
import TourList from "../components/TourList";
import { Place } from "../model/tourModel";

interface RecommendationProp extends RouteComponentProps {}


const Recommendation: React.FC<RecommendationProp> = ({ history }) => {
  
  function onClick(tour: Place[]) {
    history.push({
      pathname: "/tourDetail",
      state: tour,
    });
  }
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
        {tours.map((tour: Place[], index: number) => (
          <div key={index} onClick={() => onClick(tour)}>
            <h4>Option {index + 1}</h4>
            <TourList tour={tour}></TourList>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Recommendation);
