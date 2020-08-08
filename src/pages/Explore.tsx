import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonList,
  IonListHeader,
} from "@ionic/react";
import Select from "../components/Select";
import "./Explore.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hidden Gems Finder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hidden Gems Finder</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Select name="select" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
