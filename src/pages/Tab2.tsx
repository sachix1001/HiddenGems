import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
} from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg
          style={{ height: "10em", width: "90%" }}
          src={process.env.PUBLIC_URL + `/assets/diamond-icon.png`}
          alt="image"
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
