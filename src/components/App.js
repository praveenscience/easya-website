import React from "react";
import { Switch, Route } from "react-router-dom";
import Paths from "../constants/Paths";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Home from "./Home/Home";
import Terms from "./InfoPages/Terms";
import Privacy from "./InfoPages/Privacy";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={Paths.Home}>
          <Home />
        </Route>
        <Route path={Paths.Terms}>
          <Terms />
        </Route>
        <Route path={Paths.Privacy}>
          <Privacy />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
