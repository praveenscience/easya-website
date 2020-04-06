import React from "react";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Home from "./Home/Home";
import { Switch, Route } from "react-router-dom";
import Terms from "./InfoPages/Terms";
import Privacy from "./InfoPages/Privacy";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
