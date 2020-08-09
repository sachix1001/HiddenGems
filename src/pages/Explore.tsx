import React from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import Select from "../components/Select";
import "./Explore.css";

const Explore: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border"></IonHeader>
      <IonContent>
        <h2 className="explore-padding-header">Hidden Gems Finder</h2>
        <Select />
      </IonContent>
    </IonPage>
  );
};

export default Explore;
