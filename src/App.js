import React from "react";
import Pokedex from "./Screens/Pokedex";
import PokeInfo from "./Screens/PokeInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1
        className="title"
        style={{ fontWeight: "bold", fontFamily: "Montserrat" }}
      >
        Pokedex
      </h1>
      <div className="Pokedex container">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Pokedex />
            </Route>
            <Route path="/info/:id" exact>
              <PokeInfo />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
