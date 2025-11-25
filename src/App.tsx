import { IonApp } from "@ionic/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DivisApp07144106 from "./pages/DivisApp07144106";

import "@ionic/react/css/core.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <Router>
        <Route exact path="/" component={DivisApp07144106} />
      </Router>
    </IonApp>
  );
};

export default App;
