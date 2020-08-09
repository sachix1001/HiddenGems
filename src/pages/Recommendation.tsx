import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  IonItem,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonButton,
} from "@ionic/react";

interface NumberOfPeopleProps {
  ageGroup: string;
}

interface RecommendationProp extends RouteComponentProps {}

const Recommendation: React.FC<RecommendationProp> = ({ history }) => {
  return (
    <div className="container">
      <Location></Location>
      <Length />
      <NumberOfPeople ageGroup="Adult"></NumberOfPeople>
      <NumberOfPeople ageGroup="Pre-school"></NumberOfPeople>
      <NumberOfPeople ageGroup="Primary-school"></NumberOfPeople>
      <NumberOfPeople ageGroup="Hight-school"></NumberOfPeople>
      <br />
      <br />
      <IonButton
        color="primary"
        expand="block"
        onClick={() => history.push("/theme")}
      >
        Explore
      </IonButton>
    </div>
  );
};

const Location = () => {
  const [location, setLocation] = useState<string>();
  return (
    <IonItem>
      <IonLabel>Location</IonLabel>
      <IonSelect
        value={location}
        onIonChange={(e) => setLocation(e.detail.value)}
      >
        <IonSelectOption value="cbd">Brisbane CBD</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};
const Length = () => {
  const [duration, setDuration] = useState<string>();
  return (
    <IonItem>
      <IonLabel>Duration</IonLabel>
      <IonSelect
        value={duration}
        onIonChange={(e) => setDuration(e.detail.value)}
      >
        <IonSelectOption value="halfDay">Half Day</IonSelectOption>
        <IonSelectOption value="fullDay">Full Day</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};
const NumberOfPeople: React.FC<NumberOfPeopleProps> = ({ ageGroup }) => {
  const [number, setNumber] = useState<string>();
  return (
    <IonItem>
      <IonLabel>{ageGroup}</IonLabel>
      <IonSelect value={number} onIonChange={(e) => setNumber(e.detail.value)}>
        <IonSelectOption value="adult">1</IonSelectOption>
        <IonSelectOption value="adult">2</IonSelectOption>
        <IonSelectOption value="adult">3</IonSelectOption>
        <IonSelectOption value="adult">4</IonSelectOption>
        <IonSelectOption value="adult">5</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default withRouter(Recommendation);
