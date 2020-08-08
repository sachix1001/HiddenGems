import React, { useState } from "react";
import "./Select.css";
import {
  IonItem,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonList,
} from "@ionic/react";

interface ContainerProps {
  name: string;
}

const Select: React.FC<ContainerProps> = () => {
  const [location, setLocation] = useState<string>();
  return (
    <>
      <Location></Location>
      <Length />
      <NumberOfPeople></NumberOfPeople>
    </>
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
const NumberOfPeople = () => {
  const [location, setLocation] = useState<string>();
  return (
      <IonItem>
        <IonLabel>Number of People</IonLabel>
        <IonSelect
          value={location}
          onIonChange={(e) => setLocation(e.detail.value)}
        >
          <IonSelectOption value="adult">Brisbane CBD</IonSelectOption>
        </IonSelect>
      </IonItem>
  );
};

export default Select;
