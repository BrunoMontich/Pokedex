import React from "react";

import { Link } from "react-router-dom";

import "./Pokemon.css";

const Pokemon = ({ name, id }) => {
  return (
    <div className="pokemon-list">
      <span
        style={{
          color: "white",
          fontWeight: "bold",
          fontFamily: "Montserrat",
        }}
      >
        {name.substring(0, 1).toUpperCase() + name.substring(1)}
      </span>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        className="pokemon-img"
      />
      <Link to={`/info/${id}`} className="pokemon-button">
        Info
      </Link>
    </div>
  );
};

export default Pokemon;
