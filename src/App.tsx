import { Redirect, Route, useParams } from "react-router-dom";

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
import {
  albums,
  cart,
  ellipse,
  fastFood,
  glasses,
  glassesOutline,
  home,
  megaphone,
  search,
  searchCircle,
  searchCircleOutline,
  searchOutline,
  square,
  triangle,
} from "ionicons/icons";

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
import { restaurant_clients } from "./mockdata/restaurants";
import Product from "./pages/Product/ProductPage";
import LandingPage from "./pages/Landing/LandingPage";
import RestaurantPage from "./pages/Restaurant/RestaurantPage";
import {
  CheckoutContext,
  checkoutReducer,
  initialCheckoutContextState,
} from "./utils/reducer/checkout/reducer";
import { useReducer } from "react";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ProductPage from "./pages/Product/ProductPage";
import TrackOrderPage from "./pages/TrackOrder/TrackOrderPage";
import style from "./_app.module.scss";

const App: React.FC = () => {
  const [checkout_state, checkout_dispatch] = useReducer(
    checkoutReducer,
    initialCheckoutContextState
  );
  const checkoutValue = { checkout_state, checkout_dispatch };
  return (
    <IonApp>
      <CheckoutContext.Provider value={checkoutValue}>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/shop">
                <LandingPage />
              </Route>
              <Route exact path="/restaurang/:restauranttitle">
                <RestaurantPage />
              </Route>
              <Route exact path="/restaurang/:restauranttitle/:productid">
                <ProductPage />
              </Route>
              <Route path="/kassa">
                <CheckoutPage />
              </Route>
              <Route path="/spåraorder">
                <TrackOrderPage />
              </Route>
              <Route exact path="/">
                <Redirect to="/shop" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/shop">
                <IonIcon icon={home} />
                <IonLabel>Hem</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/restaurang">
                <IonIcon icon={albums} />
                <IonLabel>Bläddra</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/spåraorder">
                <IonIcon icon={megaphone} />
                <IonLabel>Spåra order</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab4" href="/kassa">
                <IonIcon icon={cart} />
                <IonLabel>Kassa</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </CheckoutContext.Provider>
    </IonApp>
  );
};

export default App;
