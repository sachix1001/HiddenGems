import React, { useState } from "react";
import "./Select.css";
import {  RouteComponentProps, withRouter } from "react-router-dom";
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

interface SelectProps extends RouteComponentProps {}

const Select: React.FC<SelectProps> = ({ history }) => {
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
        expand="block"
        className='explore-btn'
        onClick={() => history.push("/theme")}
      >
        Explore
      </IonButton>
    </div>
  );
};

const Location = () => {
  const [location, setLocation] = useState<string>('cbd');
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
  const [duration, setDuration] = useState<string>('fullDay');
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
        <IonSelectOption value="1">1</IonSelectOption>
        <IonSelectOption value="2">2</IonSelectOption>
        <IonSelectOption value="3">3</IonSelectOption>
        <IonSelectOption value="4">4</IonSelectOption>
        <IonSelectOption value="5">5</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default withRouter(Select);
