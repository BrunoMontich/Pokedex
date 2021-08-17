import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
import Pokemon from "../../components/Pokemon";
import SearchBar from "../../components/SearchBar";

function PokeInfo() {
  const [pokes, setPokes] = useState([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
  ]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1000"
      );
      setPokes(data.results);
    };
    fetchPokemons();
  }, []);

  return (
    <>
      {pokes && (
        <div className="Pokedex container">
          <h1>Pokedéx</h1>
          <SearchBar />
          <div className="pokemon-container">
            {pokes.map((poke, id) => (
              <Pokemon name={poke.name} id={id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PokeInfo;
