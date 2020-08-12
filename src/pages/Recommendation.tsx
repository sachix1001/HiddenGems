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
import { tours } from "../data/tours.js";
import TourList from "../components/TourList";

interface RecommendationProp extends RouteComponentProps {}

type tourType = {
  name: string;
  description: string;
  photo: string;
  address: string;
};

const Recommendation: React.FC<RecommendationProp> = ({ history }) => {
  function onClick(tour: tourType[]) {
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
        {tours.map((tour: tourType[], index: number) => (
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
