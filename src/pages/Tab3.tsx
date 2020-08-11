import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Gems</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="gem-content">
        <div>
          <h1 className="gem-count">
            35 <span className="gem-text">gems</span>
          </h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
