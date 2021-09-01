import React, { useEffect } from "react";
import Pokedex from "./Screens/Pokedex";
import PokeInfo from "./Screens/PokeInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useBackground } from "./Context/background";

function App() {
  const [background] = useBackground();

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = background[3].color;
  }, [background]);

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
