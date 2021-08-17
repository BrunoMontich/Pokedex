import React from "react";

import "./Pokemon.css";

const Pokemon = ({ name, id }) => {
  return (
    <div className="pokemon-list">
      <span style={{ color: "white", fontWeight: "bold" }}>
        {name.substring(0, 1).toUpperCase() + name.substring(1)}
      </span>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          id + 1
        }.png`}
        className="pokemon-img"
      />
      <input type="button" value="Info" className="pokemon-button"></input>
    </div>
  );
};

export default Pokemon;
