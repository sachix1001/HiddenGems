import React from "react";
import { Redirect, Route } from "react-router-dom";
// import { GrDiamond } from "react-icons/gr";
// import { IconContext } from "react-icons";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { rocketOutline, searchOutline, starOutline } from "ionicons/icons";
import Explore from "./pages/Explore";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Theme from "./pages/Theme";
import Recommendation from "./pages/Recommendation";
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/explore" component={Explore} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/theme" component={Theme} />
          <Route path="/rec" component={Recommendation} />
          <Route
            path="/"
            render={() => <Redirect to="/explore" />}
            exact={true}
          />
          <Route
            path="/HiddenGems"
            render={() => <Redirect to="/explore" />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="explore" href="/explore">
            <IonIcon icon={searchOutline} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={rocketOutline} />
            <IonLabel>My Plans</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={starOutline} />
            {/* <IconContext.Provider
              value={{
                size: "3em",
                className: 'app-icon'
              }}
            >
              <div>
                <GrDiamond />
              </div>
            </IconContext.Provider> */}
            <IonLabel>Gems</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
