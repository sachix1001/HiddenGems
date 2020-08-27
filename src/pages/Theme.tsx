import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Theme.css";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface ThemeProps extends RouteComponentProps {}

const Theme: React.FC<ThemeProps> = ({ history }) => {
  const ThemeArr = [
    "Sightseeing",
    "Graffiti",
    "Nature",
    "History tour",
    "Food and Gastronomy",
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="explore" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="theme-container">
        <h2 className="theme-padding-header">What do you want to do?</h2>
        <br />
        <br />
        <IonGrid className="theme-list-container">
          {ThemeArr.map((theme, index) => (
            <IonRow key={index}>
              <IonCol>
                <IonButton className="btn" onClick={() => history.push("/rec")}>
                  {theme}
                </IonButton>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Theme);
